
import { useState } from "react";
import Carrito from "./components/Carrito";
import Tienda from "./components/Tienda";

export interface Producto {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
}

function App() {
  const productos: Producto[] = [
    { id: 1, nombre: "Plátano", cantidad: 0, precio: 10.90 },
    { id: 2, nombre: "Manzana", cantidad: 0, precio: 4.25 },
    { id: 3, nombre: "Lechuga", cantidad: 0, precio: 8.99 },
    { id: 4, nombre: "Queso", cantidad: 0, precio: 2 },
  ];

  const [carrito, setCarrito] = useState<Producto[]>([]);

  function agregar(id: number) {
    let producto = carrito.find((p) => p.id === id);

    if (producto) {
      const carritoActualizado = carrito.map((p) =>
        p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p,
      );
      setCarrito(carritoActualizado);
    } else {
      const productoNuevo = productos.find((p) => p.id === id);
      if (!productoNuevo) return;
      setCarrito([...carrito, { ...productoNuevo, cantidad: 1 }]);
    }
  }

  function quitar(id: number) {
    let producto = carrito.find((p) => p.id === id);
    if (!producto) return
    if (producto.cantidad === 1) {
      const carritoFiltrado = carrito.filter(p => p.id != id);
      setCarrito(carritoFiltrado);
      return;
    }
    
     const carritoActualizado = carrito.map((p) =>
        p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p,
      );
      setCarrito(carritoActualizado);
    

  }
  return (
    <>
   
      <div className="d-flex flex-column align-items-center">
        <div>
          <Tienda productos={productos} onAgregar={agregar} />
        </div>
        { carrito.length > 0 && <Carrito productos={carrito} onSumar={agregar} onRestar={quitar}/>}
      </div>
    </>
  );
}

export default App;
