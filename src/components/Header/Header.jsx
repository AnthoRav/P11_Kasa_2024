import Img from "../../assets/LOGO.png";
import { Link } from "react-router-dom";
//import HeaderCSS from "../Header/Header.module.css";

function Header() {
  return (
    <header className="header">
      <img src={Img} alt="logo de Kasa" className="header_logo" />
      <nav className="header_nav">
        <Link to="/" className="header_nav-link">
          Accueil
        </Link>
        <Link to="/about" className="header_nav-link">
          A Propos
        </Link>
      </nav>
    </header>
  );
}
export default Header;
