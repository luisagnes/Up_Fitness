import './CardTreino.css';
import { useState } from 'react';

export default function CardTreino(props) {
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
            <td>supino reto com barra</td>
            <td>15kg</td>
            <td>4x10</td>
          </tr>
          <tr>
            <td>crucifixo articulado na maquina</td>
            <td>14kg</td>
            <td>3x20</td>
          </tr>
          <tr>
            <td>desenvolvimento no smith</td>
            <td>20kg</td>
            <td>4x15</td>
          </tr>
          <tr>
            <td>pull down na polia com barra</td>
            <td>9kg</td>
            <td>3x15</td>
          </tr>
          <tr>
            <td>biceps concentrado</td>
            <td>8kg</td>
            <td>4x8</td>
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

