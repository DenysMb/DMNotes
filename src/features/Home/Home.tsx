import React from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Note from "../../components/Note";
import SearchBar from "../../components/SearchBar";
import Styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import { colors } from "../../shared/constants";

const Home = () => {
  const navigate = useNavigate();

  const handleNewNote = () => {
    navigate("/new", { replace: true });
  };

  return (
    <div className={Styles.Home}>
      <Header />
      <SearchBar />
      <div className={Styles.HomeNotes}>
        {colors.map((color) => (
          <Note color={color} key={color} />
        ))}
      </div>
      <Button
        icon={"plus"}
        label="Create note"
        onClick={handleNewNote}
        fullWidth
      />
    </div>
  );
};

export default Home;
