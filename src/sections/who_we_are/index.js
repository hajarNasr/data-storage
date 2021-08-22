import { WHO_WE_ARE } from "../../utils/resources";
import "./who-we-are.scss";

const WhoWeAre = () => (
  <section className="who-we-are">
    <div>
      <div className="img-wrapper">
        <img src={WHO_WE_ARE} alt="" />
      </div>
      <WhoWeAreText />
    </div>
  </section>
);

const WhoWeAreText = () => (
  <div className="text-wrapper">
    <h2>We are a high level data storage.</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie
      velit eget tellus pulvinar fringilla. Nam a est lacinia, gravida ex a,
      mattis orci. Cras ullamcorper ligula sit amet massa convallis tincidunt.
      Curabitur vitae faucibus mi. Vestibulum velit eros, aliquam nec eleifend
      quis, ullamcorper condimentum dui.
    </p>
  </div>
);

export default WhoWeAre;
