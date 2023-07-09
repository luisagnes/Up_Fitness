// import './Header.css';
import styles from './Header.module.css';
import Logo from '../../assets/logo.png';

// import { Button } from '../Button/Button';

import { Link, NavLink } from 'react-router-dom';

import { useAuthentication } from '../../hooks/useAuthtication';
import { useAuthValue } from '../../context/authContext';
import { useState } from 'react';

export const Header = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const [activeClass, setActiveClass] = useState(false);

  function toogleMenu() {
    setActiveClass((current) => !current);
  }

  return (
    <header className={styles.header_bg}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={Logo} alt="Logomarca" />
            </Link>
          </div>

          <div className={styles.menu}>
            <nav
              className={`${styles.navmenu} ${activeClass ? styles.ativo : ''}`}
            >
              <ul>
                {!user && (
                  <>
                    <li>
                      <NavLink to="/cadastro" className="btn">
                        Matricule-se
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/login" className="btn-alt">
                        Login
                      </NavLink>
                    </li>
                  </>
                )}
                {user && (
                  <>
                    <li>
                      <NavLink
                        to="/treinos"
                        className={({ isActive }) =>
                          isActive ? styles.ativo : ''
                        }
                      >
                        Treinos
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/historico"
                        className={({ isActive }) =>
                          isActive ? styles.ativo : ''
                        }
                      >
                        Histórico
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/perfil"
                        className={({ isActive }) =>
                          isActive ? styles.ativo : ''
                        }
                      >
                        Perfil
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" onClick={logout}>
                        Sair
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </nav>

            <button
              onClick={toogleMenu}
              className={`${styles.menu_mobile} ${
                activeClass ? styles.ativo : ''
              }`}
            ></button>
          </div>
        </div>
      </div>
    </header>
  );
};
