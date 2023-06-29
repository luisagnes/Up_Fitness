import { Link } from 'react-router-dom';
import { useState } from 'react';
import ProfilePicture from '../../../assets/perfil.png';
import CardTreino from '../../../components/CardTreino';
import styles from './Perfil.module.css';

export default function Perfil() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedImage(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.perfil}>
            <header className={styles.perfilInfo}>
              <div>
                <h1>Perfil do Aluno</h1>
                <Link className="home-button" to="/">Sair</Link>
              </div>

              <nav className={styles.perfilMenu}>
                <ul>
                  <li>
                    <Link>Fulano de Tal</Link>
                  </li>
                  <li>
                    <Link>27 anos</Link>
                  </li>
                  <li>
                    <Link to="/historico">Histórico de Treino</Link>
                  </li>
                  <li>
                    <Link>(61) 9999-9999</Link>
                  </li>
                </ul>
              </nav>

              <div className={styles.perfilFoto} onClick={handleImageClick}>
                <img src={ProfilePicture} alt="foto do aluno" />
              </div>
            </header>

            <main className={styles.treinamentos}>
              <div className={styles.treinoLista}>
                <CardTreino dia="Segunda" grupoMuscular="Peito" />
                <CardTreino dia="Terça" grupoMuscular="Pernas" />
                <CardTreino dia="Quarta" grupoMuscular="Costas" />
                <CardTreino dia="Quinta" grupoMuscular="Bicípes" />
                <CardTreino dia="Sexta" grupoMuscular="Ombro" />
                <CardTreino dia="Sábado" grupoMuscular="Tricípes" />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
