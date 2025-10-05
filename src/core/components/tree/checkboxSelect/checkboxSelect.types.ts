import { TreeViewModel } from "../tree.types";

export interface CheckboxSelectViewModel extends TreeViewModel {
  /**
   * Label to be used for the select all button.
   */
  selectNoneLabel?: string;
  /**
   * Label to be used for the select all button.
   */
  selectAllLabel?: string;
  /**
   * Callback to invoke when a selection change.
   */
  onSelectionChange: (keys: string[]) => void;
  /**
   * Callback to invoke when the select all button has been clicked.
   */
  onSelectAll?: () => void;
  /**
   * Callback to invoke when the select none button has been clicked.
   */
  onSelectNone?: () => void;
}
