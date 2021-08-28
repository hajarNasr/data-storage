import Header from "../../components/header";
import { HERO } from "../../utils/resources";
import "./hero.scss";

const Hero = () => (
  <section className="hero">
    <Header />
    <div className="hero_text-wrapper">
      <HeroText />
    </div>
    <img src={HERO} alt="" className="hero-img" />
  </section>
);

const HeroText = () => (
  <div>
    <h1>Save Your Data in a Safe Space.</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non
      auctor nulla. Pellentesque tincidunt quam a odio condimentum mollis. Nulla
      facilisi. Pellentesque feugiat sem eget est dignissim
    </p>
    <button>Learn More</button>
  </div>
);

export default Hero;
