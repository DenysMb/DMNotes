import React from "react";
import Header from "./components/Header";
import Home from "./features/Home";
import Styles from "./App.module.scss";

const App = () => {
  return (
    <div className={Styles.AppContainer}>
      <Header />
      <Home />
    </div>
  );
};

export default App;
