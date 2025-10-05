import { PrimaryButton } from "@core/components/button";
import { Modal } from "@core/components/modal";
import { DialogContentWrapper, DialogFooterWrapper } from "../dialog.styles";
import { AlertDialogProps } from "./alertDialog.model";

export const AlertDialogComponent: React.FC<AlertDialogProps> = ({
  isVisible,
  dialogTitle,
  dialogContent,
  buttonLabel = "OK",
  onConfirm,
}) => {
  const renderContent = () => {
    return <DialogContentWrapper data-testid="alertDialogComponent-content">{dialogContent}</DialogContentWrapper>;
  };

  const renderFooter = () => {
    return (
      <DialogFooterWrapper data-testid="alertDialogComponent-footer">
        <PrimaryButton label={buttonLabel} onClick={onConfirm} />
      </DialogFooterWrapper>
    );
  };

  return (
    <Modal
      vm={{
        headerTitle: dialogTitle,
        isVisible: isVisible,
        content: renderContent(),
        footer: renderFooter(),
        type: "dialog",
      }}
    />
  );
};

export default AlertDialogComponent;
