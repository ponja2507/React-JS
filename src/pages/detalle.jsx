import { useEffect, useState } from "react";
import { getProducto } from "../lib/productos.request";
import { useParams } from "react-router-dom";

export const Detalle = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState({});


    useEffect(() => {
    getProducto(+id).then((res) => {
        setProducto(res);
        });
    }, []);

    if(!Object.keys(producto).length) return

    return (
    <div>
        <div>
        <div>
            <img src={producto.img} />
        </div>
        <div>
            <span>{producto.nombre} </span>

            <p>{producto.descripcion}</p>

            <span>
            $
            {(producto.precio || 0)}
            </span>
            </div>
        </div>
    </div>
    );
};
