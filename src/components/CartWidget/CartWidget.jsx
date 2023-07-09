import {TfiShoppingCartFull} from "react-icons/tfi";
import "./CartWidget.css";

export const CartWidget = () => (
    <div className = "cartWidget">
        <TfiShoppingCartFull />
        <span className="cartWidget-cant">(5)</span>
    </div>
)