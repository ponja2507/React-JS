import { useEffect, useState } from "react"
import { getProducts } from "../lib/productos.request";
import { ItemListContainer } from "../components";


export const Home = () =>{
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts()
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