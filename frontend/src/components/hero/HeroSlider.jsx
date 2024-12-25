import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/slid1.jpg";
import slide2 from "../../assets/slide2.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
function HeroSlider() {
  return (
    <Swiper
      loop={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      spaceBetween={1}
      style={{ borderRadius: "10px" }}
    >
      <SwiperSlide>
        <img src={slide2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide1} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSlider;
