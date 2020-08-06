import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
  StyledNavbar,
  StyledNavBrand,
  StyledNavItems,
  StyledLink,
} from "../../styled/Navbar";

const Footer = () => {
  return (
    <footer className="main-footer" id="main-footer">
      <StyledNavbar className="footer-nav">
        <div className="container clearfix">
          <StyledNavItems className="bottom-nav">
            <li>
              <StyledLink to="/">
                Copyright <FontAwesomeIcon icon={faCopyright} size="2x" /> 2020
              </StyledLink>
            </li>
            <li>
              <StyledLink to="https://www.linkedin.com/in/jeremy-collins-209545194/">
                <FontAwesomeIcon icon={faLinkedin} size="2x" /> Jeremy Collins
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/">
                <FontAwesomeIcon icon={faLinkedin} size="2x" /> Taylor Remigi
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/">
                <FontAwesomeIcon icon={faLinkedin} size="2x" /> Mario Dubon
              </StyledLink>
            </li>
          </StyledNavItems>
        </div>
      </StyledNavbar>
    </footer>
  );
};

export default Footer;
