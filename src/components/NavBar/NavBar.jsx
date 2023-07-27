import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink, Outlet } from "react-router-dom";

export const NavBar = () => {
    return (
        <header>
            <nav className="nB">
                <div className = "divNavBar">
                    <NavLink to="/">
                        <img 
                        className = "imgNavBar"
                        src={"https://www.pngmart.com/files/11/Online-Portal-E-Commerce-PNG-Picture.png"} alt="logo" />
                    </NavLink>
                    <div className="centro">
                        <h1>Bienvenido</h1>
                        <div className="marcas">
                            <NavLink to ="/marca/puma">
                                Puma
                            </NavLink>
                            <NavLink to ="/marca/grays">
                                Grays
                            </NavLink>
                            <NavLink to ="/marca/wilson">
                                Wilson
                            </NavLink>
                            <NavLink to ="/marca/adidas">
                                Adidas
                            </NavLink>
                            <NavLink to ="/marca/salomon">
                                Salomon
                            </NavLink>
                        </div>
                    </div>
                        <CartWidget />
                </div>
                <Outlet />
            </nav>
        </header>
    )
}