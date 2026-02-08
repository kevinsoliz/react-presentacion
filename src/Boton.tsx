import { useState } from "react";

const Boton = () => {
  const [contador, setContador] = useState(0);

  return <button onClick={() => setContador(contador + 1)}>{contador}</button>;
};

export default Boton;
