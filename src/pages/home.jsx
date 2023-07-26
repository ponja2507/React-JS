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
        <div>
            <div>
                <ItemListContainer products={products}/>
            </div>
        </div>
    )
};