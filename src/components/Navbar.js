import { useContext, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Navbar() {
  const [navigation, setNavigation] = useState([
    { name: "Inicio", href: "/", current: false },
    { name: "Tramites", href: "/tramites", current: false },
    { name: "Turnos", href: "/turnos", current: false },
    { name: "Servicios", href: "/servicios", current: false },
    { name: "Mis pagos", href: "/pagos", current: false },
    { name: "Mis turnos", href: "/misturnos", current: false },
  ]);
  const handleLinkClick = (clickedItem) => {
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: item.name === clickedItem.name ? true : false,
    }));

    setNavigation(updatedNavigation);
  };

  const { user, setIsUser, isUser } = useContext(UserContext);

  const handleCerrarSesion = () => {
    setIsUser(false);
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link to={"/"} className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        to={item.href}
                        key={item.name}
                        onClick={() => handleLinkClick(item)}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-lg font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {isUser ? (
                <>
                  <p className="text-slate-300 font-bold text-lg mr-4">
                    Hola {user[0].nombre}!
                  </p>
                  <button
                    className=" rounded-md bg-red-500 text-slate-300 p-2 font-semibold text-sm"
                    onClick={handleCerrarSesion}
                  >
                    Cerrar sesion
                  </button>
                </>
              ) : (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3">
                  <Link to={"ingresar"}>
                    <button className=" rounded-md bg-sky-600 p-2 font-medium text-sm">
                      Iniciar sesion
                    </button>
                  </Link>
                  <Link to={"registrarse"}>
                    <button className=" rounded-md bg-sky-600 p-2 font-medium text-sm">
                      Registrarse
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link to={item.href}>
                  <Disclosure.Button
                    key={item.name}
                    onClick={() => handleLinkClick(item)}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
