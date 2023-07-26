import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Outlet } from "react-router-dom";

export const NavBar = () => {
    return (
        <header>
            <nav className="nB">
                <div className = "divNavBar">
                    <img 
                    className = "imgNavBar"
                    src={"https://www.pngmart.com/files/11/Online-Portal-E-Commerce-PNG-Picture.png"} alt="logo" />
                    <h1>Bienvenido</h1>
                    <CartWidget />
                </div>
                <Outlet />
            </nav>
        </header>
    )
}