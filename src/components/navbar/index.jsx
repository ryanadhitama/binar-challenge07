import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import { Menu } from "antd";

import Logo from "../../assets/img/logo.png";
import Container from "../container";

const Navbar = () => {
  const [state, setState] = useState({ current: "home" });

  const handleClick = (e) => {
    setState({ current: e.key });
  };

  const { current } = state;

  return (
    <Container>
      <div className="navbar-wrapper">
        <Link to={"/"}>
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          style={{ justifyContent: "flex-end", width: "100%" }}
        >
          <Menu.Item key="service">
            <Link to={"/"}>Our Services</Link>
          </Menu.Item>
          <Menu.Item key="whyus">
            <Link to={"/"}>Why Us</Link>
          </Menu.Item>
          <Menu.Item key="testimonial">
            <Link to={"/"}>Testimonial</Link>
          </Menu.Item>
          <Menu.Item key="faq">
            <Link to={"/"}>FAQ</Link>
          </Menu.Item>
        </Menu>
        <Link className="btn-register" to={"/"}>
          Register
        </Link>
      </div>
    </Container>
  );
}

export default withRouter(Navbar);
