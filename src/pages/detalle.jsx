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
            </div>
        </div>
    </div>
    );
};
