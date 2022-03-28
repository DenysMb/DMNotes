import React from "react";
import { useNavigate } from "react-router-dom";
import { NoteProps } from "../../hooks/useNotes";
import Styles from "./Note.module.scss";

type NoteComponentProps = Omit<NoteProps, "user">;

const Note = ({ id, title, note, color = "GREY" }: NoteComponentProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/" + id, { replace: true });
  };

  return (
    <div
      className={`${Styles.Note} ${Styles["Note" + color]}`}
      onClick={handleClick}
    >
      <h3 className={Styles.NoteTitle}>{title}</h3>

      <p className={Styles.NoteBody}>{note}</p>
    </div>
  );
};

export default Note;
