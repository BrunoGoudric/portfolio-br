import { Link } from "react-router-dom";
import "./styles.css"

function Header(){

    return (
        <div className="boxHeader">
            <Link to="/">Início</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/contato">Contato</Link>
        </div>
    )
}

export default Header;