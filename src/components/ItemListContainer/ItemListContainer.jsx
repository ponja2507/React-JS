import { Item } from "../Item/Item";
import "./ItemListContainer.css";

export const ItemListContainer = ({products}) => {
    <div>
        {products.map((product) => (
            <Item 
            key={product.id}
            id={product.id}
            img={product.img}
            marca={product.marca}
            nombre={product.nombre}
            precio={product.precio}
            uso={product.uso}
            />
        ))}
    </div>
}