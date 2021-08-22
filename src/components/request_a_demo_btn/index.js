import { ARROW_RIGHT } from "../../utils/resources";
import "./demo_btn.scss";

const RequestDemoBtn = () => (
  <button>
    <span>Request Demo</span>
    <img src={ARROW_RIGHT} alt="" />
  </button>
);

export default RequestDemoBtn;
