import styles from './Historico.module.css';

import { CardHistorico } from '../../../components/CardHistorico/CardHistorico';

export const Historico = () => {
  return (
    <div className="container">
      <div className={styles.historico}>
        <h1>Histórico</h1>
        <ul>
          <CardHistorico title="TREINO A" date="10/09/2023" time="75min" />
        </ul>
        
      </div>

      <div className={styles.historico}>
        <ul>
          <CardHistorico title="TREINO B" date="11/09/2023" time="60min" />
        </ul>
      </div>
    </div>
  );
};

