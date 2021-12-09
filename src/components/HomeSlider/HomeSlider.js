import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./HomeSlider.module.css";

import Slider from "react-slick";
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronLeft } from "react-icons/vsc";

function NextArrow(props) {
  return (
    <div className={styles.homeSlider__nextSlide} onClick={props.onClick}>
      <VscChevronRight />
    </div>
  );
}

function PrevArrow(props) {
  return (
    <div className={styles.homeSlider__prevSlide} onClick={props.onClick}>
      <VscChevronLeft />
    </div>
  );
}

function HomeSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <Slider {...settings} className={styles.homeSlider__slider}>
        <img
          className={styles.homeSlider__image}
          src="https://m.media-amazon.com/images/I/51upXzq22FL._SX1500_.jpg"
          alt="Home"
        />

        <img
          className={styles.homeSlider__image}
          src="https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg"
          alt="Home"
        />

        <img
          className={styles.homeSlider__image}
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt="Home"
        />

        <img
          className={styles.homeSlider__image}
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt="Home"
        />

        <img
          className={styles.homeSlider__image}
          src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
          alt="Home"
        />

        <img
          className={styles.homeSlider__image}
          src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
          alt="Home"
        />
      </Slider>
    </div>
  );
}

export default HomeSlider;
