import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import Styles from "./Editor.module.scss";
import { Editor as RDWEditor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw, EditorState } from "draft-js";
import {
  colors,
  toolbarOptionsDesktop,
  toolbarOptionsMobile,
} from "../../shared/constants";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import draftToHtml from "draftjs-to-html";

const Editor = () => {
  const { width } = useWindowDimensions();
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const navigate = useNavigate();
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

  return (
    <div className={`${Styles.Editor} ${Styles["Editor" + color]}`}>
      <div className={Styles.EditorHeader}>
        <div className={Styles.EditorHeaderActions}>
          <div className={Styles.EditorHeaderActionsBack} onClick={handleBack}>
            <Icon name="chevron-left" />
            <p>Back</p>
          </div>

          <div className={Styles.EditorHeaderActionsTitle}>
            <input type="text" placeholder="No title" />
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
        <Button
          label="Save"
          color={color}
          fullWidth
          onClick={() => {
            console.log(
              "Note",
              draftToHtml(convertToRaw(editorState.getCurrentContent()))
            );
          }}
        />
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
