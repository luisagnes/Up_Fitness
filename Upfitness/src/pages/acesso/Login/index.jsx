import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import Container from "../../../components/Container";
import "./login.css";
import CoverImg from "../../../assets/cover-cadastro.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";

export const UserContext = React.createContext();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [isFormInvalid, setIsFormInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsFormInvalid(false); // Reset isFormInvalid state
    setErrorMessage("");

    if (!email || !password) {
      // Check if any field is empty
      setIsFormInvalid(true);
      setErrorMessage("Por favor, preencha todos os campos."); // Show toastr warning
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUserEmail(userCredential.user.email);
      navigate("/perfil");
    } catch (error) {
      setIsFormInvalid(true);
      setErrorMessage(
        "Ocorreu um erro ao fazer login. Verifique suas credenciais."
      );
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={userEmail}>
      <div className="cadastro">
        <div className="form-fields">
          <div className="form-header">
            <Link to="/">
              <img src={Logo} alt="logotipo" />
            </Link>
            <h1>Login</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className={`form-input ${isFormInvalid ? "invalid" : ""}`}
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <input
                className={`form-input ${isFormInvalid ? "invalid" : ""}`}
                type="password"
                id="senha"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            {isFormInvalid && <p className="error-message">{errorMessage}</p>}

            <div className="form-btn">
              <Link to="/recuperar-senha" className="link">
                Esqueci a senha
              </Link>
              <button type="submit" className="btn">
                Entrar
              </button>

              <p>
                Ainda não possui uma conta?
                <Link to="/cadastro" className="link">
                  Cadastre-se
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="form-img">
          <img src={CoverImg} alt="Mulher se exercitando na academia" />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default Login;
