import React from "react";
import draftToHtml from "draftjs-to-html";
import { useNavigate } from "react-router-dom";
import { NoteProps } from "../../hooks/useNotes";
import Styles from "./Note.module.scss";
import { parseDate } from "../../shared/utils";

type NoteComponentProps = Omit<NoteProps, "user">;

const Note = ({ data }: { data: NoteComponentProps }) => {
  const { id, title, note, color = "GREY", createdAt, updatedAt } = data;
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

      <p
        className={`${Styles.NoteBody} ${Styles["NoteBody" + color]}`}
        dangerouslySetInnerHTML={{ __html: draftToHtml(JSON.parse(note!)) }}
      />

      <div className={`${Styles.NoteFooter} ${Styles["NoteFooter" + color]}`}>
        <p className={Styles.NoteFooterCreated}>
          Created at: <span>{parseDate(createdAt)}</span>
        </p>
        <p className={Styles.NoteFooterUpdated}>
          Updated at: <span>{parseDate(updatedAt)}</span>
        </p>
      </div>
    </div>
  );
};

export default Note;
