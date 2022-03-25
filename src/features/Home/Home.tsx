import React from "react";
import Note from "../../components/Note";
import { NoteProps } from "../../components/Note/Note";
import Styles from "./Home.module.scss";

const colors = [
  "red",
  "pink",
  "purple",
  "deeppurple",
  "indigo",
  "blue",
  "lightblue",
  "cyan",
  "teal",
  "green",
  "lightgreen",
  "lime",
  "yellow",
  "amber",
  "orange",
  "deeporange",
  "brown",
  "grey",
  "bluegrey",
] as NoteProps["color"][];

const Home = () => {
  return (
    <div className={Styles.Home}>
      <div className={Styles.HomeNotes}>
        {colors.map((color) => (
          <Note color={color} key={color} />
        ))}
      </div>
    </div>
  );
};

export default Home;
