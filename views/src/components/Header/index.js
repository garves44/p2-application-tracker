import React, { useEffect } from "react";

import {
  StyledNavbar,
  StyledNavBrand,
  StyledNavItems,
  StyledLink,
} from "../../styled/Navbar";

export default function Header() {
  
  return (
    <StyledNavbar>
      <StyledNavBrand>
        <StyledLink to="/">
           Job Application Tracker
        </StyledLink>
      </StyledNavBrand>
      <StyledNavItems>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        
      </StyledNavItems>
    </StyledNavbar>
  );
}
