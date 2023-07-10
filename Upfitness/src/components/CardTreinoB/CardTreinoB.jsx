import './CardTreino.css';

export default function CardTreinoB (props) {
  return (
    <li className='treino-card'>

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
    </li>
  );
}

