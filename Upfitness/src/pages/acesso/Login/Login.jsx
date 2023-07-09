// styles e assets
import styles from './Login.module.css';
import Logo from '../../../assets/logo.png';
import imgLogin from '../../../assets/cover-cadastro.jpg';

// hooks
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { useAuthentication } from '../../../hooks/useAuthtication';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      email,
      password,
    };

    const res = await login(user);
    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className="container">
      <div className={styles.login}>
        <div className={styles.login_txt}>
          <div>
            <Link to="/">
              <img src={Logo} alt="Logomarca" />
            </Link>
            <h1>Login</h1>
          </div>

          <form onSubmit={handleSubmit} className={styles.form_login}>
            <label>
              <span>E-mail: </span>
              <input
                type="email"
                name="email"
                required
                placeholder="E-mail de usuário"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <span>Senha: </span>
              <input
                type="password"
                name="password"
                required
                placeholder="Insira sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {/* <button className="btn">Entrar</button> */}
            {!loading && <button className="btn">Entrar</button>}
            {loading && (
              <button className="btn" disabled>
                Aguarde...
              </button>
            )}
            {error && <p className="error">{error}</p>}

            <p>
              Ainda não possui uma conta?{' '}
              <Link to="/cadastro">Cadastre-se</Link>
            </p>
          </form>
        </div>
        <div className={styles.login_img}>
          <img src={imgLogin} alt="imagem de login" />
        </div>
      </div>
    </div>
  );
};
