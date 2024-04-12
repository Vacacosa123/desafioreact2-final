import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { MenuContext } from "../context/MenuProvider"


const NavBar = () => {

  const {total} = useContext(MenuContext);
  return (
    <nav className="navbar navbar-expand-sm navbar-danger bg-success p-2 header">
    <div className="navbar-collapse">
        <div className="navbar-nav">
            <NavLink
            className={({isActive}) => `nav-item nav-link ${isActive ? 'active text-dark':''}`} 
            to="/" > Home  
            </NavLink>
            <NavLink 
            to="/Carrito" className={({isActive}) => `nav-item nav-link ${isActive ? 'active text-dark' : ''}`}><i className="bi bi-cart-check"/> Total: {total}
            </NavLink>


        </div>

    </div>
</nav>
  )
}

export default NavBar