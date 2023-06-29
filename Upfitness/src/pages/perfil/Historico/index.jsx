import { Link } from 'react-router-dom';
import CardHistorico from '../../../components/CardHistorico';
import './Historico.css';

export default function Historico() {
  return (
    <>
      <div className="content">
        <div className="container historico">
          <div className="historico-header">
            <h1>Historico</h1>
            <Link to="/perfil">Voltar ao perfil</Link>
          </div>

          <ul className="historico-lista">
            <CardHistorico
              title="Treino de Perna"
              date="30/04/2023"
              time="82min"
            />
            <CardHistorico
              title="Treino de Costas"
              date="29/04/2023"
              time="62min"
            />

            <CardHistorico
              title="Treino de Bicípes"
              date="28/04/2023"
              time="71min"
            />

            <CardHistorico
              title="Treino de Ombro"
              date="27/04/2023"
              time="47min"
            />

          </ul>
        </div>
      </div>
    </>
  );
}
