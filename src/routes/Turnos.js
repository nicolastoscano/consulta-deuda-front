import { useEffect } from "react";

function Turnos() {
  useEffect(() => {
    document.title = "Turnos - Consulta app";
  }, []);

  return <h1>Esto es turnos</h1>;
}

export default Turnos;
