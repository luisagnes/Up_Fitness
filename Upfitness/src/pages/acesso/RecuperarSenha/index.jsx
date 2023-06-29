import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import "./RecuperarSenha.css";
import Container from "../../../components/Container";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../../firebase";
import { useState } from "react";
import toastr from "toastr";
import "toastr/build/toastr.css";

function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError("");
    setSuccessMessage("");
  };

  const handleEnviarSenha = (event) => {
    event.preventDefault();
    if (!email) {
      toastr.warning("Por favor, insira um e-mail válido.");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toastr.success("E-mail de recuperação de senha enviado com sucesso.");
        setSuccessMessage("E-mail de recuperação de senha enviado com sucesso.");
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocorreu um erro ao enviar o e-mail de recuperação de senha.");
        setError("Ocorreu um erro ao enviar o e-mail de recuperação de senha.");
      });
  };

  return (
    <Container>
      <div className="form">
        <div className="form-header">
          <Link to="/">
            <img src={Logo} alt="logotipo" />
          </Link>
          <h1>Esqueceu a senha?</h1>
          <p>
            Digite o endereço de e-mail que você usou no cadastro que enviaremos instruções para redefinir sua senha.
          </p>
        </div>

        <form>
          <div className="form-input">
            <label htmlFor="email">Email de recuperação</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>

          {error && <div className="error-message">{error}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}

          <div className="form-btn">
            <button className="btn" onClick={handleEnviarSenha}>
              Enviar Email
            </button>
            <p>
              Ainda não possui uma conta? <Link to="/cadastro" className="link">Criar conta</Link>
            </p>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default RecuperarSenha;
