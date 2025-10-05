export interface ConfirmationDialogComponentProps {
  /**
   * Specifies the visibility of the dialog.
   */
  isVisible: boolean;
  /**
   * Specifies the processing status of the modal.
   */
  isLoading?: boolean;
  /**
   * Specifies the title of the dialog.
   */
  dialogTitle: string;
  /**
   * Specifies the body content of the dialog.
   */
  dialogContent: React.ReactNode;
  /**
   * Specifies the handler to execute on confirm dialog.
   */
  onConfirm: () => void;
  /**
   * Specifies the handler to execute on cancel closing dialog.
   */
  onCancel: () => void;
}
