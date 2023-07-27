import { useEffect, useState } from "react"
import { getProductos } from "../lib/productos.request";
import { ItemListContainer } from "../components";



export const Home = () =>{
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProductos()
        .then(res => setProducts(res))
    }, []);


    return (
        <div className="contenedor">
            <div className="item">
                <ItemListContainer products={products}/>
            </div>
        </div>
    )
};