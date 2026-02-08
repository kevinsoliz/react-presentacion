
interface Props {
  nombre: string;
  apellido: string;
}

const Saludo = 
({nombre, apellido}: Props) => {
  return (
  <h1>
    Hola {nombre} {apellido}
  </h1>
  );
};

export default Saludo;
