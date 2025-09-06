// Importa os componentes
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />
        <div className="flex flex-1">
          {/* Hero */}
          <Hero />
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
