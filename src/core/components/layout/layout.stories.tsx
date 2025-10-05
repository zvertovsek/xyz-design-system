import { Meta, StoryFn } from "@storybook/react";
import { ModuleHeader } from "./module";
import { ModuleHeaderProps } from "./module/module.types";

export default {
  title: "Layout/Headers",
  component: ModuleHeader,
} as Meta;

const Template: StoryFn<ModuleHeaderProps> = (args) => {
  return <ModuleHeader {...args} />;
};

export const SimpleHeader = Template.bind({});
SimpleHeader.args = {
  pageTitle: "Page Heading",
};
SimpleHeader.storyName = "Simple Header";

export const HeaderWithBreadcrumbs = Template.bind({});
HeaderWithBreadcrumbs.args = {
  pageTitle: "Page Heading",
  breadcrumbItems: [
    { label: "Breadcrumb", onClick: () => console.log("Home clicked") },
    { label: "Breadcrumb", onClick: () => console.log("Subpage clicked") },
  ],
};
HeaderWithBreadcrumbs.storyName = "Header with Breadcrumbs";

export const HeaderWithBacklink = Template.bind({});
HeaderWithBacklink.args = {
  pageTitle: "Page Heading",
  backlink: { label: "Breadcrumb", onClick: () => console.log("Home clicked") },
};
HeaderWithBacklink.storyName = "Header with backlink";
