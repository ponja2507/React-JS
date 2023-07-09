import "./ItemListContainer.css";

export const ItemListContainer = ({greeting}) => {
    return (
        <div className="divItems">
            <h2>{greeting}</h2>
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
            <p>Item 4</p>
        </div>
    )
}