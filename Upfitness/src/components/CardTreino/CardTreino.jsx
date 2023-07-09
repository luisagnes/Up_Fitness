import './CardTreino.css';

export default function CardTreino(props) {
  return (
    <li className='treino-card'>

      <table>
        <thead>
          <tr>
            <th>Exercício</th>
            <th>Repetições</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>supino reto com barra</td>
            <td>4x10</td>
          </tr>
          <tr>
            <td>crucifixo articulado na maquina</td>
            <td>3x20</td>
          </tr>
          <tr>
            <td>desenvolvimento no smith</td>
            <td>4x15</td>
          </tr>
          <tr>
            <td>pull down na polia com barra</td>
            <td>3x15</td>
          </tr>
          <tr>
            <td>biceps concentrado</td>
            <td>4x8</td>
          </tr>
        </tbody>
      </table>
    </li>
  );
}
