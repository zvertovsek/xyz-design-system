import { Meta, StoryFn } from "@storybook/react";
import VerticalMenu from ".";
import { VerticalMenuProps } from "./verticalMenu.types";

export default {
  title: "Components/Menus",
  component: VerticalMenu,
} as Meta;

export const Default: StoryFn<VerticalMenuProps> = (args) => {
  return (
    <div style={{ display: "inline-block" }}>
      <VerticalMenu {...args} />
    </div>
  );
};

Default.args = {
  viewState: "closed",
  onMenuItemSelectHandler: () => null,
  itemGroups: [
    {
      key: "1",
      label: "Work",
      items: [
        {
          key: "1.1",
          label: "Find cases",
          icon: "ShopIcon",
          isSelected: true,
          itemPath: "manage",
          children: [
            {
              key: "1.1.1",
              label: "My cases in progress",
              isSelected: false,
              itemPath: "cases",
            },
            {
              key: "1.1.2",
              label: "My assessment outcomes",
              isSelected: false,
              itemPath: "assessment",
            },
          ],
        },
        {
          key: "1.2",
          label: "Assess cases",
          icon: "ListCheckIcon",
          isSelected: false,
          isDisabled: true,
          itemPath: "assess",
        },
        {
          key: "1.3",
          label: "Coach advisers",
          icon: "PeopleIcon",
          isSelected: false,
          itemPath: "coach",
          children: [
            {
              key: "1.3.1",
              label: "My advisers",
              isSelected: false,
              itemPath: "advisers",
            },
            {
              key: "1.3.2",
              label: "My calendar",
              isSelected: false,
              itemPath: "calendar",
            },
            {
              key: "1.3.3",
              label: "Coach inbox",
              isSelected: false,
              itemPath: "coach",
            },
          ],
        },
      ],
    },
    {
      key: "2",
      label: "Monitor",
      items: [
        {
          key: "2.1",
          label: "Business risk",
          icon: "AlertIcon",
          isSelected: false,
          itemPath: "business",
        },
        {
          key: "2.2",
          label: "Revenue",
          icon: "CoinIcon",
          isSelected: false,
          itemPath: "revenue",
        },
        {
          key: "2.3",
          label: "Customer experience",
          icon: "ShopIcon",
          isSelected: false,
          itemPath: "customer",
        },
      ],
    },
    {
      key: "3",
      label: "Manage",
      items: [
        {
          key: "3.1",
          label: "Quality assurance process",
          icon: "ListCheckIcon",
          isSelected: false,
          itemPath: "quality",
        },
        {
          key: "3.2",
          label: "Coaching process",
          icon: "PeopleIcon",
          isSelected: false,
          itemPath: "coaching",
        },
        {
          key: "3.3",
          label: "Platform settings",
          icon: "CogIcon",
          isSelected: false,
          itemPath: "settings",
        },
      ],
    },
  ],
};
Default.storyName = "Vertical Menu";
