import { Meta, StoryFn } from "@storybook/react";
import Submenu from "./submenu";
import { SubmenuItemProps } from "./submenu.types";
import { ModuleMain, ModuleAside, ModuleContent } from "@core/components/layout/module";
import { useState } from "react";

export default {
  title: "Components/Submenu",
  component: Submenu,
} as Meta;

const submenu: SubmenuItemProps[] = [
  {
    label: "Overall trend",
    counterLabel: "1",
    id: "0",
    path: "overall",
    isAI: true,
    children: [
      { id: "0.1", label: "Trend 1", counterLabel: "2", path: "trend1" },
      { id: "0.2", label: "Trend 2", path: "trend2" },
    ],
  },
  { label: "Compare teams", id: "1", path: "teams" },
  { label: "Compare case topic in two rows", counterLabel: "3", id: "2", path: "case-topic" },
  { label: "Compare vulnerability", id: "3", path: "vulnerability" },
  { label: "Compare teams", id: "4", path: "teams" },
  { label: "Compare case topic in two rows", counterLabel: "3", id: "5", path: "case-topic" },
  { label: "Compare vulnerability", id: "6", path: "vulnerability" },
];

export const Default: StoryFn = () => {
  const [currentSelections, setCurrentSelections] = useState<string[]>([submenu[0].id]);

  return (
    <ModuleMain>
      <ModuleAside fixContainerHeight={true}>
        <Submenu
          items={submenu}
          currentSelections={currentSelections}
          onItemClickHandler={(item) => setCurrentSelections(item.idsPath)}
        />
      </ModuleAside>
      <ModuleContent>b</ModuleContent>
    </ModuleMain>
  );
};

Default.storyName = "Submenu";
