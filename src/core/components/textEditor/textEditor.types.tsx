import { JSONContent } from "@tiptap/react";

export interface TextEditorProps {
  /**
   * Value of the text editor.
   */
  value: JSONContent | string | undefined;
  /**
   * handler to run when the value on the text editor has changed.
   */
  onChange?: (document: Document) => void;
  /**
   * placeholder to show when there is no text in the editor.
   */
  placeholder?: string;
  /**
   * flag that indicates whether the editor should be editable or not.
   */
  isEditable?: boolean;
}

export interface Document {
  /**
   * Value of the document as plain text.
   */
  text: string;
  /**
   * Value of the document as html.
   */
  html: string;
  /**
   * Value of the document as json.
   */
  json: JSONContent;
}
