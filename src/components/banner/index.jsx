import { Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

import { Container } from "@components";
import HeroImage from "@assets/img/hero.png";

const { Title } = Typography;

const Banner = ({ hideButton = false }) => {
  return (
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
              {!hideButton && (
                <Link to="/cars">
                  <button className="btn btn-success">Mulai Sewa Mobil</button>
                </Link>
              )}
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
  );
};

export default Banner;
