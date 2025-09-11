// Importa icon de pão
import { FaBreadSlice } from "react-icons/fa";

const Loader = ({ loaderMessage }) => {
  return (
    <div className="w-screen h-screen flex flex-col gap-2 items-center justify-center bg-primary/20">
      <FaBreadSlice className="text-3xl animate-spin text-primary" />
      {/* Mensagem do loader */}
      <h1 className="text-lg text-center text-primary font-bold animate-pulse">
        {loaderMessage}
      </h1>
    </div>
  );
};

export default Loader;
