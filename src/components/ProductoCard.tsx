import type { Producto } from "../App";

interface Props {
    producto: Producto;
    onComprar: () => void;
}

const ProductoCard = ( { producto, onComprar }: Props ) => {
    return (
        <div className="card d-inline-block m-2">
            <div className="card-body">
                <h5 className="card-title"> { producto.nombre } </h5>
                <p className="card-text"> {producto.precio} € </p>
                <button className="btn btn-dark" onClick={onComprar}>Comprar</button>
            </div>
        </div>
    );
}

export default ProductoCard;