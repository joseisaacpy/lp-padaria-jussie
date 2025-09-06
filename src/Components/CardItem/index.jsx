// Importa icon
import { FaWhatsapp } from "react-icons/fa";

const CardItem = ({ urlImagem, preco, nome, descricao }) => {
  return (
    <>
      {/* Card */}
      <div
        className="relative w-full md:w-[80%] flex flex-col gap-4 rounded-md text-primary hover:shadow-2xl hover:shadow-black/60
 transition-all duration-300"
      >
        {/* Imagem */}
        <div>
          <img
            className="w-full relative rounded-t-md"
            src={urlImagem}
            alt={`Imagem de ${nome}`}
          />
          {/* Preco */}
          <span className="absolute top-2 right-2 p-1 rounded-md bg-primary text-white font-bold">
            R$ {preco}
          </span>
        </div>
        {/* Texto */}
        <div className="flex flex-col gap-2 px-4 pb-4">
          {/* Nome */}
          <h3 className="font-semibold">{nome}</h3>
          {/* Descricao */}
          <p>{descricao}</p>
          {/* Link para Whats */}
          <button className="w-full">
            <a
              className="flex items-center justify-center border-1 border-primary rounded-md p-2 hover:text-white hover:bg-primary transition-all duration-300"
              href={`https://wa.me/5555869542191?text=Oi%2C%20quero%20saber%20mais%20sobre%0A${nome}`}
            >
              <FaWhatsapp className="mr-2" /> Encomendar
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardItem;
