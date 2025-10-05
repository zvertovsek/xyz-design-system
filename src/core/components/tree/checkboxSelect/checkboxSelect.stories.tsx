import { Meta, StoryFn } from "@storybook/react";
import CheckboxSelect from "./checkboxSelect";
import { TreeNode } from "../tree.types";
import { flatten, unflatten } from "flat";
import { useState } from "react";
import { CheckboxSelectViewModel } from "./checkboxSelect.types";
import { ComponentProps } from "@core/components/components.types";

export default {
  title: "Components/Tree",
  component: CheckboxSelect,
  argTypes: {
    vm: {
      table: { disable: true },
    },
  },
} as Meta;

const Template: StoryFn<ComponentProps<CheckboxSelectViewModel>> = (props) => {
  const args: ComponentProps<CheckboxSelectViewModel> = unflatten(props);
  const [selectedKeys, setSelectedKeys] = useState(args.vm.selectedKeys);
  const [expandedKeys, setExpandedKeys] = useState(args.vm.expandedKeys);

  const getUpdatedKeys = (key: string, keys: string[]) => {
    const newKeys = [...keys];
    const index = newKeys.findIndex((nodeKey) => nodeKey === key);

    if (index === -1) {
      newKeys.push(key);
    } else {
      newKeys.splice(index, 1);
    }

    return newKeys;
  };

  const getAllKeys = (nodes: TreeNode[]) => {
    const keys: string[] = [];
    nodes.forEach((node) => {
      keys.push(node.key);
      if (node.children?.length) {
        keys.push(...getAllKeys(node.children));
      }
    });

    return keys;
  };

  args.vm.onExpandChange = (key: string) => setExpandedKeys(getUpdatedKeys(key, expandedKeys));
  args.vm.onSelectionChange = (keys: string[]) => setSelectedKeys(keys);
  args.vm.onSelectAll = () => setSelectedKeys(getAllKeys(args.vm.options));
  args.vm.onSelectNone = () => setSelectedKeys([]);
  args.vm.selectedKeys = selectedKeys;
  args.vm.expandedKeys = expandedKeys;

  return <CheckboxSelect {...args} />;
};

export const Default = Template.bind({});

const args: CheckboxSelectViewModel = {
  options: [
    {
      key: "1",
      label: "Capability",
      children: [
        {
          key: "1-1",
          label: "Low confidence financial matters",
          children: [
            {
              key: "1-1-1",
              label: "item 1.1.1",
            },
            {
              key: "1-1-2",
              label: "item 1.1.2",
            },
          ],
        },
        {
          key: "1-2",
          label: "item 1.2",
        },
      ],
    },
    {
      key: "2",
      label: "Health",
      children: [
        {
          key: "2-1",
          label: "Item 2.1",
        },
      ],
    },
    {
      key: "3",
      label: "Life events",
      children: [
        {
          key: "3-1",
          label: "Item 1.1",
        },
      ],
    },
  ],
  selectedKeys: [],
  expandedKeys: [],
  selectAllLabel: "Select all",
  selectNoneLabel: "Select none",
  onExpandChange: () => null,
  onSelectionChange: () => null,
  onSelectAll: () => null,
  onSelectNone: () => null,
};

Default.args = flatten({
  vm: args,
});
Default.storyName = "CheckboxSelect";
