import { useEffect } from "react";
import carIcon from "../imgs/2639905_car_icon.svg";
import { Link } from "react-router-dom";

function Tramites() {
  useEffect(() => {
    document.title = "Tramites Automotor - Consulta app";
  }, []);

  return (
    <div className="flex gap-7 p-5 justify-center flex-wrap self-start mb-20">
      <Link to={"consultadeuda"}>
        <div className=" rounded-md w-64 h-64 p-4 flex flex-col justify-center items-center gap-2 shadow-lg border bg-slate-200  transform transition-transform hover:scale-105">
          <div className=" rounded-xl h-36 w-36 flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
            <img alt="iconoTramite" src={carIcon} className=" h-24" />
          </div>
          <h2 className=" text-2xl font-semibold text-center">
            Consulta de deuda por dominio
          </h2>
        </div>
      </Link>
      <Link to={""}>
        <div className=" rounded-md w-64 h-64 p-4 flex flex-col justify-center items-center gap-2 shadow-lg border bg-slate-200  transform transition-transform hover:scale-105">
          <div className=" rounded-xl h-36 w-36 flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
            <img alt="iconoTramite" src={carIcon} className=" h-24" />
          </div>
          <h2 className=" text-2xl font-semibold text-center">
            Renovacion de registro
          </h2>
        </div>
      </Link>{" "}
      <Link to={""}>
        <div className=" rounded-md w-64 h-64 p-4 flex flex-col justify-center items-center gap-2 shadow-lg border bg-slate-200  transform transition-transform hover:scale-105">
          <div className=" rounded-xl h-36 w-36 flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
            <img alt="iconoTramite" src={carIcon} className=" h-24" />
          </div>
          <h2 className=" text-2xl font-semibold text-center">
            Consulta de infracciones
          </h2>
        </div>
      </Link>
    </div>
  );
}

export default Tramites;
