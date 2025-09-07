// Importa icons
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaArrowUp,
} from "react-icons/fa";

// Importa Link do react-scroll
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-primary text-white">
        <div className="py-4 px-2 grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-3 items-center justify-items-start md:justify-items-center">
          {/* Local */}
          <div className="flex flex-col ">
            <h4 className="font-bold mb-2">Informações de Contato</h4>
            <p className="flex items-start gap-3 max-w-xs mx-auto md:mx-0">
              <FaMapMarkerAlt />
              Rua das Flores, 123 Centro - São Paulo, SP CEP: 01234-567
            </p>
            <p className="flex items-center gap-3">
              {" "}
              <FaPhoneAlt /> (11) 9999-9999
            </p>
          </div>
          {/*  Horários */}
          <div className="flex flex-col">
            <h4 className="font-bold mb-2">Horário de Funcionamento</h4>
            <p className="flex items-center max-w-xs mx-auto md:mx-0 gap-3">
              <FaClock /> Segunda a Sábado: 6h às 20h Domingo: 7h às 18h
            </p>
          </div>
          {/* Links */}
          <div className="">
            <h4 className="font-bold mb-2">Redes Sociais</h4>
            <div className="flex gap-2">
              <div className="rounded-full bg-[#155DFC] p-2 text-white cursor-pointer md:opacity-80 hover:opacity-100 transition-all duration-300">
                <FaFacebook className="text-2xl" />
              </div>
              <div className="rounded-full bg-[#E60076] p-2 text-white cursor-pointer md:opacity-80 hover:opacity-100 transition-all duration-300">
                <FaInstagram className="text-2xl" />
              </div>
              <div className="rounded-full bg-[#00A63E] p-2 text-white cursor-pointer md:opacity-80 hover:opacity-100 transition-all duration-300">
                <FaWhatsapp className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
        {/* Direitos */}
        <div className="border-t border-white/70 py-4 text-sm text-center">
          <p>2025 Padaria Tradição. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <a
              className="underline font-bold font-mono hover:text-text transition-all duration-300"
              href="https://github.com/joseisaacpy"
              target="_blank"
            >
              &lt;José Isaac/&gt;
            </a>
          </p>
        </div>
        <div className="relative">
          <button
            title="Voltar para o topo"
            className="absolute bottom-2 right-2 p-2 bg-background rounded-full cursor-pointer animate-pulse"
          >
            <Link
              to="header"
              smooth={true}
              duration={1000}
              className="text-primary "
            >
              <FaArrowUp />
            </Link>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
