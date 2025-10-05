import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { DrawerProps } from "../drawer.types";
import Drawer from "./lsDrawer";

export default {
  title: "Components/Drawer",
  component: Drawer,
} as Meta;

export const LeftSideDrawer: StoryFn<DrawerProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  return (
    <div style={{ width: "100%", height: "100%", background: "#eee" }}>
      <Drawer {...args} isOpen={isOpen} changeIsOpen={() => setIsOpen((isOpen) => !isOpen)} />
    </div>
  );
};

LeftSideDrawer.storyName = "Left side drawer";
