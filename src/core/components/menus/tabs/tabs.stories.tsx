import { Trend } from "@core/components/trend";
import Typography from "@core/components/typography";
import { Meta, StoryFn } from "@storybook/react";
import { defaultTheme } from "@theme";
import React from "react";
import Tabs from "./tabs";
import { TabProps } from "./tabs.types";

export default {
  title: "Components/Tabs",
  component: Tabs,
} as Meta;

const tabs: TabProps[] = [
  {
    label: "Complaints",
    key: "0",
    isAI: true,
    description: <Typography.B2 color={defaultTheme.colorPalettes.primary.ai[700]}>other text</Typography.B2>,
  },
  {
    label: "Case Assessment",
    key: "1",
    isAI: true,
    description: <Trend label="20% past month" direction="up" severity="positive" />,
  },
  {
    label: "Complaints",
    key: "2",
    isAI: false,
    description: <Typography.B2 color={defaultTheme.colorPalettes.secondary.color2[900]}>other text</Typography.B2>,
  },
  {
    label: "Vulnerable customers",
    key: "3",
    isAI: false,
    description: <Trend label="-5% this month" direction="down" severity="negative" />,
  },
  { label: "Adviser manner", key: "4" },
  { label: "Adviser knowledge", key: "5" },
  { label: "Adviser manner", key: "6" },
  { label: "Adviser knowledge", key: "7" },
  { label: "Adviser manner", key: "8" },
  { label: "Adviser knowledge", key: "9" },
  { label: "Adviser manner", key: "10" },
];

export const Default: StoryFn = () => {
  const [currentTabKey, setCurrentTabKey] = React.useState<string>("0");
  return (
    <div style={{ padding: "10px", background: "#efefef" }}>
      <Tabs
        items={tabs}
        onChangeHandler={(key: string) => setCurrentTabKey(key)}
        currentlySelectedTab={currentTabKey}
      />
      <div style={{ padding: "20px" }}>Current Tab key {currentTabKey}</div>
    </div>
  );
};

Default.storyName = "Tabs";
