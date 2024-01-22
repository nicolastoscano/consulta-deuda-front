function Footer() {
  return (
    <div className=" bg-gray-800 w-full flex justify-center p-3 fixed bottom-0">
      <div className="flex justify-between w-full max-w-7xl items-center">
        <div>
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <h1 className=" text-gray-400">Nombre de la app</h1>
      </div>
    </div>
  );
}

export default Footer;
