const Header = () => {
  return (
    // Header
    <header>
      {/* Navigation */}
      <nav className="min-w-screen min-h-[80px] flex justify-around items-center bg-primary text-white">
        {/* Logo */}
        <a href="#">
          <h1 className="text-2xl font-bold hover:text-black transition-all duration-300">
            Logo
          </h1>
        </a>
        {/* Links */}
        <ul className="flex gap-6">
          <li>
            <a
              href="#"
              className=" hover:text-black transition-all duration-300"
            >
              Link
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" hover:text-black transition-all duration-300"
            >
              Link
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" hover:text-black transition-all duration-300"
            >
              Link
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" hover:text-black transition-all duration-300"
            >
              Link
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
