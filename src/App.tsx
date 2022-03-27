import React from "react";
import Home from "./features/Home";
import Editor from "./features/Editor";
import Styles from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className={Styles.AppContainer}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Editor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
