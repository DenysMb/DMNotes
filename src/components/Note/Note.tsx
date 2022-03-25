import React from "react";
import Styles from "./Note.module.scss";

export type NoteProps = {
  color?:
    | "red"
    | "pink"
    | "purple"
    | "deeppurple"
    | "indigo"
    | "blue"
    | "lightblue"
    | "cyan"
    | "teal"
    | "green"
    | "lightgreen"
    | "lime"
    | "yellow"
    | "amber"
    | "orange"
    | "deeporange"
    | "brown"
    | "grey"
    | "bluegrey";
};

const Note = ({ color = "grey" }: NoteProps) => {
  const borderColor = color[0].toUpperCase() + color.slice(1);

  return (
    <div className={`${Styles.Note} ${Styles["Note" + borderColor]}`}>
      <h3 className={Styles.NoteTitle}>Non excepteur mollit</h3>

      <p className={Styles.NoteBody}>
        Excepteur in commodo deserunt non occaecat anim duis laborum. Cillum
        proident et tempor veniam officia sunt ipsum sunt mollit. Exercitation
        aliqua Lorem voluptate exercitation. Eiusmod ex in consequat ut pariatur
        ipsum voluptate eiusmod. Mollit ullamco esse ex esse. Consequat qui
        cillum quis ad sit culpa eiusmod.
      </p>
    </div>
  );
};

export default Note;
