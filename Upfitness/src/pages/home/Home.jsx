// import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Container from "../../components/Container";
import Button from "../../components/Button";

import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />

      <Container>
        <div className="hero-container">
          <div className="hero-blocks">
            <div className="hero-block-item span-col3 item1">
              <div className="hero-content">
                <h1>Conheça a UP Fitness</h1>
                <p>
                  Transforme seu corpo, eleve sua mente:
                  <span>Entre em forma na nossa academia!</span>
                </p>
                <Button
                  link="/cadastro"
                  classe="btn-alt"
                  texto="Matricule-se"
                />
              </div>
            </div>
            <div className="hero-block-item span-col2 span-row2 item2"></div>
            <div className="hero-block-item item3"></div>
            <div className="hero-block-item span-col2 item4"></div>
            <div className="hero-block-item span-col2 item5"></div>
            <div className="hero-block-item span-col3 item6"></div>
          </div>
        </div>
      </Container>
    </>
  );
}
