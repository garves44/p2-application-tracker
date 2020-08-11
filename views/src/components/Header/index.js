import React, { useEffect } from "react";

import {
  StyledNavbar,
  StyledNavBrand,
  StyledNavItems,
  StyledLink,
} from "../../styled/Navbar";

export default function Header() {
  return (
    <div className="main-header">
      <StyledNavbar>
        <StyledNavBrand>
          <StyledLink to="/">Job Application Tracker</StyledLink>
        </StyledNavBrand>
        <StyledNavItems>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/login">Login</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">Contact</StyledLink>
          </li>
        </StyledNavItems>
      </StyledNavbar>
    </div>
  );
}
