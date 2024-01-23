import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center py-3">
        <h3 className="font-bold text-3xl">
          <Link href="/">Nahuami</Link>
        </h3>
        <ul className="flex gap-x-2 text-lg font-bold">
          <li className="text-slate-300 hover:text-slate-200 px-3">
            <Link href="../pages/portafolio/">Portafolio</Link>
          </li>
          <li className="text-slate-300 hover:text-slate-200 px-3">
            <Link href="../pages/about/">About</Link>
          </li>
          <li className="text-slate-300 hover:text-slate-200 px-3">
            <Link href="../pages/contact/">Contacto</Link>
          </li>
          <li className="text-slate-300 hover:text-slate-200 px-3">
            <Link href="../pages/contact/">Tienda</Link>
          </li>
          <li className="text-slate-300 hover:text-slate-200 px-5">
            <Link href="../pages/contact/">Carrito</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
