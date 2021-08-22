import {
  ARROW_RIGHT,
  FEAT_1,
  FEAT_2,
  FEAT_3,
  FEAT_4,
  SHAPE_1,
  SHAPE_2,
} from "../../utils/resources";
import "./features.scss";

const ipsum = `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
consectetur, adipisci velit. Neque porro quisquam est, qui dolorem
ipsum quia dolor sit amet, consectetur, adipisci velit`;

const Features = () => (
  <section className="features">
    <span>
      <h3>Features</h3>
      <p>{ipsum}</p>
    </span>
    <div>
      <Feature
        h3="Search Data"
        bg="rgba(104,205,186,0.1)"
        imgSrc={FEAT_1}
        shape={1}
      />
      <Feature
        h3="24/7 Access"
        bg="rgba(156,105,226,0.1)"
        imgSrc={FEAT_4}
        shape={1}
      />
      <Feature
        h3="Print Out"
        bg="rgba(240,99,184,0.1)"
        imgSrc={FEAT_2}
        shape={1}
      />
      <Feature
        h3="Security Code"
        bg="rgba(45,156,219,0.1)"
        shape={2}
        imgSrc={FEAT_3}
      />
    </div>
  </section>
);

const Feature = ({ h3, bg, imgSrc, shape }) => (
  <div>
    <img src={imgSrc} alt="" className="feat" />
    {shape && (
      <img
        src={`${shape === 1 ? SHAPE_1 : SHAPE_2}`}
        alt=""
        className="shape"
      />
    )}
    <div className="clip-path" style={{ background: bg }}>
      <div>
        <h3>{h3}</h3>
        <p>{ipsum}</p>
        <div>
          <span>Learn More</span>
          <img src={ARROW_RIGHT} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default Features;
