import React, { Fragment, useState } from "react";
import cx from "classnames";
import { Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

import Container from "../../components/container";
import HeroImage from "@assets/img/hero.png";

import CompleteIcon from "@assets/img/complete.png";
import ProfessionalIcon from "@assets/img/professional.png";
import PriceIcon from "@assets/img/price.png";
import _24HoursIcon from "@assets/img/_24hrs.png";
import ServiceImage from "@assets/img/service.png";

const { Title } = Typography;

function Home() {
  const [faq, setFaq] = useState(null);

  const handleFaq = (id) => {
    if (id === faq) {
      return setFaq(null);
    }
    return setFaq(id);
  };

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
                <Link to="/cars">
                  <button className="btn btn-success">Mulai Sewa Mobil</button>
                </Link>
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
      <section className="general-section section-service service" id="service">
        <div className="container">
          <div className="row-service">
            <div>
              <img src={ServiceImage} alt="" srcset="" />
            </div>
            <div>
              <h2 className="mb-4">
                Best Car Rental for any kind of trip in Denpasar!
              </h2>
              <p className="mb-3">
                Sewa mobil di Denpasar bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul>
                <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                <li>Sewa Mobil Jangka Panjang Bulanan</li>
                <li>Gratis Antar - Jemput Mobil di Bandara</li>
                <li>Layanan Airport Transfer / Drop In Out</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="why-us" className="general-section">
        <div className="container">
          <h2
            className="mb-3 why-us__title aos-init aos-animate"
            data-aos="fade-right"
          >
            Why Us?
          </h2>
          <p
            className="mb-40 why-us__content aos-init aos-animate"
            data-aos="fade-right"
          >
            Mengapa harus pilih Binar Car Rental?
          </p>
          <Row gutter={[30, 30]}>
            <Col span={24} sm={12} lg={6}>
              <div className="card why-us__item">
                <div className="card-body">
                  <img className="mb-3" src={CompleteIcon} alt="complete" />
                  <h6 className="mb-3 bold">Mobil Lengkap</h6>
                  <p>
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </Col>
            <Col span={24} sm={12} lg={6}>
              <div className="card why-us__item">
                <div className="card-body">
                  <img className="mb-3" src={PriceIcon} alt="price" />
                  <h6 className="mb-3 bold">Harga Murah</h6>
                  <p>
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </Col>
            <Col span={24} sm={12} lg={6}>
              <div className="card why-us__item">
                <div className="card-body">
                  <img className="mb-3" src={_24HoursIcon} alt="24 hours" />
                  <h6 className="mb-3 bold">Layanan 24 Jam</h6>
                  <p>
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </Col>
            <Col span={24} sm={12} lg={6}>
              <div className="card why-us__item">
                <div className="card-body">
                  <img
                    className="mb-3"
                    src={ProfessionalIcon}
                    alt="professional"
                  />
                  <h6 className="mb-3 bold">Sopir Profesional</h6>
                  <p>
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="general-section">
        <Container>
          <div className="cta">
            <h1 className="mb-3 text-white cta-title">
              Sewa Mobil di Denpasar Sekarang
            </h1>
            <p className="m-auto text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to="/cars">
              <button className="btn btn-success">Mulai Sewa Mobil</button>
            </Link>
          </div>
        </Container>
      </section>
      <section className="general-section faq" id="faq">
        <div className="container">
          <span className="glyphicon glyphicon-asterisk"></span>
          <Row gutter={30}>
            <Col span={24} lg={10}>
              <h2 className="mb-3 faq-heading">Frequently Asked Question</h2>
              <p className="mb-4 faq-heading-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </Col>
            <Col lg={14}>
              <div id="accordion">
                <div className="card mb-3">
                  <div className="card-body faq-title">
                    <div
                      className={cx(
                        "toggle-collapse",
                        faq !== 1 && "collapsed"
                      )}
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                      onClick={() => handleFaq(1)}
                    >
                      Apa saja syarat yang dibutuhkan?
                    </div>
                  </div>

                  <div
                    id="collapseOne"
                    className={cx("collapse", faq === 1 && "show")}
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body faq-title">
                    <div
                      className={cx(
                        "toggle-collapse",
                        faq !== 2 && "collapsed"
                      )}
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      onClick={() => handleFaq(2)}
                    >
                      Berapa hari minimal sewa mobil lepas kunci?
                    </div>
                  </div>
                  <div
                    id="collapseTwo"
                    className={cx("collapse", faq === 2 && "show")}
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body faq-title">
                    <div
                      className={cx(
                        "toggle-collapse",
                        faq !== 3 && "collapsed"
                      )}
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      onClick={() => handleFaq(3)}
                    >
                      Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </div>
                  </div>
                  <div
                    id="collapseThree"
                    className={cx("collapse", faq === 3 && "show")}
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body faq-title">
                    <div
                      className={cx(
                        "toggle-collapse",
                        faq !== 4 && "collapsed"
                      )}
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                      onClick={() => handleFaq(4)}
                    >
                      Apakah Ada biaya antar-jemput?
                    </div>
                  </div>
                  <div
                    id="collapseFour"
                    className={cx("collapse", faq === 4 && "show")}
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body faq-title">
                    <div
                      className={cx(
                        "toggle-collapse",
                        faq !== 5 && "collapsed"
                      )}
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                      onClick={() => handleFaq(5)}
                    >
                      Bagaimana jika terjadi kecelakaan?
                    </div>
                  </div>
                  <div
                    id="collapseFive"
                    className={cx("collapse", faq === 5 && "show")}
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </Fragment>
  );
}

export default Home;
