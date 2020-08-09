import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Header from '../header/Header';

SwiperCore.use([Navigation, Pagination]);
function Home() {
  const slides = [
    {
      id: 1,
      src: './images/patchSwiperImage.jpg'
    },
    {
      id: 2,
      src: './images/patchSwiperImage1.jpg'
    },
    {
      id: 3,
      src: './images/patchSwiperImage2.jpg'
    },
    {
      id: 4,
      src: './images/patchSwiperImage3.jpg'
    },
    {
      id: 5,
      src: './images/patchSwiperImage4.jpg'
    },
    {
      id: 6,
      src: './images/patchSwiperImage5.jpg'
    }
  ];

  const images = slides.map(slide => {
    return (
      <SwiperSlide key={slide.id} tag="li">
        <img src={slide.src} style={{ height: '60vh', width: '100%' }} alt="" />
      </SwiperSlide>
    );
  });
  return (
    <>
      <Header />
      <Swiper
        tag="section"
        wrapperTag="ul"
        id="main"
        navigation
        pagination
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        {images}
      </Swiper>
    </>
  );
}

export default Home;
