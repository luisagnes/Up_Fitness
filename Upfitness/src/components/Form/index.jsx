import Button from "../../components/Button";
import "./Form.css";

function Form({ children }) {
  return <>{children}</>;
}

function FormInput({ classe, htmlFor, texto, tipo, id }) {
  return (
    <>
      <div className={classe}>
        <label htmlFor={htmlFor}>{texto}</label>
        <input type={tipo} id={id} />
      </div>
    </>
  );
}


function FormBtn({ link, classeLink, texto }) {
  return <Button link={link} classe={classeLink} texto={texto} />;
}

function FormDivBtn({ children, classe }) {
  return  <div className={classe}>{children}</div>;
}

export { Form, FormInput, FormBtn, FormDivBtn };
