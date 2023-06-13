import classes from "./Footer.module.css";
import audiophile from "../assets/audiophile.svg";
import { NavLink } from "react-router-dom";
import { Instagram, Twitter, Facebook } from "./UI/icons";
type Link = {
  isActive: boolean;
  isPending: boolean;
};
const Footer: React.FC = () => {
  const activeLink = (r: Link) => (r.isActive === true ? classes.isActive : "");
  const date = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      {/* <div className={classes.left}> */}
      <img src={audiophile} alt="audiophile" />
      {/* <div className={classes.right}> */}
      <nav>
        <NavLink className={(r) => activeLink(r)} to="/">
          Home
        </NavLink>
        <NavLink to="head-phones">Headphones</NavLink>
        <NavLink to="speakers">Speakers</NavLink>
        <NavLink to="earphones">Earphones</NavLink>
      </nav>
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className={classes.div}>
        <p>Copyright {date}. All rights reserved</p>
        <div className={classes.icons}>
          <i>
            <Facebook />
          </i>
          <i>
            <Instagram />
          </i>
          <i>
            <Twitter />
          </i>
        </div>
      </div>

      <p>Copyright {date}. All rights reserved</p>
    </footer>
  );
};

export default Footer;
