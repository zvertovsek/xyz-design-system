import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../button";
import { Submenu } from "../menus/submenu";
import Modal from "./modal";
import { ComponentProps, ModalViewModel } from "./modal.types";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

const getContentModal = (): JSX.Element => {
  return (
    <div style={{ backgroundColor: "white", minHeight: "inherit" }}>
      <div style={{ width: "30%" }}>
        <Submenu
          items={[
            {
              label: "Overall trend",
              counterLabel: "1",
              id: "0",
              path: "overall",
              children: [
                { id: "0.1", label: "Trend 1", counterLabel: "2", path: "trend1" },
                { id: "0.2", label: "Trend 2", path: "trend2" },
              ],
            },
            { label: "Compare teams", id: "1", path: "teams" },
            { label: "Compare case topic in two rows", counterLabel: "3", id: "2", path: "case-topic" },
            { label: "Compare vulnerability", id: "3", path: "vulnerability" },
          ]}
          onItemClickHandler={() => null}
          currentSelections={[]}
        />
      </div>
    </div>
  );
};

const getFooterModal = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        gap: "0.5rem",
        justifyContent: "flex-end",
        margin: "0 1rem",
      }}
    >
      <SecondaryButton label="RESTORE DEFAULTS" />
      <PrimaryButton label="APPLY" />
    </div>
  );
};

export const Default: StoryFn<ComponentProps<ModalViewModel>> = (props) => {
  const [isVisible, setIsVisible] = useState<boolean>(props.vm.isVisible);

  props.vm.isVisible = isVisible;
  props.vm.onHide = () => setIsVisible(false);

  return (
    <div>
      <PrimaryButton onClick={() => setIsVisible(true)} label="Show modal" />
      <Modal {...props} />
    </div>
  );
};

const args: ModalViewModel = {
  isVisible: false,
  headerTitle: "Title Modal",
  onHide: () => null,
  content: getContentModal(),
  footer: getFooterModal(),
};

Default.args = {
  vm: args,
};
Default.storyName = "Modal";
