import styles from './Perfil.module.css';

import { useAuthValue } from '../../../context/authContext';
import { useState } from 'react';
import { useInsertDocument } from '../../../hooks/useInsertDocument';
import { Link, useNavigate } from 'react-router-dom';
import { useFetchDocument } from '../../../hooks/useFetchDocument';

export const Perfil = () => {
  const [profileInfo, setProfileInfo] = useState(false);
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [diasTreino, setDiasTreino] = useState('');
  const [disponibilidade, setDisponibilidade] = useState('');
  const [formError, setFormError] = useState('');

  const { documents: perfil, loading } = useFetchDocument('perfil');

  const { user } = useAuthValue();
  const { insertDocument, response } = useInsertDocument('perfil');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setFormError('');

    // checando valores
    if (!idade || !peso || !diasTreino || !disponibilidade) {
      setFormError('Por favor, preencha todos os campos!');
    }

    if (formError) return;

    insertDocument({
      idade,
      peso,
      diasTreino,
      disponibilidade,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // refresh
    navigate(0);
  }

  function editProfile(e) {
    e.preventDefault();
    setProfileInfo((current) => !current);
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
          <p>Idade: {perfil && perfil.map((i) => i.idade)} anos</p>
          <p>Peso: {perfil && perfil.map((i) => i.peso)} kg</p>
          <p>Disponibilidade: {perfil && perfil.map((i) => i.disponibilidade)} dias por semana</p>
          <p>Tempo de atividade: {perfil && perfil.map((i) => i.diasTreino)} meses</p>
        </div>

        <div
          className={`${styles.form_perfil} ${profileInfo ? styles.ativo : ''}`}
        >
          <form onSubmit={handleSubmit}>
            <legend>Editar Perfil</legend>
            <label>
              <span>Idade: </span>
              <input
                type="number"
                name="idade"
                required
                placeholder="Qual sua idade?"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
              />
            </label>
            <label>
              <span>Peso: </span>
              <input
                type="number"
                name="peso"
                required
                placeholder="Qual seu peso?"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
              />
            </label>
            <label>
              <span>Disponíbilidade: </span>
              <input
                type="number"
                name="diasTreino"
                required
                placeholder="Quantos dias por semana você pode treinar?"
                value={diasTreino}
                onChange={(e) => setDiasTreino(e.target.value)}
              />
            </label>
            <label>
              <span>Tempo de atividade: </span>
              <input
                type="number"
                name="disponibilidade"
                required
                placeholder="Pratica atividades físicas a quanto tempo?"
                value={disponibilidade}
                onChange={(e) => setDisponibilidade(e.target.value)}
              />
            </label>
            <div className={styles.form_perfil_cta}>
              {!response.loading && <button className="btn">Confirmar</button>}
              {response.loading && (
                <button className="btn" disabled>
                  Aguarde...
                </button>
              )}
              <Link onClick={editProfile} className="btn-alt">
                Cancelar
              </Link>
            </div>

            {response.error && <p className="error">{response.error}</p>}
            {formError && <p className="error">{formError}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};
