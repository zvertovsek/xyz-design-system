import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { DrawerProps } from "../drawer.types";
import Drawer from "./rsDrawer";

export default {
  title: "Components/Drawer",
  component: Drawer,
} as Meta;

export const RightSideDrawer: StoryFn<DrawerProps> = (args) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Drawer {...args} isOpen={isOpen} changeIsOpen={() => setIsOpen((isOpen) => !isOpen)}>
      some very nice conetnentpins piajtpi gjptaeij goaet ouaehtiou haoueth iouateh aoijgoeir joetih oetiuh oeuthoeuth
      ouehtog uetho uhetou hoeuth
    </Drawer>
  );
};

RightSideDrawer.storyName = "Right side drawer";
