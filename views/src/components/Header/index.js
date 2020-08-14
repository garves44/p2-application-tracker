import React, { useContext, useEffect } from "react";
import { useUserData } from "../../contexts/AuthContext";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../utils/API";

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
  const { userData, setUserData } = useUserData();
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
  } = useAuth0();

  const handleLogin = async () => {
    try {
      const newToken = await getAccessTokenSilently();
      await setUserData((prevState) => ({
        ...prevState,
        ...user,
        last_used_token: newToken,
      }));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log("AuthContext useEffect ran");
    console.log("userData:", userData);

    if (isAuthenticated) {
      handleLogin();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    console.log(userData.hasOwnProperty("email"));
    console.log(userData.hasOwnProperty("last_used_token"));
    console.log("userData", userData);

    if (
      userData.hasOwnProperty("email") &&
      userData.hasOwnProperty("last_used_token")
    ) {
      API.login(userData);
    }
  }, [userData]);

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
                {userData.email && <span>Welcome! {userData.email} | </span>}
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
