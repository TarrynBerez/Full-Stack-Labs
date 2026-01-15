import "./Header.css"
import Logo from "../../assets/Pixell-River-Logo.svg"
function Header() {
    
    return(
    <header>
        <img src={Logo} alt="Pixell River Logo" id="Pixell-River-Logo"/> <h1 id="Title">Pixell River Employee Directory</h1>
    </header>);
}

export default Header;