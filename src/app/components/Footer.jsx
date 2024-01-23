import Link from "next/link";

const Footer = () => {
  return (
    //container mx-auto flex justify-between items-end py-3
    <footer>
      <div className="h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5">
          <ul className="flex gap-x-2 text-lg font-bold items-end">
            <p className="text-gray-800 font-bold text-3xl pb-6">
              stream <span className="text-blue-6">line</span>
            </p>
            <div className="flex gap-6 pb-5">Icons</div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Stocks
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Future & Options
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Tres
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Cuatro
            </li>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Categorias</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            <Link href="/">Inicio</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            <Link href="../pages/about">About</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            <Link href="../pages/contact">Contacto</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            <Link href="../pages/store">Tienda</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
