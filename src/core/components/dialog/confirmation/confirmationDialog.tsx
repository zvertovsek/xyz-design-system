import { PrimaryButton, SecondaryButton } from "@core/components/button";
import { Modal } from "@core/components/modal";
import { VerticalSpacer } from "@core/components/spacer";
import { Spinner } from "@core/components/spinner";
import { useTheme } from "styled-components";
import { DialogContentWrapper, DialogFooterWrapper } from "../dialog.styles";
import { ConfirmationDialogComponentProps } from "./confirmationDialog.types";

export const ConfirmationDialogComponent: React.FC<ConfirmationDialogComponentProps> = ({
  isVisible,
  isLoading,
  dialogTitle,
  dialogContent,
  onConfirm,
  onCancel,
}) => {
  const { spacing } = useTheme();

  const renderContent = () => {
    return (
      <DialogContentWrapper>
        {isLoading ? (
          <>
            <VerticalSpacer size={spacing[2]} />
            <Spinner />
          </>
        ) : (
          dialogContent
        )}
      </DialogContentWrapper>
    );
  };

  const renderFooter = () => {
    return (
      <DialogFooterWrapper>
        <SecondaryButton label="CANCEL" onClick={onCancel} />
        <PrimaryButton label="CONFIRM" onClick={onConfirm} isInactive={isLoading} />
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

export default ConfirmationDialogComponent;
