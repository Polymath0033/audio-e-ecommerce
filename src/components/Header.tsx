import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/audiophile.svg";
import cart from "../assets/cart.svg";

const Header: React.FC = () => {
  return (
    <>
      <header className={classes.header}>
        <NavLink to="/">
          <img src={logo} alt="audiophile" />
        </NavLink>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="head-phones">Headphones</NavLink>
          <NavLink to="speakers">Speakers</NavLink>
          <NavLink to="earphones">Earphones</NavLink>
        </nav>
        <button>
          <img src={cart} alt="cart" />
        </button>
      </header>
    </>
  );
};

export default Header;
