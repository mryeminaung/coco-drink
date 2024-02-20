import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border flex items-center justify-evenly py-2">
      <NavLink className="border px-2 py-1 rounded-md" to="/">
        Home
      </NavLink>
      <NavLink className="border px-2 py-1 rounded-md" to="/drinks">
        Drinks
      </NavLink>
      <NavLink className="border px-2 py-1 rounded-md" to="/ice-creams">
        Ice Creams
      </NavLink>
      <NavLink className="border px-2 py-1 rounded-md" to="/cart">
        Cart
      </NavLink>
    </div>
  );
};

export default Navbar;
