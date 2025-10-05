import { PrimaryButton } from "@core/components/button";
import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import AlertDialogComponent from "./alertDialog";
import { AlertDialogProps } from "./alertDialog.model";

export default {
  title: "Components/Dialog",
  component: AlertDialogComponent,
} as Meta;

export const AlertDialog: StoryFn<AlertDialogProps> = (args) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div>
      <PrimaryButton onClick={() => setIsVisible(true)} label="Show Alert Dialog" />
      <AlertDialogComponent
        {...args}
        isVisible={isVisible}
        onConfirm={() => {
          setIsVisible(false);
        }}
      />
    </div>
  );
};

AlertDialog.args = {
  dialogTitle: "Alert dialog",
  dialogContent: "Your changes have been saved successfully.",
};

AlertDialog.storyName = "Alert Dialog";
