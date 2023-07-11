import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../src/firebase/config";
import Logo from "../../../assets/logo.png";
import CoverImg from "../../../assets/cover-cadastro.jpg";
import Container from "../../../components/Container";
import "./Cadastro.css";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(userCredential);
      navigate("/perfil");
    } catch (error) {
      console.log(error);
      setError("Ocorreu um erro ao criar o usuário.");
    }
  };

  return (
    <Container>
      <div className="cadastro">
        <div className="form-fields">
          <div className="form-header">
            <Link to="/">
              <img src={Logo} alt="logotipo" />
            </Link>
            <h1>Cadastre-se</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmar-senha">Confirmar Senha:</label>
              <input
                type="password"
                id="confirmar-senha"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <div className="form-btn">
              <Link to="/recuperar-senha" className="link">
                Esqueci a senha
              </Link>
              <button type="submit" className="btn">
                Entrar
              </button>
            </div>
          </form>
        </div>
        <div className="form-img">
          <img src={CoverImg} alt="Mulher se exercitando na academia" />
        </div>
      </div>
    </Container>
  );
}

export default Cadastro;
