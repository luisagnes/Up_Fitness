import { useContext } from 'react';
import styles from '../CardHistorico.css';
import { MdCheck } from 'react-icons/md';
import { HistoricoContext } from '../../context/historicoContext';

export const CardHistorico = (props) => {
  const { treinoConcluido, handleConcluirTreino } = useContext(HistoricoContext);

  return (
    <li className={`historico-item ${treinoConcluido ? styles.concluido : ''}`}>
      <h2>{props.title}</h2>
      <p>
        Data: <span>{props.date}</span>
      </p>
      <p>
        Duração: <span>{props.time}</span>
      </p>
      {!treinoConcluido && (
        <button className={styles.buttonConcluir} onClick={handleConcluirTreino}>
          <MdCheck /> Concluir Treino
        </button>
      )}
    </li>
  );
};
