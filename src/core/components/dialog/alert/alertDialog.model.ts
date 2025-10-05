export interface AlertDialogProps {
  /**
   * Specifies the visibility of the dialog.
   */
  isVisible: boolean;
  /**
   * Specifies the title of the dialog.
   */
  dialogTitle: string;
  /**
   * Specifies the body content of the dialog.
   */
  dialogContent: React.ReactNode;
  /**
   * Specifies the label of the dialog button.
   */
  buttonLabel?: string;
  /**
   * Specifies the handler to execute on confirm dialog.
   */
  onConfirm: () => void;
}
