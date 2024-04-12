import './button2.css'
import { Link } from 'react-router-dom';

function Button2(){
    return (
        <Link to="/buscar">
        <button className="button2">
            Buscar
        </button>
    </Link> 
    );
}


export default Button2