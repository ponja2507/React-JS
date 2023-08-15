import { useCallback, useEffect, useState } from "react";
import { getProducto } from "../lib/productos.request";
import { useNavigate, useParams } from "react-router-dom";
import { useCartContext } from "../state/Cart.context";
import { ItemCount } from "../components/ItemCount/ItemCount";

export const Detalle = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [producto, setProducto] = useState({});
    

    const {addProducto, itemInCart} = useCartContext();


    useEffect(() => {
    getProducto(id).then((res) => {
        if(!res) return navigate("/");
        setProducto(res);
        });
    }, []);

    const handleAdd = useCallback(
        (qty) => {
            addProducto(producto, qty);
        },
        [addProducto, producto]
    );

    if(!Object.keys(producto).length) return

    return (
    <div>
        <div className="detalle-cont">
            <div className="detalle-img">
                <img src={producto.img} />
            </div>
            <div className="detalle-info">
                <span>{producto.nombre} </span>

                <p>{producto.descripcion}</p>

                <span>
                $
                {(producto.precio)}
                </span>
                <ItemCount stock={producto.stock - (itemInCart?.(id)?.qty || 0 )} onAdd={handleAdd}/>
            </div>
        </div>
    </div>
    );
};
