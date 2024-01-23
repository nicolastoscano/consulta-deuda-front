import landingPhoto from "../imgs/playa_de_mayo_1200.jpg";
import paperIcon from "../imgs/808613_documents_files_filetypes_papers_sheets_icon.svg";
import servicesIcon from "../imgs/5452425_buildings_greek_monuments_museum_roman_icon.svg";
import appointmentIcon from "../imgs/2075803_appontment_booking_calendar_date_reservation_icon.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.title = "Consulta app";
  }, []);

  return (
    <div className=" flex flex-col items-center">
      <div className=" md:h-60 md:w-3/4">
        <img
          src={landingPhoto}
          alt="foto de portada"
          className=" md:object-cover w-full h-full"
        />
      </div>
      <div className="flex  bg-gray-800 text-slate-300 mb-6 w-full justify-start p-4 font-bold text-lg shadow-lg md:w-3/4">
        Nombre del municipio
      </div>
      <div className="flex gap-8 flex-wrap justify-center mb-20">
        <Link to={"/tramites"}>
          <div className=" rounded-md w-52 h-56 p-4 flex flex-col justify-center items-center gap-2 shadow-lg border bg-slate-200 transform transition-transform hover:scale-105">
            <div className=" rounded-xl h-36 w-36 flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
              <img alt="iconoTramite" src={paperIcon} className=" h-20" />
            </div>
            <h2 className=" text-2xl font-semibold">Tramites</h2>
          </div>
        </Link>
        <div className=" rounded-md w-52 h-56 p-4 flex flex-col justify-center items-center gap-2 shadow-lg border bg-slate-200 transform transition-transform hover:scale-105">
          <div className=" rounded-xl h-36 w-36 flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
            <img alt="icono servicios" src={servicesIcon} className=" h-20" />
          </div>
          <h2 className=" text-2xl font-semibold">Servicios</h2>
        </div>
        <Link to={"/turnos"}>
          <div className=" rounded-md w-52 h-56 p-4 flex flex-col justify-center items-center gap-2 shadow-lg border bg-slate-200  transform transition-transform hover:scale-105">
            <div className=" rounded-xl h-36 w-36 flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
              <img alt="icono turno" src={appointmentIcon} className=" h-20" />
            </div>
            <h2 className=" text-2xl font-semibold">Turnos</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
