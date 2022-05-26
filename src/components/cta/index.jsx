import { Link } from "react-router-dom";
import { Container } from "@components";

const CTA = () => {
  return (
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
  )
}

export default CTA;
