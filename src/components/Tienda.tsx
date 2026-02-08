import type { Producto } from "../App";
import ProductoCard from "./ProductoCard";

interface Props {
  productos: Producto[];
  onAgregar: (id: number) => void;
}

const Tienda = ({ productos, onAgregar }: Props) => {
  return (
    <div>
      {productos.map((producto) => {
        return (
          <ProductoCard
            key={producto.id}
            producto={producto}
            onComprar={() => onAgregar(producto.id)}
          />
        );
      })}
    </div>
  );
};

export default Tienda;
