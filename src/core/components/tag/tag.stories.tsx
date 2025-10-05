import Icons from "@icons";
import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

import Tag from "./tag";
import { TagProps } from "./tag.types";

export default {
  title: "Components/Tag",
  component: Tag,
} as Meta;

export const Default: StoryFn<TagProps> = (props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return <Tag {...props} isSelected={isSelected} onClick={() => setIsSelected(true)} />;
};

Default.args = {
  label: "Adviser Team",
  id: "idTag",
  icon: Icons.SentimentSatisfiedIcon,
};
Default.storyName = "Tag";
