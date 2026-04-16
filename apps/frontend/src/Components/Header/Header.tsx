import "./Header.css"
import Logo from "../../assets/Pixell-River-Logo.svg"
import { OrganizationSwitcher, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

function Header() {
    
    return(
    <header>
        <img src={Logo} alt="Pixell River Logo" id="Pixell-River-Logo"/> <h1 id="Title">Pixell River Employee Directory</h1>

        <OrganizationSwitcher />
        <SignedOut>
            <SignInButton />
            <SignUpButton />
        </SignedOut>
        
        <SignedIn>
            <UserButton />
        </SignedIn> 
    </header>);
}

export default Header;