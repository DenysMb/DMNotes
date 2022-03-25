import React from "react";
import Header from "./components/Header";
import Home from "./features/Home";
import Styles from "./App.module.scss";
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";

const App = () => {
  return (
    <div className={Styles.AppContainer}>
      <Header />
      <SearchBar />
      <Home />
      <Button icon={"➕"} />
    </div>
  );
};

export default App;
