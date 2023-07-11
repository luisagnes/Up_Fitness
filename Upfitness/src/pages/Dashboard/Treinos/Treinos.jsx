import { useState, useEffect } from 'react';
import styles from './Treinos.module.css';
import { useFetchDocument } from '../../../hooks/useFetchDocument';
import CardTreino from '../../../components/CardTreino/CardTreino';
import CardTreinoB from '../../../components/CardTreinoB/CardTreinoB';
import { collection, getDocs, addDoc } from 'firebase/firestore'; // Import Firestore functions
import { db } from '../../../firebase/config'; // Import the 'db' variable

export const Treinos = () => {
  const { documents: perfil } = useFetchDocument('perfil');
  const diasParaTreinar = perfil && +perfil.map((i) => i.disponibilidade);

  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const fetchHistorico = async () => {
      const historicoRef = collection(db, 'historico');
      const snapshot = await getDocs(historicoRef);
      const historicoData = snapshot.docs.map((doc) => doc.data());
      setHistorico(historicoData);
    };

    fetchHistorico();
  }, []);

  const handleTreinoFeito = async (treino, tempo) => {
    const data = new Date().toLocaleDateString();
    const treinoRealizado = { treino, data, tempo };
    const novoHistorico = [...historico, treinoRealizado];
    setHistorico(novoHistorico);

    try {
      const historicoRef = collection(db, 'historico');
      await addDoc(historicoRef, treinoRealizado);
    } catch (error) {
      console.error('Erro ao adicionar o treino ao histórico:', error);
    }
  };

  const renderCardTreino = (cardA, cardB) => {
    let li = [];
    for (let i = 1; i <= diasParaTreinar; i++) {
      if (i % 2 === 0) {
        li.push(
          <CardTreinoB
            key={i}
            onTreinoFeito={handleTreinoFeito}
            treino={`Treino B - Dia ${i}`}
          />
        );
      } else {
        li.push(
          <CardTreino
            key={i}
            onTreinoFeito={handleTreinoFeito}
            treino={`Treino A - Dia ${i}`}
          />
        );
      }
    }
    return li;
  };

  return (
    <div className="container">
      <div className={styles.treinos}>
        <h1>Treinos</h1>
        <ul className={styles.treinos_lista}>
          {renderCardTreino(
            <CardTreino
              onTreinoFeito={handleTreinoFeito}
              treino="Treino A - Dia 1"
            />,
            <CardTreinoB
              onTreinoFeito={handleTreinoFeito}
              treino="Treino B - Dia 2"
            />
          )}
        </ul>
      </div>
    </div>
  );
};
