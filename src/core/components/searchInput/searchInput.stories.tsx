import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import SearchInput from "./searchInput";
import { SearchInputProps } from "./searchInput.types";

export default {
  title: "Components/SearchInput",
  component: SearchInput,
} as Meta;

const Template: StoryFn<SearchInputProps> = (props) => {
  const [value, setValue] = useState(props.value);
  const [matches, setMatches] = useState(props.matches);

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleClear = () => {
    setMatches(undefined);
  };

  return (
    <SearchInput
      {...props}
      value={value}
      onChange={handleChange}
      onSubmit={() => console.log("submitted")}
      matches={matches}
      onClear={handleClear}
      onMatchChange={(value) => console.log(value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: "",
  matches: 2,
};
export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  value: "",
  placeholder: "Placeholder",
};

export const NoResults = Template.bind({});
NoResults.args = {
  value: "value",
  matches: 0,
};
