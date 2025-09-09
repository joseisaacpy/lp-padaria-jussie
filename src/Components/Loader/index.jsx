// Importa icon de pão
import { FaBreadSlice } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <FaBreadSlice className="text-3xl animate-spin text-primary" />
    </div>
  );
};

export default Loader;
