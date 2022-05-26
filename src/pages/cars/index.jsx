import React, { Fragment } from "react";
import { Col, Row, Typography } from "antd";

import Container from "../../components/container";
import HeroImage from "@assets/img/hero.png";
import { Search } from "@components";

const { Title } = Typography;

function Cars() {
  return (
    <Fragment>
      <section className="banner-section">
        <Container>
          <Row gutter={30}>
            <Col span={12}>
              <div className="banner-content">
                <Title>Sewa & Rental Mobil Terbaik di kawasan Denpasar</Title>
                <p>
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
              </div>
            </Col>
            <Col span={12}>
              <div className="hero">
                <img
                  src={HeroImage}
                  alt="Sewa & Rental Mobil Terbaik di kawasan Denpasar"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="search-wrapper">
        <Container>
          <Search width={"1047px"} />
        </Container>
      </section>
      <div style={{ height: "100px" }}></div>
    </Fragment>
  );
}

export default Cars;
