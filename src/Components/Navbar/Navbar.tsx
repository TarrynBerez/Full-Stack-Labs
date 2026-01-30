import "./Navbar.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="nav-div">
        <nav>
            <NavLink className="nav-link" to="/organizations">Organization</NavLink>
            <NavLink className="nav-link" to="/employees">Employees</NavLink>
        </nav>
    </div>
  )
}

export default Navbar