import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../lib/productos.request";
import { ItemListContainer } from "../components";

export const Marca = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {

        getProductos(id) 
        .then(res => {
            setIsLoading(false); 
            setProducts(res)} 
            ) 
    }, [id]);

    return (
        <div>
            <div>
            <h5>{isLoading ? "Cargando ..." : ""}</h5>
            <ItemListContainer products={products} />
            </div>
        </div>
    );
}