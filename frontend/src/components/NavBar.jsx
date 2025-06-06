import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="navbar"
      class="bg-black p-4 md:py-4 md:px-8 flex justify-between items-center shadow-sm"
    >
      <div
        className="navbar-brand"
        class="text-xl sm:text-2xl font-bold text-blue-500"
      >
        <Link to="/">Movie Lookup</Link>
      </div>
      <div className="navbar-links" class="flex gap-4 md:gap-8">
        <Link
          to="/"
          className="nav-link"
          class="text-blue-500 text-base p-2 md:px-4 md:py-2 rounded transition duration-200 hover:bg-white/10"
        >
          Home
        </Link>
        <Link
          to="/favorites"
          className="nav-link"
          class="text-blue-500 text-base p-2 md:px-4 md:py-2 rounded transition duration-200 hover:bg-white/10"
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
