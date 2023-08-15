import { useState } from "react"


export const ItemCount = ({ stock = 0, onAdd}) => {
    const [count, setCount] = useState(1);

    const handleSum = () => {
        setCount (Math.min(stock, count + 1));
    };

    const handleSub = () => {
        setCount (Math.max(1, count - 1));
    };

    return(
        <div>
            {stock ? (
                <>
                    <div>
                        <button onClick={() => handleSub}>-</button>
                        <span>{count}</span>
                        <button onClick={() => handleSum}>+</button>
                    </div>
                    <button disabled={!stock} onClick={() => {
                        onAdd(count);
                        setCount(1);
                        }}>Agregar al Carrito</button>
                </>
            ) : (
                <h4>No hay más disponible</h4>
            )}
        </div>
    );
};

