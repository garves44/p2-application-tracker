import React from "react";

//FontAwesome imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

// Styled Components
import {
  StyledNavbar,
  StyledNavItems,
  StyledLink,
  StyledAnchor,
} from "../../styled/Navbar";

const Footer = () => {
  return (
    <footer className="main-footer" id="main-footer">
      <StyledNavbar className="footer-nav">
        <div className="clearfix">
          <StyledNavItems className="bottom-nav">
            <li>
              <StyledLink to="/">
                Copyright <FontAwesomeIcon icon={faCopyright} size="1.5x" />{" "}
                {new Date().getFullYear()}
              </StyledLink>
            </li>
            <li>
              <StyledAnchor
                href="https://www.linkedin.com/in/jeremy-collins-209545194/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" /> Jeremy Collins
              </StyledAnchor>
            </li>
            <li>
              <StyledAnchor href="https://www.linkedin.com/in/taylor-remigi-7178281a5/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" /> Taylor Remigi
              </StyledAnchor>
            </li>
            <li>
              <StyledAnchor href="https://www.linkedin.com/in/mario-dubon-6a1081158/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" /> Mario Dubon
              </StyledAnchor>
            </li>
          </StyledNavItems>
        </div>
      </StyledNavbar>
    </footer>
  );
};

export default Footer;
