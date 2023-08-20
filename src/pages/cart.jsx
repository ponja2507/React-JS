import { useState } from "react";
import { updateManyProducts } from "../lib/productos.request";
import { LocaleString } from "../components/LocaleString/LocaleString";
import { AiOutlineDelete } from "react-icons/ai";
import { useCartContext } from "../state/Cart.context";
import { Input } from "../components";
import { addOrden } from "../lib/ordenes.request";
import { deformito } from "../assets/deformito";


const FORM_COMPRA = [
    {label: "Nombre", name: "nombreCliente", placeholder: "Ingresa tu nombre"},
    {label: "Dirección", name: "direccion", placeholder: "Ingresa tu dirección"},
    {label: "Correo", name: "correo1", placeholder: "Ingresa tu Email"},
    {label: "Repetir Correo", name: "correo2", placeholder: "Repite tu Email"},
    {label: "Teléfono", name: "tel", placeholder: "Ingresa tu celular"}
];

export const Cart = () => {
    const [form, setForm] = useState({});
    const {cart, cleanCart, getTotalPrice, removeProduct, mermaProducto, sumaProducto, addProducto} = useCartContext();

    const crearOrden = async () => {
        const items = cart.map(({id, nombre, qty, precio}) => ({
            id,
            nombre,
            qty,
            precio,
        }));

        const {nombreCliente, direccion, correo1, tel} = form;

        const orden = {
            cliente: {nombreCliente, direccion, correo1, tel},
            items,
            total: getTotalPrice,
        };

        
        
        const id = await addOrden(orden);
        alert(`Su código de orden es ${id}`)
        
        await updateManyProducts(items);
        cleanCart();
    };
    
    const handleChange = (evento) => {
        const {name, value} = evento.target;
        setForm({...form, [name]:value})
    };

    return (
        <div className="carrito">
            <div>
                {cart.length ? (
                    <>
                        <div>
                            <button className="boton-carrito" onClick={cleanCart}>Vaciar Carrito</button>
                        </div>
                        <div>
                            <div className="nombres-carrito">
                                <span>Producto</span>
                                <span>Cantidad</span>
                                <span>Precio</span>
                                <span>Subtotal</span>
                            </div>
                            {cart.map((item) => (
                                <div className="detalle-carrito" key={item.id}>
                                    <span className="nombre-detalle-carrito">{item.nombre}</span>
                                    <span>
                                    <button className="boton-ajuste" onClick={() => mermaProducto(item.id)}> - </button>
                                    <span className="qty-detalle-carrito">{item.qty}</span>
                                    <button className="boton-ajuste" onClick={() => sumaProducto(item.id)}> + </button>
                                    </span>
                                    <span className="precio-detalle-carrito" >
                                    <LocaleString num = {item.precio} />
                                    </span>
                                    <span className="subtotal-detalle-carrito" >
                                    <LocaleString num = {item.qty * item.precio} />
                                    </span>
                                    <button className="boton-ajuste" onClick={() => removeProduct(item.id)}>
                                        <AiOutlineDelete />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="div-total-detalle">
                                <span className="total-detalle">Total </span> 
                                <span className="total-importe-detalle">
                                    <LocaleString num = {getTotalPrice} />
                                </span>
                            </div>
                        </div>
                        <div className="form-carrito">
                            {FORM_COMPRA.map((input, index) => (
                                <Input key={index} name={input.name} onChange={handleChange} {...input} />
                            ))}
                        </div>
                        <button className="boton-pedido-carrito" onClick={crearOrden}>
                            Realizar Pedido
                        </button>
                    </>
                ) : (
                    <>
                    <h2>No hay productos en el carrito</h2>
                    <img src={deformito}/>
                    </>
                )}
            </div>
        </div>
    );
};