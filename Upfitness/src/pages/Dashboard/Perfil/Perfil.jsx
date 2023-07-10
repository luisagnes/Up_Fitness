import styles from './Perfil.module.css';

import { useAuthValue } from '../../../context/authContext';
import { useState, useEffect, useContext } from 'react';
import { useFetchDocument, useUpdateDocument } from '../../../hooks/useFetchDocument';
import { Link, useNavigate } from 'react-router-dom';


const PerfilContext = React.createContext();


const PerfilProvider = ({ children }) => {
  const [perfilInfo, setPerfilInfo] = useState({
    idade: '',
    peso: '',
    disponibilidade: '',
    diasTreino: ''
  });

  return (
    <PerfilContext.Provider value={{ perfilInfo, setPerfilInfo }}>
      {children}
    </PerfilContext.Provider>
  );
};

export const Perfil = () => {
  const { perfilInfo, setPerfilInfo } = useContext(PerfilContext);
  const [formError, setFormError] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const { documents: perfil, loading } = useFetchDocument('perfil');
  const { updateDocument, response } = useUpdateDocument('perfil');

  const { user } = useAuthValue();
  const navigate = useNavigate();

  useEffect(() => {
    if (perfil[0]) {
      setPerfilInfo({
        idade: perfil[0].idade || '',
        peso: perfil[0].peso || '',
        disponibilidade: perfil[0].disponibilidade || '',
        diasTreino: perfil[0].diasTreino || ''
      });
    }
  }, [perfil, setPerfilInfo]);

  useEffect(() => {
    if (response.data) {
      navigate('/perfil');
    }
  }, [response.data, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    setFormError('');

  
    if (!perfilInfo.idade || !perfilInfo.peso || !perfilInfo.disponibilidade || !perfilInfo.diasTreino) {
      setFormError('Por favor, preencha todos os campos!');
      return;
    }

    updateDocument(perfil[0].id, perfilInfo);

    setIsEditing(false);
  }

  function editProfile(e) {
    e.preventDefault();
    setIsEditing(true);
  }

  return (
    <div className="container">
      <div className={styles.perfil}>
        <h1>Perfil</h1>
        <div className={styles.perfil_editar}>
          <span>Bem vindo, {user.displayName}!</span>
          <button className="btn-alt" onClick={editProfile}>
            Editar Perfil
          </button>
        </div>

        <div className={styles.perfil_info}>
          {loading && <p>Carregando...</p>}
          <p>Idade: {perfilInfo.idade} anos</p>
          <p>Peso: {perfilInfo.peso} kg</p>
          <p>Tempo de atividade: {perfilInfo.disponibilidade} meses</p>
          <p>Disponibilidade: {perfilInfo.diasTreino} dias por semana</p>
        </div>

        {isEditing && (
          <div className={`${styles.form_perfil} ${isEditing ? styles.ativo : ''}`}>
            <form onSubmit={handleSubmit}>
              <legend>Editar Perfil</legend>
              <label>
                <span>Idade: </span>
                <input
                  type="number"
                  name="idade"
                  required
                  placeholder="Qual sua idade?"
                  value={perfilInfo.idade}
                  onChange={(e) => setPerfilInfo({ ...perfilInfo, idade: e.target.value })}
                />
              </label>
              <label>
                <span>Peso: </span>
                <input
                  type="number"
                  name="peso"
                  required
                  placeholder="Qual seu peso?"
                  value={perfilInfo.peso}
                  onChange={(e) => setPerfilInfo({ ...perfilInfo, peso: e.target.value })}
                />
              </label>
              <label>
                <span>Tempo de atividade: </span>
                <input
                  type="number"
                  name="disponibilidade"
                  required
                  placeholder="Pratica atividades físicas a quanto tempo em meses?"
                  value={perfilInfo.disponibilidade}
                  onChange={(e) => setPerfilInfo({ ...perfilInfo, disponibilidade: e.target.value })}
                />
              </label>
              <label>
                <span>Disponibilidade: </span>
                <input
                  type="number"
                  name="diasTreino"
                  required
                  placeholder="Quantos dias por semana você pode treinar?"
                  value={perfilInfo.diasTreino}
                  onChange={(e) => setPerfilInfo({ ...perfilInfo, diasTreino: e.target.value })}
                />
              </label>
              <div className={styles.form_perfil_cta}>
                <button className="btn">Confirmar</button>
                <Link onClick={() => setIsEditing(false)} className="btn-alt">
                  Cancelar
                </Link>
              </div>

              {formError && <p className="error">{formError}</p>}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export const PerfilPage = () => {
  return (
    <PerfilProvider>
      <Perfil />
    </PerfilProvider>
  );
};
