import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Hem</Link>
      <Link to="/favorites">Favoriter</Link>
    </nav>
  );
};

export default Navbar;
