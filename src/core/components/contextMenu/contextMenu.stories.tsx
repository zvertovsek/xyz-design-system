import Icons from "@icons";
import { Meta, StoryFn } from "@storybook/react";
import { useRef } from "react";
import { SecondaryButton } from "../button";
import Layout from "../layout";
import ContextMenu from "./contextMenu";
import { ContextMenuProps, ContextMenuRef } from "./contextMenu.types";

export default {
  title: "Components/ContextMenu",
  component: ContextMenu,
} as Meta;

export const Default: StoryFn<ContextMenuProps> = (props) => {
  const ref = useRef<ContextMenuRef>(null);

  return (
    <Layout.FlexboxContainer justifyContent="flex-start">
      <SecondaryButton onClick={(e) => ref.current?.show(e)} icon={Icons.ShareIcon} label="click" />
      <ContextMenu {...props} ref={ref} />
    </Layout.FlexboxContainer>
  );
};

Default.storyName = "Context Menu";
Default.args = {
  items: [
    {
      label: "Copy as image",
      icon: Icons.CopyIcon,
    },
    {
      label: "Send via email",
      icon: Icons.OpenInNewIcon,
    },
  ],
};
