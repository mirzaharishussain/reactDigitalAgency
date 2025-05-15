import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Brand = () => {
  return (
    <div>
      <section className="brand-area">
  <div className="container">
    <div className="brand-area-inner">
      <div className="section-header fade-anim" data-direction="left">
        <div className="section-title-wrapper">
          <div className="title-wrapper">
            <h2 className="section-title">Trusted by Leading Brands</h2>
          </div>
        </div>
        <div className="counter-text">
          <span className="t-counter brand-counter">1.2k</span>
        </div>
      </div>
      <div className="section-content fade-anim" data-direction="right" data-delay="0.30">
        <div className="brands-wrapper-box">
          <div className="brands-wrapper">
                    <Swiper
                    modules={[Autoplay]} 
                    loop={true}
                    pagination={{ clickable: false }}
                    navigation={false}
                    slidesPerView={3}
                    autoplay={{
                        delay: 0, 
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    speed={5000}
                    direction='horizontal'
                    >
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="brand-item">
                            <img src="./assets/imgs/brand/brand-1.webp" alt="image"/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="swiper-slide">
                  <div className="brand-item">
                    <img src="./assets/imgs/brand/brand-2.webp" alt="image"/>
                  </div>
                </div></SwiperSlide>                
                <SwiperSlide><div className="swiper-slide">
                  <div className="brand-item">
                    <img src="./assets/imgs/brand/brand-3.webp" alt="image"/>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slide">
                  <div className="brand-item">
                    <img src="./assets/imgs/brand/brand-1.webp" alt="image"/>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slide">
                  <div className="brand-item">
                    <img src="./assets/imgs/brand/brand-2.webp" alt="image"/>
                  </div>
                </div>
                </SwiperSlide>
                
                <SwiperSlide><div className="swiper-slide">
                  <div className="brand-item">
                    <img src="./assets/imgs/brand/brand-3.webp" alt="image"/>
                  </div>
                </div></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Brand
