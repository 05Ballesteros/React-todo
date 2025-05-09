import MoonIcon from "./icons/IconMoon";
const Header = () => {
  return (
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1 className="uppercase text-3xl font-semibold tracking-widest text-white">
          Todo
        </h1>
        <button>
          <MoonIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;