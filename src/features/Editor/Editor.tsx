import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import Styles from "./Editor.module.scss";
import { Editor as RDWEditor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ContentState, convertToRaw, EditorState } from "draft-js";
import {
  colors,
  toolbarOptionsDesktop,
  toolbarOptionsMobile,
} from "../../shared/constants";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import draftToHtml from "draftjs-to-html";
import useNote from "../../hooks/useNote";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import Loading from "../../components/Loading";
import { save } from "../../shared/utils";

const Editor = () => {
  const [user] = useAuthState(auth);
  const { width } = useWindowDimensions();
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id ? parseInt(params.id) : 0;
  const { note, loading } = useNote(id);
  const [title, setTitle] = useState("");
  const [color, setColor] = useState(randomColor);
  const [showColors, setShowColors] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const toolbarOptions = useMemo(
    () => (width > 600 ? toolbarOptionsDesktop : toolbarOptionsMobile),
    [width]
  );

  const handleShowColors = () => {
    setShowColors(!showColors);
  };

  const handleBack = () => {
    navigate("/", { replace: true });
  };

  const handleSaveNote = () => {
    const text = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const result = {
      user: user?.uid,
      id,
      color,
      title,
      note: text,
    };

    save("notes", result);
  };

  useEffect(() => {
    setTitle(note?.title || "");
    setColor(note?.color || randomColor);
    setEditorState(
      EditorState.createWithContent(
        ContentState.createFromText(note?.note || "")
      )
    );
  }, [note]);

  useEffect(() => {
    if (!user) return navigate("/login");
  }, [user]);

  return (
    <div className={`${Styles.Editor} ${Styles["Editor" + color]}`}>
      <Loading show={loading} />

      <div className={Styles.EditorHeader}>
        <div className={Styles.EditorHeaderActions}>
          <div className={Styles.EditorHeaderActionsBack} onClick={handleBack}>
            <Icon name="chevron-left" />
            <p>Back</p>
          </div>

          <div className={Styles.EditorHeaderActionsTitle}>
            <input
              type="text"
              placeholder="No title"
              value={title}
              onChange={(element) => setTitle(element.target.value)}
            />
          </div>

          <div
            className={Styles.EditorHeaderActionsShowColors}
            onClick={handleShowColors}
          >
            <p>Show colors</p>
            <Icon name="align-center" />
          </div>
        </div>

        {showColors && (
          <div className={Styles.EditorHeaderColors}>
            {colors.map((c) => (
              <EditorColorTag
                active={color === c}
                color={c}
                key={c}
                handleClick={() => setColor(c)}
              />
            ))}
          </div>
        )}
      </div>

      <div className={Styles.EditorBody}>
        <RDWEditor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          toolbarClassName={Styles.RDWEditorToolbar}
          wrapperClassName={Styles.RDWEditorWrapper}
          editorClassName={Styles.RDWEditorEditor}
          toolbar={toolbarOptions}
        />
      </div>

      <div className={Styles.EditorButton}>
        <Button label="Save" color={color} fullWidth onClick={handleSaveNote} />
      </div>
    </div>
  );
};

const EditorColorTag = ({
  active,
  color,
  handleClick,
}: {
  active?: boolean;
  color: string;
  handleClick?: () => void;
}) => {
  return (
    <div
      className={`${Styles.EditorColorTag} ${
        Styles["EditorColorTag" + color]
      } ${active ? Styles.EditorColorTagActive : ""}`}
      onClick={handleClick}
    />
  );
};

export default Editor;
