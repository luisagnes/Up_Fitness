import { useEffect, useState } from "react";
import styles from "./Historico.module.css";
import { CardHistorico } from "../../../components/CardHistorico/CardHistorico";
import { db } from "../../../firebase/config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { HistoricoProvider } from "../../../context/historicoContext";

export const Historico = () => {
  const [historico, setHistorico] = useState([]);
  const [novoTreino, setNovoTreino] = useState("");
  const [novoTempo] = useState("");

  useEffect(() => {
    const fetchHistorico = async () => {
      try {
        const historicoRef = collection(db, "historico");
        const snapshot = await getDocs(historicoRef);
        const historicoData = snapshot.docs.map((doc) => doc.data());
        setHistorico(historicoData);
      } catch (error) {
        console.error("Erro ao buscar o histórico:", error);
      }
    };

    fetchHistorico();
  }, []);

  const handleNovoTreinoFeito = async (treino, tempo) => {
    const data = new Date().toLocaleDateString();
    const treinoRealizado = { treino, data, tempo };
    const novoHistorico = [...historico, treinoRealizado];
    setHistorico(novoHistorico);

    try {
      const historicoRef = collection(db, "historico");
      await addDoc(historicoRef, treinoRealizado);
    } catch (error) {
      console.error("Erro ao adicionar o treino ao histórico:", error);
    }
  };

  return (
    <HistoricoProvider>
      <div className="container">
        <div className={styles.historico}>
          <h1>Histórico</h1>
          <ul>
            {historico.map((item, index) => (
              <CardHistorico
                key={index}
                title={item.treino}
                date={item.data}
                time={item.tempo}
              />
            ))}
          </ul>
        </div>

        <div className={styles.novoTreino}>
          <h2>Registrar Novo Treino</h2>
          <input
            type="text"
            placeholder="Treino"
            value={novoTreino}
            onChange={(event) => setNovoTreino(event.target.value)}
          />
          <button onClick={() => handleNovoTreinoFeito(novoTreino, novoTempo)}>
            Registrar
          </button>
        </div>
      </div>
    </HistoricoProvider>
  );
};

