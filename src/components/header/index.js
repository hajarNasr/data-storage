import { LOGO } from "../../utils/resources";
import RequestDemoBtn from "../request_a_demo_btn";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="header_left">
        <Logo />
        <HeaderMenu />
      </div>
      <div className="header_right">
        <RequestDemoBtn />
      </div>
    </header>
  );
};

const HeaderMenu = () => (
  <ul>
    <li>About</li>
    <li>Help</li>
    <li>Features</li>
    <li>Signup</li>
  </ul>
);

const Logo = () => <img src={LOGO} alt="logo" />;

export default Header;
