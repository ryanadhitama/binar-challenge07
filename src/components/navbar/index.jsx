/* eslint-disable */
import { useState } from "react";
import cx from "classnames";
import { Link, withRouter } from "react-router-dom";
import Logo from "@assets/img/logo.png";
import CloseIcon from "@assets/img/close.png";
import MenuIcon from "@assets/img/menu.png";
import { Container } from "@components";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="navigation">
      <Container>
        <nav className="navbar navbar-expand-lg">
          <Link to={"/"} className="navbar-brand">
            <img className="logo" src={Logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler pl-0 pr-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setMenu(true)}
          >
            <img src={MenuIcon} alt="" />
          </button>
          <div
            className={cx("collapse navbar-collapse", menu && "show")}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item nav-brand">
                <span>BCR</span>
                <img src={CloseIcon} alt="" onClick={() => setMenu(false)} />
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/#service">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#why-us">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-success" href="#">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default withRouter(Navbar);
