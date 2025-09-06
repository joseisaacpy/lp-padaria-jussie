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
          <Hero />
          {/* Cardápio */}
          <Cardapio />
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
