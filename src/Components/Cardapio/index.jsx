import CardItem from "../CardItem";
// import { FaWhatsapp } from "react-icons/fa";

const Cardapio = () => {
  return (
    <section className="bg-white p-2">
      {/* Texto */}
      <div className="m-12 flex flex-col gap-4 items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          Nosso Cardápio
        </h1>
        <p className="text-primary max-w-2xl text-center">
          Explore nossa seleção de produtos artesanais, preparados diariamente
          com ingredientes frescos e muito carinho.
        </p>
      </div>
      {/* Seção de pães */}
      <div className="">
        <h2 className="text-2xl text-primary text-center font-bold mb-4">Pães</h2>
        {/* Grid de pães */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center gap-6">
          {/* Cards */}
          <CardItem
            urlImagem={
              "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300&h=200&fit=crop"
            }
            preco={"100,00"}
            nome={"Nome do produto"}
            descricao={"Descrição do produto aqui"}
          />
          <CardItem
            urlImagem={
              "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300&h=200&fit=crop"
            }
            preco={"100,00"}
            nome={"Nome do produto"}
            descricao={"Descrição do produto aqui"}
          />
          <CardItem
            urlImagem={
              "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300&h=200&fit=crop"
            }
            preco={"100,00"}
            nome={"Nome do produto"}
            descricao={"Descrição do produto aqui"}
          />
        </div>
      </div>

      {/* Seção de bolos */}
      <div>
        <h2 className="text-2xl text-primary text-center font-bold mb-4">Bolos</h2>
        {/* Grid de bolos */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center mx-auto  gap-2">
          {/* Cards */}
          <CardItem
            urlImagem={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3dqx1Hq1Wat2aQyeNBtWJT3JsnVZ_Twlj5f4sbERlP-RG9Kfn85OlhNJFgrLSTFsl-LD_bfpTkZQJCkDA5sYJHa9pJ_qI4KAMGqx0mQ"
            }
            preco={"100,00"}
            nome={"Nome do produto"}
            descricao={"Descrição do produto aqui"}
          />
          <CardItem
            urlImagem={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3dqx1Hq1Wat2aQyeNBtWJT3JsnVZ_Twlj5f4sbERlP-RG9Kfn85OlhNJFgrLSTFsl-LD_bfpTkZQJCkDA5sYJHa9pJ_qI4KAMGqx0mQ"
            }
            preco={"100,00"}
            nome={"Nome do produto"}
            descricao={"Descrição do produto aqui"}
          />
          <CardItem
            urlImagem={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3dqx1Hq1Wat2aQyeNBtWJT3JsnVZ_Twlj5f4sbERlP-RG9Kfn85OlhNJFgrLSTFsl-LD_bfpTkZQJCkDA5sYJHa9pJ_qI4KAMGqx0mQ"
            }
            preco={"100,00"}
            nome={"Nome do produto"}
            descricao={"Descrição do produto aqui"}
          />
        </div>
      </div>
      {/* Seção de doces */}
      <div>
        <h2 className="text-2xl text-primary text-center font-bold mb-4">Doces</h2>
        {/* Grid de doces */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center mx-auto  gap-2">
          {/* Cards */}
          <CardItem
            urlImagem={
              "https://turistandonorio.com.br/wp-content/uploads/2023/09/brigadeiro.jpg"
            }
            preco={"100,00"}
            nome={"Nome do produto"}
            descricao={"Descrição do produto aqui"}
          />
          <CardItem
            urlImagem={
              "https://turistandonorio.com.br/wp-content/uploads/2023/09/brigadeiro.jpg"
            }
            preco={"100,00"}
            nome={"Nome do produto"}
            descricao={"Descrição do produto aqui"}
          />
          <CardItem
            urlImagem={
              "https://turistandonorio.com.br/wp-content/uploads/2023/09/brigadeiro.jpg"
            }
            preco={"100,00"}
            nome={"Nome do produto"}
            descricao={"Descrição do produto aqui"}
          />
        </div>
      </div>
    </section>
  );
};

export default Cardapio;
