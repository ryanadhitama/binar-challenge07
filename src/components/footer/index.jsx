import React from "react";
import { Link, withRouter } from "react-router-dom";

import { Col, Row } from "antd";

import Logo from "@assets/img/logo.png";
import { ReactComponent as FacebookIcon } from "@assets/svg/facebook.svg";
import { ReactComponent as InstagramIcon } from "@assets/svg/instagram.svg";
import { ReactComponent as TwitterIcon } from "@assets/svg/twitter.svg";
import { ReactComponent as EmailIcon } from "@assets/svg/email.svg";
import { ReactComponent as TwitchIcon } from "@assets/svg/twitch.svg";

import { Container } from "@components";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row gutter={30}>
          <Col span={6}>
            <div className="address">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <a href="mailto:binarcarrental@gmail.com">
                binarcarrental@gmail.com
              </a>
              <a href="tel:081233334808">081-233-334-808</a>
            </div>
          </Col>
          <Col span={12}>
            <Row gutter={30}>
              <Col span={8}>
                <div className="footer-link">
                  <Link to={"/"}>Our Services</Link>
                  <Link to={"/"}>Why Us</Link>
                  <Link to={"/"}>Testimonial</Link>
                  <Link to={"/"}>FAQ</Link>
                </div>
              </Col>
              <Col span={16}>
                <div className="social">
                  <p>Connect with us</p>
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FacebookIcon />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <InstagramIcon />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <TwitterIcon />
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:binarcarrental@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <EmailIcon />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitch.tv"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <TwitchIcon />
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <div className="copyright">
              <p>Copyright Binar 2022</p>
              <Link to={"/"}>
                <img className="navbar-brand" src={Logo} alt="Logo" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default withRouter(Footer);
