// Importa o Link do react-scroll
import { Link } from "react-scroll";

// Icon
import { FaAlignJustify } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  // Estado para controlar o menu
  const [menu, setMenu] = useState(false);

  // Para armazenar os itens dos dois menus
  const menuItens = [
    { label: "Início", to: "hero" },
    { label: "Cardápio", to: "cardapio" },
    { label: "Contato", to: "contato" },
  ];

  return (
    // Header
    <header className="fixed w-full z-50">
      {/* Navigation */}
      <nav className="w-full h-[70px] md:rounded-b-full shadow-md shadow-primary/45 flex justify-around items-center bg-primary text-white">
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
          {menuItens.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className="text-sm text-white hover:text-black transition-all duration-300 cursor-pointer"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Icon Menu Mobile */}
        <FaAlignJustify
          className="md:hidden cursor-pointer"
          onClick={() => setMenu(!menu)}
        />
      </nav>
      {/* Menu Mobile */}
      <ul
        className={`w-full bg-primary flex flex-col pl-2 gap-2 overflow-hidden transition-all duration-700 ${
          menu ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        {menuItens.map((item) => (
          <li key={item.to} className="pb-1">
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              onClick={() => setMenu(false)}
              className="text-sm text-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
