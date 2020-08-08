import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './styles.css';
import Header from './components/Header';

SwiperCore.use([Navigation, Pagination]);

function App() {
  const slides = [
    './images/patchSwiperImage.jpg',
    './images/patchSwiperImage1.jpg',
    './images/patchSwiperImage2.jpg',
    './images/patchSwiperImage3.jpg',
    './images/patchSwiperImage4.jpg',
    './images/patchSwiperImage5.jpg'
  ];

  const images = slides.map(slide => {
    return (
      <>
        <SwiperSlide tag="li">
          <img
            src={`${slide}`}
            style={{ height: '60vh', width: '100%' }}
            alt=""
          />
        </SwiperSlide>
      </>
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

export default App;
