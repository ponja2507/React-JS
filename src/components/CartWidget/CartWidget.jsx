import {TfiShoppingCartFull} from "react-icons/tfi";
import "./CartWidget.css";
import { useCartContext } from "../../state/Cart.context";
import { useNavigate } from "react-router-dom";

export const CartWidget = () => {
    const { getCartQty } = useCartContext();
    const navigate = useNavigate();
    return (
        <div className = "cartWidget" onClick={() => navigate("/cart")}>
            <TfiShoppingCartFull /> {getCartQty ? <span className="cartWidget-cant">({getCartQty})</span> : null}
        </div>
    );
};