import "./Header.css"
import Logo from "../../assets/Pixell-River-Logo.svg"
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

function Header() {
    
    return(
    <header>
        <img src={Logo} alt="Pixell River Logo" id="Pixell-River-Logo"/> <h1 id="Title">Pixell River Employee Directory</h1>
        <Show when="signed-out">
            <SignInButton />
            <SignUpButton />
        </Show>
        <Show when="signed-in">
            <UserButton />
        </Show>
    </header>);
}

export default Header;