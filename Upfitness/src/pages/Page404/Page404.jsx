import { Button } from '../../components/Button/Button';
import styles from './Page404.module.css';
import img404 from '../../assets/404.png';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Page404 = () => {

    // useEffect(() => {
    //   const timeout = setTimeout(() => {
    //     window.location.replace('/');
    //   }, 5000);
  
    //   return () => clearTimeout(timeout);
    // }, []);
  

  return (
    <div className="container">
      <div className={styles.page404}>
        <img src={img404} alt="erro 404" />
        <h1>Página não encontrada!</h1>
        {/* <p>você será redirecionado em 5 segundos</p> */}
        <p>Volte para Home</p>
        <Button link="/" classe="btn-alt" texto="Home" />
      </div>
    </div>
  );
};
