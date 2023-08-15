import { useState } from "react";
import { updateManyProducts } from "../lib/productos.request";
import { LocaleString } from "../components/LocaleString/LocaleString";
import { AiOutlineDelete } from "react-icons/ai";
import { useCartContext } from "../state/Cart.context";


const FORM_COMPRA = [
    {label: "Nombre", name: "nombre", placeholder: "Ingresa tu nombre"},
    {label: "Dirección", name: "direccion", placeholder: "Ingresa tu dirección"},
    {label: "Correo", name: "correo1", placeholder: "Ingresa tu Email"},
    {label: "Repetir Correo", name: "correo2", placeholder: "Repite tu Email"},
    {label: "Teléfono", name: "tel", placeholder: "Ingresa tu celular"}
];

export const Cart = () => {
    const [form, setForm] = useState({});
    const {cart, cleanCart, getTotalPrice, removeProduct} = useCartContext();

    const crearOrden = async () => {
        const items = cart.map(({id, nombre, qty, precio}) => ({
            id,
            nombre,
            qty,
            precio,
        }));

    const {nombre, direccion, correo1, tel} = form;

    const orden = {
        buyer: {nombre, direccion, correo1, tel},
        items,
        total: getTotalPrice,
    };

        const id = await addOrden(orden);
        await updateManyProducts(items);
        cleanCart();
    };

    const handleChange = ({target: {value, nombre}}) => {
        setForm({
            ...form, [nombre]: value,
        });
    };

    return (
        <div>
            <div>
                {cart.length ? (
                    <>
                        <div>
                            <button onClick={cleanCart}>Vaciar Carrito</button>
                        </div>
                        <div>
                            <div>
                                <span>Producto</span>
                                <span>Cantidad</span>
                                <span>Precio</span>
                                <span>Subtotal</span>
                            </div>
                            {cart.map((item) => (
                                <div key={item.id}>
                                    <span>{item.nombre}</span>
                                    <span>{item.qty}</span>
                                    <LocaleString num = {item.precio} />
                                    <LocaleString num = {item.qty * item.precio} />
                                    <button onClick={() => removeProduct(item.id)}>
                                        <AiOutlineDelete />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div>
                                <span>Total</span> <LocaleString num = {getTotalPrice} />
                            </div>{" "}
                        </div>
                        <div>
                            {FORM_COMPRA.map((input) => (
                                <Input key={input.nombre} onChange={handleChange} {...input} />
                            ))}
                            <button onClick={crearOrden}>
                                Realizar Pedido
                            </button>
                        </div>
                    </>
                ) : (
                    <h2>No hay productos en el carrito</h2>
                )}
            </div>
        </div>
    );
};