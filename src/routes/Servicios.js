import { useEffect } from "react";

function Servicios() {
  useEffect(() => {
    document.title = "Servicios - Consulta app";
  }, []);

  return <h1>Esto es servicios</h1>;
}

export default Servicios;
