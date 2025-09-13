// Importa o Link do react-scroll
import { Link } from "react-scroll";

const Hero = () => {
  return (
    // Section
    <section className="pt-[75px] flex items-center justify-center md:max-w-[90dvw] mx-auto">
      {/* Div Container */}
      <div className="flex flex-col md:flex-row p-6 items-center justify-center gap-4">
        {/* Textos */}
        <div className="flex flex-col flex-1 gap-6 text-center md:text-left">
          <h1 className="text-primary text-3xl sm:text-5xl font-extrabold">
            Sinta o sabor da tradição!
          </h1>
          <p className="text-primary text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Pães frescos, bolos artesanais e doces irresistíveis feitos com amor
            e ingredientes selecionados. Venha descobrir o que torna nossa
            padaria especial há mais de 30 anos.
          </p>
          {/* Button */}
          <button className="w-[150px] mx-auto md:m-0 text-sm bg-primary rounded-md px-5 py-2 text-white cursor-pointer hover:bg-accent hover:scale-95 transition-all duration-300">
            <Link to="cardapio" smooth={true} duration={500}>
              Ver Cardápio
            </Link>
          </button>
        </div>
        {/* Imagem */}
        <div className="relative">
          <img
            className="w-full md:w-[90%] rounded-md shadow-2xl flex-1 hover:scale-95 transition-all duration-300"
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop"
            alt="Pães"
          />
          <div className="flex flex-col text-left absolute bottom-0 left-[-20px] bg-white shadow-md rounded-md px-4 py-4 text-sm hover:scale-110 transition-all duration-300">
            <p className="text-primary font-black">Feito com amor</p>
            <p className="text-accent">Desde 2000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
