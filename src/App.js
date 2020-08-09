import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';
import './styles.css';
import Nav from './components/nav/Nav';
// import Header from "./components/header/Header";
import Home from './components/home/Home';
import About from './components/about/About';

// SwiperCore.use([Navigation, Pagination]);

function App() {
  return (
    <div className="app-wrapper">
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
