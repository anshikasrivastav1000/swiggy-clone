import { useState } from "react";
import { Link } from "react-router-dom";
import {useOnlineStatus} from '../utils/useOnlineStatus'
const Header = () => {
  const [btnName, setBtnName] = useState("Signin");
const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status : { onlineStatus ? "🟢": "🔴"}
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
         
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>

          <button className="signup-btn"
            onClick={() => {
              btnName === "Sign in"
                ? setBtnName("Sign up")
                : setBtnName("Sign in");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
