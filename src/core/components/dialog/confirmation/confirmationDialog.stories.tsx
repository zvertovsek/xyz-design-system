import { PrimaryButton } from "@core/components/button";
import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import ConfirmationDialogComponent from "./confirmationDialog";
import { ConfirmationDialogComponentProps } from "./confirmationDialog.types";

export default {
  title: "Components/Dialog",
  component: ConfirmationDialogComponent,
} as Meta;

export const Default: StoryFn<ConfirmationDialogComponentProps> = (args) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div>
      <PrimaryButton onClick={() => setIsVisible(true)} label="Show Confirmation Dialog" />
      <ConfirmationDialogComponent
        {...args}
        isVisible={isVisible}
        onCancel={() => setIsVisible(false)}
        onConfirm={() => {
          setIsVisible(false);
        }}
      />
    </div>
  );
};

Default.args = {
  dialogTitle: "Confirmation required",
  dialogContent: "You are about to delete something, are you sure you want to continue?",
};

Default.storyName = "Confirmation Dialog";
