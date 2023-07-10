import styles from './Perfil.module.css';

import { useAuthValue } from '../../../context/authContext';
import { useState } from 'react';
import { useFetchDocument } from '../../../hooks/useFetchDocument';
import { Link, useNavigate } from 'react-router-dom';

export const Perfil = () => {
  const [perfilInfo, setPerfilInfo] = useState({
    idade: '',
    peso: '',
    disponibilidade: '',
    diasTreino: ''
  });
  const [formError, setFormError] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const { documents: perfil, loading } = useFetchDocument('perfil');

  const { user } = useAuthValue();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setFormError('');

    // checando valores
    if (!perfilInfo.idade || !perfilInfo.peso || !perfilInfo.disponibilidade || !perfilInfo.diasTreino) {
      setFormError('Por favor, preencha todos os campos!');
      return;
    }

    // Salvar os dados no perfil aqui
    // ...

    setIsEditing(false);
  }

  function editProfile(e) {
    e.preventDefault();
    setPerfilInfo({
      idade: perfil[0]?.idade || '',
      peso: perfil[0]?.peso || '',
      disponibilidade: perfil[0]?.disponibilidade || '',
      diasTreino: perfil[0]?.diasTreino || ''
    });
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

