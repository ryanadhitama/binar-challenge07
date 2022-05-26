import { useRef, useEffect } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import AvatarImage from "@assets/img/avatar.png";
import StarIcon from "@assets/img/star.svg";
import { ReactComponent as NextIcon } from "@assets/img/next.svg";
import { ReactComponent as PrevIcon } from "@assets/img/prev.svg";

const Testimonial = () => {
  SwiperCore.use([Navigation]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const sliderRef = useRef();

  useEffect(() => {
    sliderRef.current.swiper.slideTo(1);
  }, []);

  return (
    <section id="testimonial" className="general-section">
      <div className="container text-center">
        <h2 className="mb-3">
          Testimonial
        </h2>
        <p className="mb-40">
          Berbagai review positif dari para pelanggan kami
        </p>
      </div>
      <Swiper
        ref={sliderRef}
        centeredSlides={false}
        centerInsufficientSlides={false}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        breakpoints={{
          600: {
            slidesPerView: 2,
            centeredSlides: true,
          },
        }}
      >
        {Array(9)
          .fill(1)
          .map((el, i) => (
            <SwiperSlide>
              <div className="testimonial-item">
                <img className="profile" src={AvatarImage} alt="" />
                <div className="testimonial-content">
                  <div className="star">
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                  </div>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <span>John Dee 32, Bromo</span>
                </div>
              </div>
            </SwiperSlide>
          ))}

        <div className="swiper-button-wrapper">
          <div className="swiper-prev swiper-button" ref={navigationPrevRef}>
           <PrevIcon />
          </div>
          <div className="swiper-next swiper-button" ref={navigationNextRef}>
            <NextIcon />
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonial;
