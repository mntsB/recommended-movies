import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper/lib/ReactIdSwiper.full";
import "./HorizontalList.scss";
import { Movie } from "../../models/Movie";
import StarIcon from "../../assets/Star_icon.png";
import ArrowRightIcon from "../../assets/Arrow_right_icon.png";
import Divider from "../Divider/Divider";

interface IProps {
  movies: Movie[];
}
const HorizontalList: React.FC<IProps> = ({ movies }) => {
  const [swiper, updateSwiper] = useState<any>(null);

  useEffect(() => {
    console.log(swiper);
    if (swiper) {
      swiper.el.addEventListener("mouseenter", () => swiper.autoplay.stop());
      swiper.el.addEventListener("mouseleave", () => swiper.autoplay.start());
    }
  });

  const truncate = (text: string, n: number): string => {
    if (text.length <= n) {
      return text;
    }
    var subString = text.substr(0, n - 1);
    return subString.substr(0, subString.lastIndexOf(" ")) + "...";
  };

  const movieComponents = movies.map((item, index) => (
    <div key={`movie-${index}`} className="column movieItem">
      <div className="topRow">
        <img
          src={require(`../../assets/movies/${item.image}`)}
          alt={item.title}
          className="poster"
        />
        <div className="column ml-1">
          <span className="title">{item.title}</span>
          <div className="genres">{item.genres.join(", ")}</div>
          <button>
            <img src={ArrowRightIcon} alt="arrow_right" /> more
          </button>
        </div>
      </div>
      <div className="bottomRow mt-1">
        <img className="self-center starIcon" src={StarIcon} alt="star_icon" />
        <span className="self-center rating">{item.rating}</span>
        <Divider vertical />
        <span className="overview self-center">
          {truncate(item.overview, 120)}
        </span>
      </div>
    </div>
  ));
  const params = {
    direction: "horizontal",
    scrollbar: {
      el: ".scrollbar-scrollable",
      draggable: true
    },
    navigation: {
      nextEl: ".swiper-scrollbar-right",
      prevEl: ".swiper-scrollbar-left"
    },
    containerClass: "HorizontalList",
    breakpointsInverse: true,
    lazy: true,
    autoplay: {
      //10 sec in ms
      delay: 10000,
      disableOnInteraction: false
    },
    breakpoints: {
      // when window width is >= 320px
      360: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 855px
      855: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  };
  return (
    <React.Fragment>
      <Swiper
        getSwiper={updateSwiper}
        {...params}
        renderScrollbar={() => (
          <div className="ScrollBar">
            <div className="swiper-scrollbar-left" />
            <div className="scrollbar-scrollable">
              <div className="swiper-scrollbar-drag" />
            </div>
            <div className="swiper-scrollbar-right" />
          </div>
        )}
      >
        {movieComponents}
      </Swiper>
      <div className="oneMovie">
        {movieComponents.length > 0 ? movieComponents[0] : ""}
        <div className="pages">1 ...</div>
      </div>
    </React.Fragment>
  );
};

export default HorizontalList;
