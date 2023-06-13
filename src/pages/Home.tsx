import classes from "./Home.module.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/audiophile.svg";
import cart from "../assets/cart.svg";
import img from "../assets/Bitmap.svg";
import speaker from "../assets/speaker.png";
import speaker_ from "../assets/speaker_.png";
import bluetooth from "../assets/bluetooth.png";
import caret from "../assets/caret.svg";
import headset from "../assets/headset.png";
import earpiece from "../assets/earpiece.png";
import man from "../assets/man_with_headset.png";
const Home: React.FC = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.tab}>
          <button>
            {[1, 2, 3].map((x) => (
              <div key={x}></div>
            ))}
          </button>
          <NavLink to="/">
            <img src={logo} alt="audiophile" />
          </NavLink>
        </div>
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
      <div className={classes.line}>
        <hr />
      </div>
      <div className={classes.hero}>
        <div className={classes.top}>
          <div className={classes.text}>
            <span>NEW PROJECT</span>
            <h1>XX99 Mark II Headphones</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button>SEE PRODUCT</button>
          </div>
        </div>
        <div>
          <img src={img} alt="images" />
        </div>
      </div>
      <section className={classes.flex}>
        <div>
          <img src={headset} alt="headset" />
          <h4>Headphones</h4>
          <button>
            shop{" "}
            <i>
              <img src={caret} alt="caret" />
            </i>{" "}
          </button>
        </div>
        <div>
          <img src={speaker} alt="speaker" />
          <h4>speakers</h4>
          <button>
            shop{" "}
            <i>
              <img src={caret} alt="caret" />
            </i>{" "}
          </button>
        </div>
        <div>
          <img src={bluetooth} alt="bluetooth" />
          <h4>Earphones</h4>
          <button>
            shop{" "}
            <i>
              <img src={caret} alt="caret" />
            </i>{" "}
          </button>
        </div>
      </section>
      <article className={classes.wrapper}>
        <div className={classes.div}>
          <img src={speaker_} alt="speaker" />
          <div className={classes["article-text"]}>
            <h1>
              ZX9
              <br /> SPEAKER
            </h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button>SEE PRODUCT</button>
          </div>
        </div>
        <div className={classes["background-speaker"]}>
          <div>
            <h1 className={classes["home-h1"]}>ZX7 SPEAKER</h1>
            <button className={classes["home-btn"]}>see product</button>
          </div>
        </div>
        <div className={classes["grid-home"]}>
          <img src={earpiece} alt="earpiece" />
          <div>
            <h1 className={classes["home-h1"]}>YX1 EARPHONES</h1>
            <button className={classes["home-btn"]}>SEE PRODUCTS</button>
          </div>
        </div>
        <div className={classes["last-grid"]}>
          <div>
            <h1>
              Bringing you the <span>best</span> audio gear
            </h1>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <img src={man} alt="man_with_headset" />
        </div>
      </article>
    </>
  );
};
export default Home;
