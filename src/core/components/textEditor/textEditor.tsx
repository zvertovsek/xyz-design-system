import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MenuBar } from "./menuBar";
import { ContainerWrapper } from "./textEditor.styles";
import { TextEditorProps } from "./textEditor.types";

export const TextEditor: React.FC<TextEditorProps> = ({ value, onChange, placeholder, isEditable = true }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: placeholder,
      }),
      Underline,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange?.({
        text: editor.getText(),
        html: editor.getHTML(),
        json: editor.getJSON(),
      });
    },
    editable: isEditable,
  });

  if (!editor) {
    return null;
  }

  return (
    <ContainerWrapper isEditorDisabled={!isEditable}>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} data-testid="text-editor" style={{ overflowY: "auto", flexGrow: 1 }} />
    </ContainerWrapper>
  );
};

export default TextEditor;
