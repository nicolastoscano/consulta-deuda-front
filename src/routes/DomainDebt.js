import { useEffect, useState } from "react";
import deuda from "../solo-demo/deudas.json";

function DomainDebt() {
  const [showDebt, setShowDebt] = useState(false);

  const handleConsultaSubmit = (e) => {
    e.preventDefault();
    setShowDebt(true);
  };

  useEffect(() => {
    document.title = "Consulta de deuda - Consulta app";
  }, []);

  return (
    <>
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Consulte su deuda
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleConsultaSubmit}>
            <div>
              <label
                htmlFor="documento"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Dominio del vehiculo
              </label>
              <div className="mt-2">
                <input
                  id="documento"
                  name="documento"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Consultar
              </button>
            </div>
          </form>
          {showDebt ? (
            <div className="flex flex-col mt-6 gap-4">
              <h2>Deuda de dominio {deuda[0].dominio} es: </h2>
              <h2 className="rounded-md bg-white p-1.5 w-full">
                $ {deuda[0].monto}
              </h2>
              <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2">
                Ir a pagar
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default DomainDebt;
