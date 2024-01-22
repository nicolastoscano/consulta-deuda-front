import landingPhoto from "../imgs/playa_de_mayo_1200.jpg";
import paperIcon from "../imgs/808613_documents_files_filetypes_papers_sheets_icon.svg";
import servicesIcon from "../imgs/5452425_buildings_greek_monuments_museum_roman_icon.svg";

function Home() {
  return (
    <div className=" flex flex-col items-center">
      <div>
        <img src={landingPhoto} className=" mb-4 md: h-72" />
      </div>
      <div className="flex gap-4 flex-wrap justify-center mb-20">
        <div className=" rounded-md w-52 h-56 p-4 flex flex-col justify-center items-center gap-2 shadow-lg border bg-slate-200">
          <div className=" rounded-xl h-36 w-36 flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
            <img alt="iconoTramite" src={paperIcon} className=" h-28" />
          </div>
          <h2 className=" text-2xl font-semibold">Tramites</h2>
        </div>
        <div className=" rounded-md w-52 h-56 p-4 flex flex-col justify-center items-center gap-2 shadow-lg border bg-slate-200">
          <div className=" rounded-xl h-36 w-36 flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
            <img alt="iconoTramite" src={servicesIcon} className=" h-28" />
          </div>
          <h2 className=" text-2xl font-semibold">Servicios</h2>
        </div>
        <div className=" rounded-md w-52 h-56 p-4 flex flex-col justify-center items-center gap-2 shadow-lg border bg-slate-200">
          <div className=" rounded-xl h-36 w-36 flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
            <img alt="iconoTramite" src={paperIcon} className=" h-28" />
          </div>
          <h2 className=" text-2xl font-semibold">Tramites</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
