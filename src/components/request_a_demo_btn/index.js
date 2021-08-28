import { ARROW_RIGHT } from "../../utils/resources";
import "./demo_btn.scss";

const RequestDemoBtn = () => (
  <button className="demo-btn">
    <span>Request Demo</span>
    <img src={ARROW_RIGHT} alt="" />
  </button>
);

export default RequestDemoBtn;
