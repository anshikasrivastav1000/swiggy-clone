import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Signin");

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
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>

          <button
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
