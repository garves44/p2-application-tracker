import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../utils/API";
import { useUserData } from "../../contexts/AuthContext";

import {
  StyledNavbar,
  StyledNavBrand,
  StyledNavItems,
  StyledLink,
} from "../../styled/Navbar";

//FontAwesome imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBriefcase } from "@fortawesome/free-solid-svg-icons";

import { StyledButtonLink, StyledButton } from "../../styled/Buttons";

export default function Header() {
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
  const [userData, setUserData] = useUserData();

  return (
    <div className="main-header">
      <StyledNavbar>
        <StyledNavBrand>
          <StyledLink to="/">Job Application Tracker</StyledLink>
        </StyledNavBrand>
        <StyledNavItems>
          {isAuthenticated ? (
            <>
              <li>
                <StyledLink to="/jobs">
                  <FontAwesomeIcon icon={faBriefcase} size="1x" />
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/">
                  <FontAwesomeIcon icon={faHome} size="1x" />
                </StyledLink>
              </li>
              <li>
                {user.name && <span>Welcome! {user.name} | </span>}
                <StyledButtonLink
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Log Out
                </StyledButtonLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <StyledLink to="/">
                  <FontAwesomeIcon icon={faHome} size="1x" />
                </StyledLink>
              </li>
              <li>
                <StyledButtonLink
                  onClick={async () => {
                    await loginWithRedirect();
                  }}
                >
                  Log In
                </StyledButtonLink>
              </li>
            </>
          )}

          <li>
            <StyledLink to="/contact">Contact</StyledLink>
          </li>
        </StyledNavItems>
      </StyledNavbar>
    </div>
  );
}
