import { logoURL } from "../../src/utils/constants";

const Header = () => {
  return (
    <div className="header">
      <img src={logoURL}></img>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
