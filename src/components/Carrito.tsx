import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import type { Producto } from "../App";

interface Props {
  productos: Producto[];
  onSumar: (id: number) => void;
  onRestar: (id: number) => void;
}

const Carrito = ({ productos, onSumar, onRestar }: Props) => {
  let total = productos.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0,
  );
  return (
    <div style={{ width: "20rem" }}>
      <table className="table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((producto) => {
            return (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td className="d-flex align-items-center gap-4">
                  <FaCircleMinus
                    size={20}
                    style={{ cursor: "pointer" }}
                    onClick={() => onRestar(producto.id)}
                  />
                  <span>{producto.cantidad}</span>
                  <FaCirclePlus
                    size={20}
                    style={{ cursor: "pointer" }}
                    onClick={() => onSumar(producto.id)}
                  />
                </td>
                <td>
                  {(producto.precio * producto.cantidad).toFixed(2)} €
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
          <span className="fw-bold text-bg-dark p-2 rounded">
            Total: {total.toFixed(2)} €
          </span>
      </div>
    </div>
  );
};

export default Carrito;
