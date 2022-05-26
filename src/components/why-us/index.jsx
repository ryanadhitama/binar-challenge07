import { Col, Row } from "antd";
import CompleteIcon from "@assets/img/complete.png";
import ProfessionalIcon from "@assets/img/professional.png";
import PriceIcon from "@assets/img/price.png";
import _24HoursIcon from "@assets/img/_24hrs.png";

const WhyUs = () => {
  return (
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
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
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
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
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
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default WhyUs;
