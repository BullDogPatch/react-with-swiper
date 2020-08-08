import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';

import './styles.css';

function App() {
  const slides = [
    // './assets/patchSwiperImage2.jpg',
    'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
  ];

  const images = slides.map(slide => {
    return (
      <SwiperSlide tag="li">
        <img
          src={`${slide}`}
          style={{ height: '100vh', width: '100%' }}
          alt=""
        />
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        tag="section"
        wrapperTag="ul"
        id="main"
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        {images}
        <SwiperSlide>This is hard to figure out</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
