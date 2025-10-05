import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import Panel from "./panel";
import { PanelProps } from "./panel.types";

export default {
  title: "Components/Panel",
  component: Panel,
} as Meta;

const Default: StoryFn<PanelProps> = ({ children, header, isExpanded, ...args }) => {
  const [expanded, setExpanded] = useState(isExpanded);
  return (
    <Panel {...args} header={header} isExpanded={expanded} onExpandToggle={() => setExpanded(!expanded)}>
      {children}
    </Panel>
  );
};

export const PanelBase = Default.bind({});

PanelBase.storyName = "Panel";
PanelBase.args = {
  children: (
    <div style={{ textAlign: "center", width: "500px", height: "300px", backgroundColor: "yellow" }}>Panel</div>
  ),
  header: <span>textHeader</span>,
  toggleable: true,
  isHeaderClickable: true,
};
PanelBase.argTypes = {
  header: {
    options: ["highHeader", "none", "textHeader"],
    mapping: {
      highHeader: <div style={{ height: "100px", backgroundColor: "cyan" }}>High header</div>,
      none: undefined,
      textHeader: <span>textHeader</span>,
    },
    control: {
      type: "select",
    },
  },
};
