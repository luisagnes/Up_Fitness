import { Link } from 'react-router-dom';
import './Button.css'
function Button( {link, classe, texto} ) {
  return <Link to={link} className={classe}>{texto}</Link>
}
export default Button
