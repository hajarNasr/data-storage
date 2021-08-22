import { useState } from "react";
import {
  ARROW_LEFT,
  PHOTO_1,
  PHOTO_2,
  PHOTO_3,
  WHITE_ARROW_RIGHT,
} from "../../utils/resources";
import "./testimonials.scss";

const Testimonials = () => {
  const [translateTo, setTranslateTo] = useState(20);

  return (
    <section className="testimonials">
      <div className="bg">
        <h3>Testimonials</h3>
        <div className="arrows">
          <button
            onClick={() => setTranslateTo(translateTo - 10)}
            disabled={translateTo < -10}
          >
            <img
              src={ARROW_LEFT}
              alt=""
              style={{ opacity: translateTo < -10 ? "0.2" : 1 }}
            />
          </button>
          <button
            onClick={() => setTranslateTo(translateTo + 10)}
            disabled={translateTo > 10}
          >
            <img
              src={WHITE_ARROW_RIGHT}
              alt=""
              style={{ opacity: translateTo > 10 ? "0.2" : 1 }}
            />
          </button>
        </div>
      </div>
      <div>
        <div
          className="testimonials_inner"
          style={{ transform: `translateX(${translateTo}vw)` }}
        >
          <Testimonial
            imgScr={PHOTO_1}
            name="John Fang"
            title="Web Developer"
          />
          <Testimonial imgScr={PHOTO_2} name="Jeny Doe" title="UX Designer" />
          <Testimonial
            imgScr={PHOTO_3}
            name="Andrew Doe"
            title="IOS Developer"
          />
        </div>
      </div>
    </section>
  );
};
const Testimonial = ({ imgScr, name, title }) => (
  <div className="testimonial">
    <div>
      <img src={imgScr} alt="" />
    </div>
    <div>
      <span>{name}</span>
      <span>{title}</span>
      <p>
        Lorem ipsum dolor amet, consectetur Nam a est lacinia adipiscing elit.
        Nam molestie velit eget tellus pulvinar fringilla. Nam a est lacinia,
        gravida ex a, mattis orci.
      </p>
    </div>
  </div>
);

export default Testimonials;
