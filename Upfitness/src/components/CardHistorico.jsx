import './CardHistorico';

export default function CardHistorico(props) {
  return (
    <>
      <li className="historico-item">
        <h2>{props.title}</h2>
        <p>
          Data: <span>{props.date}</span>
        </p>
        <p>
          Duração: <span>{props.time}</span>
        </p>
      </li>
    </>
  );
}
