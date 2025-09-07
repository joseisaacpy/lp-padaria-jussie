// Importa Element do react-scrool
import { Element } from "react-scroll";

// Importa os componentes
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Cardapio from "../Components/Cardapio";
import Footer from "../Components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />
        <div className="flex flex-col flex-1">
          {/* Hero */}
          <Element name="hero">
            <Hero />
          </Element>
          {/* Cardápio */}
          <Element name="cardapio">
            <Cardapio />
          </Element>
        </div>
        {/* Footer */}
        <Element name="contato">
          <Footer />
        </Element>
      </div>
    </>
  );
}

export default App;
