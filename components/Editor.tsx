"use client";

import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";

import { useTheme } from "next-themes";
import "@blocknote/react/style.css";
import { PartialBlock, BlockNoteEditor } from "@blocknote/core";
import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
  onChange: (value: string) => void;
  initalContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initalContent, editable }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });

    return response.url;
  };

  const editor = useCreateBlockNote({
    initialContent: initalContent
      ? (JSON.parse(initalContent) as PartialBlock[])
      : undefined,
    uploadFile: handleUpload,
  });

  editor.onEditorContentChange(() => onChange(JSON.stringify(editor.document)));

  return (
    <BlockNoteView
      editor={editor}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      onChange={() => console.log}
    />
  );
};

export default Editor;
