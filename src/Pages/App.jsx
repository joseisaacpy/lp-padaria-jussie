// Importa hooks do React
import { useState, useEffect } from "react";

// Importa Element do react-scrool
import { Element } from "react-scroll";

// Importa os componentes
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Cardapio from "../Components/Cardapio";
import Footer from "../Components/Footer";

// Importa o Loader
import Loader from "../Components/Loader";

function App() {
  // Estado para controlar o carregamento
  const [loading, setLoading] = useState(true);

  // Estado para controlar o status do projeto
  // const [isBlock, setIsBlock] = useState(0);

  // useEffect para simular carregamento
  useEffect(() => {
    const visited = localStorage.getItem("visited", true);
    // Se já visitou a página, não mostra o loader
    if (visited) {
      setLoading(false);
    } else {
      // Se é a primeira vez, mostra o loader
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("visited", "true");
      }, 2500);
      // Limpa o timer se o componente for desmontado
      return () => clearTimeout(timer);
    }
  }, []);

  // Se estiver carregando, mostra o Loader
  if (loading) {
    return <Loader loaderMessage={"carregando..."} />;
  }
  // Se o projeto estiver bloqueado, mostra apenas o loader com uma menssagem
  // if (isBlock) {
  //   return (
  //     <Loader loaderMessage={"Consulte o desenvolvedor para saber mais..."} />
  //   );
  // }

  // Se não estiver carregando, mostra o conteúdo principal
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Element name="header">
          <Header />
        </Element>
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
