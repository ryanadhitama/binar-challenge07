import ServiceImage from "@assets/img/service.png";

const Service = () => {
  return (
    <section className="general-section section-service service" id="service">
      <div className="container">
        <div className="row-service">
          <div>
            <img src={ServiceImage} alt="Service" srcset="" />
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
  );
};

export default Service;
