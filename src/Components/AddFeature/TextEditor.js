import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
const TextEditor = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  return (
    <div>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
};

export default TextEditor;
