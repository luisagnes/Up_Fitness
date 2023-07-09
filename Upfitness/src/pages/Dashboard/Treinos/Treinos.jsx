import styles from './Treinos.module.css';
import { useFetchDocument } from '../../../hooks/useFetchDocument';
import CardTreino from '../../../components/CardTreino/CardTreino';

export const Treinos = () => {
  const { documents: perfil, loading } = useFetchDocument('perfil');

  const diasParaTreinar = perfil && +perfil.map((i) => i.disponibilidade);

  const renderCardTreino = (card) => {
    let li = [];
    console.log(li);
    for (let i = 1; i <= diasParaTreinar; i++) {
      console.log(i);
      li.push(card)
    }
    return li
  };

  return (
    <div className="container">
      <div className={styles.treinos}>
        <h1>Treinos</h1>
        <ul className={styles.treinos_lista}>{renderCardTreino((<CardTreino />))}</ul>
      </div>
    </div>
  );
};
