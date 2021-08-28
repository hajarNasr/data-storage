import RequestDemoBtn from "../../components/request_a_demo_btn";
import { FB_LOGO, INSTA_LOGO, LOGO, TWITTER_LOGO } from "../../utils/resources";
import "./footer.scss";

const Footer = () => (
  <footer>
    <TopSection />
    <BottomSection />
  </footer>
);

const TopSection = () => (
  <div className="top-section">
    <div>
      <h3>Try One Month Free.</h3>
      <p>
        Lorem ipsum dolor amet, consectetur Nam a est lacinia adipiscing elit.
      </p>
    </div>
    <div>
      <button>Learn More</button>
      <RequestDemoBtn />
    </div>
  </div>
);
const BottomSection = () => (
  <ul>
    <LI
      title="Data Wharehouse"
      items={[
        "Warehouse Society, 234",
        "Bahagia Ave Street PRBW 29281",
        "info@warehouse.project",
        "1-232-3434 (Main)",
      ]}
    />
    <LI title="About" items={["Profile", "Features", "Careers", "DW News"]} />
    <LI
      title="Help"
      items={["Support", "Sign up", "Guide", "Reports", "Q&A"]}
    />
    <li>
      <p>Social Media</p>
      <img src={FB_LOGO} alt="" />
      <img src={TWITTER_LOGO} alt="" />
      <img src={INSTA_LOGO} alt="" />
    </li>
  </ul>
);
const LI = ({ title, items }) => (
  <li>
    <p>
      {title === "Data Wharehouse" && (
        <span>
          <img src={LOGO} alt="" />
        </span>
      )}
      <span>{title}</span>
    </p>
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </li>
);

export default Footer;
