import React from "react";
import companyLogo from "../../assets/image/tales_of_finance_logo.png";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faSquareThreads,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Row className="d-flex flex-wrap justify-content-between align-items-top px-2 mt-3 w-100">
      <Col lg="6" className="d-flex flex-column align-items-start">
        <img
          src={companyLogo}
          loading="lazy"
          alt="navbar-logo"
          height="70"
          width="100"
          align="left"
        />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="d-flex gap-5 justify-content-center mx-auto fs-1">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a
            href="https://www.instagram.com/talesoffinance/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://twitter.com/talesoffinance"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.linkedin.com/company/talesoffiance/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://www.threads.net/@talesoffinance"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faSquareThreads} />
          </a>
        </div>
      </Col>
      <Col className="flex-1">
        {" "}
        <h4>Categories</h4>
        <p className="d-flex flex-column">
          <span>Tales of Startups</span>
          <span>Infographics</span>
          <span>Glossary</span>
          <span>Blogs</span>
        </p>
      </Col>
      <Col className="flex-1">
        <div className="d-flex flex-column justify-content-center align-items-start">
          <h4>Contact us</h4>
          <ul className="list-unstyled">
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <a
                className="text-decoration-none ps-2"
                href={`mailto:${"contact@talesoffinance.com"}`}
              >
                contact@talesoffinance.com
              </a>
            </li>

            <li>
              <FontAwesomeIcon icon={faPhone} />
              <a href="#" className="text-decoration-none ps-2">
                {" "}
                9874149305
              </a>
            </li>

            <li>
              <FontAwesomeIcon icon={faLocationDot} />
              <a href="#" className="text-decoration-none ps-2">
                Bengaluru, Karnataka.
              </a>
            </li>
          </ul>
        </div>
      </Col>
      <Col lg="12">
        <div class="d-flex justify-content-center pt-2 border-top">
          <p>&copy; 2021 Company, Inc. All rights reserved.</p>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
