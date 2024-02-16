import React from "react";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <ul className="header-list">
          <li>
            <NavLink className="header" to="/">
              Main
            </NavLink>
          </li>
          <li>
            <NavLink className="header" to="/catalog">
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink className="header" to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
