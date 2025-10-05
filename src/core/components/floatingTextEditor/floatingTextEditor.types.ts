import { Document } from "@core/components/textEditor/textEditor.types";
import { JSONContent } from "@tiptap/react";

export interface FloatingTextEditorProps {
  /**
   * Specifies the visibility of the text editor.
   */
  isVisible: boolean;
  /**
   * Value of the text editor.
   */
  value: JSONContent | string | undefined;
  /**
   * handler to run when the value on the text editor has changed.
   */
  onChangeHandler: (document: Document) => void;
  /**
   * placeholder to show when there is no text in the editor.
   */
  placeholder: string;
  /**
   * Description of the text editor.
   */
  description: string;
  /**
   * Initial position of the text editor box.
   */
  initialBoxPosition?: BoxPosition;
  /**
   * flag that indicates whether the editor should be editable or not.
   */
  isEditable?: boolean;
  /**
   * Callback to invoke text editor is hidden.
   */
  onHide?: () => void;
}

export interface CoordinatesRef {
  diffX: number;
  diffY: number;
}

export interface BoxPosition {
  left: number;
  top: number;
}
