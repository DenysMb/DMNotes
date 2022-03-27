import React from "react";
import { colors } from "../../shared/constants";
import Styles from "./Note.module.scss";

export type NoteProps = {
  color?: typeof colors[number]
};

const Note = ({ color = "GREY" }: NoteProps) => {
  return (
    <div className={`${Styles.Note} ${Styles["Note" + color]}`}>
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
