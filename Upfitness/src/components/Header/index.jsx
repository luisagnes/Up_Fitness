import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Button from "../Button";
import Container from "../Container";


  function toogleMenu(e) {
    const menuMobile = document.querySelector('.menu-pc');
    menuMobile.classList.toggle('ativo')
    e.target.classList.toggle('ativo')
  }

export default function Header() {
  return (
    <>
      <header className="header">
        <Container>
          <Link to="/">
            <img src={Logo} alt="logotipo" />
          </Link>

          <div className="menu">
            <ul className="menu-pc">
              <li>
                <Button link="/cadastro" classe="btn" texto="Matricule-se" />
              </li>
              <li>
                <Button link="/login" classe="btn-alt" texto="Login" />
              </li>
            </ul>

            <button onClick={toogleMenu} className="menu-mobile"></button>
          </div>
        </Container>
      </header>
    </>
  );
}
