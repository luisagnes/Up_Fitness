import { Link, Navigate } from 'react-router-dom';
import './Button.css';

export const Button = ({ link, classe, texto }) => {

  function btnclick(link) {
    <Navigate to={link} /> 
  }

  return (
    <button onClick={btnclick(link)} className={classe}>
      {texto}
    </button>
  );
};
