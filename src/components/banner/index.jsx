import { Col, Row } from "antd";
import { Link } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";

import { Container } from "@components";
import HeroImage from "@assets/img/hero.png";

const Banner = ({ hideButton = false }) => {
  return (
    <>
      <header>
        <img
          className="hero-img"
          src={HeroImage}
          data-aos-delay="100"
          data-aos="fade-up"
          alt="mobil"
        />
        <div className="hero">
          <Container>
            <Row>
              <Col span={24} lg={12}>
                <h1 className="mb-3" data-aos-delay="100" data-aos="fade-right">
                  Sewa & Rental Mobil Terbaik di kawasan Denpasar
                </h1>
                <p data-aos-delay="100" data-aos="fade-right">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                {!hideButton && (
                  <Link to="/cars">
                    <button className="btn btn-success">
                      Mulai Sewa Mobil
                    </button>
                  </Link>
                )}
                {/* <div style={{marginTop: '20px'}}>
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                  <button onClick={() => alert('a')}>Logout</button>
                </div> */}
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </>
  );
};

export default Banner;
