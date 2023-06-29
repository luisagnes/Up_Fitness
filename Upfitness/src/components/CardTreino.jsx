import './CardTreino.css';

export default function CardTreino(props) {
  return (
    <div className='treino-card'>
      <div className='card-title'>
        <h2>{props.dia}</h2>
        <p>{props.grupoMuscular}</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nome do Exercício</th>
            <th>Repetições</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>nome</td>
            <td>3x15</td>
          </tr>
          <tr>
            <td>nome</td>
            <td>3x15</td>
          </tr>
          <tr>
            <td>nome</td>
            <td>3x15</td>
          </tr>
          <tr>
            <td>nome</td>
            <td>3x15</td>
          </tr>
          <tr>
            <td>nome</td>
            <td>3x15</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
