import "./Footer.css"

const date = new Date()
const currentYear = date.getFullYear()

function Footer() {
    return(
    <footer id="employees">
        <p>Copyright Pixell River Financial {currentYear}</p>
    </footer>);
}

export default Footer;