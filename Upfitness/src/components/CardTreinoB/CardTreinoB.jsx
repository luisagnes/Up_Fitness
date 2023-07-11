import './CardTreino.css';
import { useState } from 'react';

export default function CardTreinoB(props) {
  const [tempo, setTempo] = useState('');

  const handleOKClick = () => {
    if (tempo) {
      props.onTreinoFeito(props.treino, tempo);
    }
  };

  const handleTempoChange = (event) => {
    setTempo(event.target.value);
  };

  return (
    <li className={`treino-card ${props.treinoConcluido === props.treino ? 'concluido' : ''}`}>
      <table>
        <thead>
          <tr>
            <th>Exercício</th>
            <th>Peso</th>
            <th>Repetições</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Agachamento Livre</td>
            <td>50kg</td>
            <td>4x8</td>
          </tr>
          <tr>
            <td>Cadeira Extensora</td>
            <td>10kg</td>
            <td>4x12</td>
          </tr>
          <tr>
            <td>Mesa Flexora</td>
            <td>8kg</td>
            <td>4x12</td>
          </tr>
          <tr>
            <td>Cadeira Adutora</td>
            <td>8kg</td>
            <td>4x10</td>
          </tr>
          <tr>
            <td>Cadeira Abdutora</td>
            <td>8kg</td>
            <td>4x10</td>
          </tr>
          <tr>
            <td>Panturrilha no Burrinho</td>
            <td>35kg</td>
            <td>4x15</td>
          </tr>
        </tbody>
      </table>
      <div className="controls">
        <input
          type="text"
          placeholder="Tempo (minutos)"
          value={tempo}
          onChange={handleTempoChange}
        />
        <button onClick={handleOKClick}>Treino Concluído</button>
      </div>
    </li>
  );
}
