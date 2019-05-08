import React from "react";
import "./Header.scss";
import ImdbIcon from "../../assets/IMDb_icon.png";
import MovieIcon from "../../assets/Movie_icon.png";

const Header: React.FC = () => {
  return (
    <div className="header">
      <img src={ImdbIcon} alt="imdb_icon" />
      <span>Recommends</span>
      <img src={MovieIcon} alt="movie_icon" />
      <span>MOVIES</span>
    </div>
  );
};

export default Header;
