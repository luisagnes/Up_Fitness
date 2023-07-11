import './CardTreino.css';

export default function CardTreino(props) {
  return (
    <div className='treino-card'>
      <div className='card-title'>
        <h2>{props.dia}</h2>
        <p>{props.grupoMuscular}</p>
      </div>
    </div>
  );
}
