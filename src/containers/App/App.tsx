import React from "react";
import "./App.scss";
import Header from "../../components/Header/Header";
import Divider from "../../components/Divider/Divider";
import HorizontalList from "../../components/HorizontalList/HorizontalList";
import { movies } from "../../movies";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Divider />
      <HorizontalList movies={movies} />
    </div>
  );
};

export default App;
