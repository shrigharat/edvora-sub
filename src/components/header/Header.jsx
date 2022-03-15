import React, { useContext } from "react";
import { RidesContext } from "../../contexts/ridesContext";
import "./Header.styles.scss";

const Header = () => {
  const { user } = useContext(RidesContext);

  return (
    <header className="app-header">
      <nav>
        <ul>
          <li className="logo">Edvora</li>
          <li className="user">
            <span className="username">{user ? user.name : ""}</span>
            <div className="user-img-container">
              <img src={user ? user.url: ""} alt="" className="user-img" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
