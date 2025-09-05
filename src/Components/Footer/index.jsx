const Footer = () => {
  return (
    <>
      <footer className="fixed bottom-0 min-w-screen min-h-[50px] flex justify-center items-center bg-primary text-white">
        <p className="text-center">
          Desenvolvido por{" "}
          <a
            href="https://github.com/joseisaacpy"
            target="_blank"
            className="font-bold hover:underline"
          >
            José Isaac
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
