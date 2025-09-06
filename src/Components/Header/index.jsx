// Importa o Link do react-scroll
import { Link } from "react-scroll";

const Header = () => {
  return (
    // Header
    <header>
      {/* Navigation */}
      <nav className="min-w-screen h-[70px] flex justify-around items-center bg-primary text-white">
        {/* Perfil */}
        <div className="flex items-center justify-center gap-2">
          <div>
            <span className="bg-white text-primary text-center rounded-full w-8 h-8 flex items-center justify-center">
              P
            </span>
          </div>
          <div>
            <h2 className="text-sm">Padaria Tradição</h2>
            <p className="text-[10px]">Sabor artesanal</p>
          </div>
        </div>
        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-sm hover:text-black transition-all duration-300"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="cardapio"
              smooth={true}
              duration={500}
              className="text-sm hover:text-black transition-all duration-300 cursor-pointer"
            >
              Cardápio
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="text-sm hover:text-black transition-all duration-300 cursor-pointer"
            >
              Encomendas
            </a>
          </li>
          <li>
            <Link
              to="contato"
              smooth={true}
              duration={500}
              className="text-sm hover:text-black transition-all duration-300 cursor-pointer"
            >
              Contato
            </Link>
          </li>
        </ul>
        {/* Menu Mobile */}
      </nav>
    </header>
  );
};

export default Header;
