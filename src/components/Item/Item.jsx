import { useNavigate } from "react-router-dom";
// import "./Item.css";

export const Item = ({ img, marca, nombre, id, precio, uso}) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/item/${id}`)}>
            <div>
                <img src={img} />
            </div>
            <div >
                <div>
                    <span >{marca}</span>
                    <span >{nombre}</span>
                    <span >{uso}</span>
                </div>
                <span >
                    $ {precio}
                </span>
            </div>
        </div>
    );
};
