import { useState } from "react";
import { Col, Row } from "antd";
import cx from "classnames";

const Faq = () => {
  const [faq, setFaq] = useState(null);
  const handleFaq = (id) => {
    return id === faq ? setFaq(null) : setFaq(id);
  };

  return (
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
          <Col span={24} lg={14}>
            <div id="accordion">
              <div className="card mb-3">
                <div className="card-body faq-title">
                  <div
                    className={cx("toggle-collapse", faq !== 1 && "collapsed")}
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
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body faq-title">
                  <div
                    className={cx("toggle-collapse", faq !== 2 && "collapsed")}
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
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body faq-title">
                  <div
                    className={cx("toggle-collapse", faq !== 3 && "collapsed")}
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
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body faq-title">
                  <div
                    className={cx("toggle-collapse", faq !== 4 && "collapsed")}
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
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body faq-title">
                  <div
                    className={cx("toggle-collapse", faq !== 5 && "collapsed")}
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
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Faq;
