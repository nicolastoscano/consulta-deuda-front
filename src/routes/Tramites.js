import { useEffect } from "react";
import carIcon from "../imgs/2639905_car_icon.svg";
import homeIcon from "../imgs/4737441_building_estate_home_house_property_icon.svg";
import boatIcon from "../imgs/9035345_boat_outline_icon.svg";
import { Link } from "react-router-dom";

function Tramites() {
  useEffect(() => {
    document.title = "Tramites - Consulta app";
  }, []);

  return (
    <div className="flex gap-7 p-5 justify-center flex-wrap self-start mb-20">
      <Link to={"/tramites/automotor"}>
        <div className=" rounded-md w-64 h-96 p-4 flex flex-col justify-center items-center gap-2 shadow-lg border bg-slate-200  transform transition-transform hover:scale-105">
          <div className=" rounded-xl h-36 w-36 flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
            <img alt="iconoTramite" src={carIcon} className=" h-24" />
          </div>
          <h2 className=" text-2xl font-semibold">Automotor/Motos</h2>
          <h3>Licencias de conducir</h3>
          <h3>Infracciones</h3>
          <h3>Consulta de deuda</h3>
        </div>
      </Link>
      <div className=" rounded-md w-64 h-96 p-4 flex flex-col justify-center items-center gap-2 shadow-lg border bg-slate-200  transform transition-transform hover:scale-105">
        <div className=" rounded-xl h-36 w-36 flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
          <img alt="iconoTramite" src={homeIcon} className=" h-24" />
        </div>
        <h2 className=" text-2xl font-semibold">Inmobiliario</h2>
        <h3>Tasas</h3>
        <h3>Contrucciones</h3>
        <h3>Consulta de deuda</h3>
      </div>
      <div className=" rounded-md w-64 h-96 p-4 flex flex-col justify-center items-center gap-2 shadow-lg border bg-slate-200  transform transition-transform hover:scale-105">
        <div className=" rounded-xl h-36 w-36 flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
          <img alt="iconoTramite" src={boatIcon} className=" h-24" />
        </div>
        <h2 className=" text-2xl font-semibold">Nautico</h2>
        <h3>Licencias</h3>
        <h3>Consulta de deuda</h3>
        <h3>Registro</h3>
      </div>
    </div>
  );
}

export default Tramites;
