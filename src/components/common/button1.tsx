import './button1.css';
import { Link } from 'react-router-dom';

function Button1(){
    return(
        <Link to="/listar">
        <button className="button1">
            Listar
        </button>
    </Link>
    );
}

export default Button1