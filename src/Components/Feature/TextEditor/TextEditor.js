import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function TextEditor({ data, editorRef }) {
  return (
    <>
      <Editor
        apiKey="m0qyu8y1cjv5jxkqxwm7iqozmqhdcrob3qhtkovggq7pcxqa"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={data}
        init={{
          height: 300,

          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
}
