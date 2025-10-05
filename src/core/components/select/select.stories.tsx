import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import SelectComponent from "./select";
import { OptionModel, SelectComponentProps } from "./select.types";

const options: OptionModel[] = [
  { id: "1", label: "Disabled Option" },
  {
    id: "2",
    label:
      "Lynxlyn, Zephyria, Aerowyn, Embera, Thalara, Driftwood, Silvershade, and Quicksilver are characters in the fantasy club team created in 2022.",
  },
  {
    id: "3",
    label: "United States, Canada, Mexico, (Brazil), Argentina, Germany, France, (United Kingdom), China, and Japan",
  },
  {
    id: "4",
    label: "International World cup match",
  },
  {
    id: "5",
    label:
      "Engineering, Product Management, Design, QA, Customer Support, Sales, Marketing, Operations, Data Science, IT, HR, Finance",
  },
  {
    id: "6",
    label: "xyz TEAM",
  },
  {
    id: "7",
    label:
      "England (London, Manchester, Birmingham, Liverpool, Leeds, Bristol), Scotland (Edinburgh, Glasgow, Aberdeen), Wales (Cardiff, Swansea, Newport), Northern Ireland (Belfast, Derry/Londonderry)",
  },
];

export default {
  title: "Components/Select",
  component: SelectComponent,
} as Meta;

export const Default: StoryFn<SelectComponentProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState<OptionModel>();
  return (
    <div style={{ width: "300px" }}>
      <SelectComponent
        {...props}
        options={options}
        onSelect={(option) => {
          setSelectedOption(option);
        }}
        placeholder={"Select vulnerability type"}
        disabledOptions={["1"]}
        selectedOptionId={selectedOption?.id}
      />
    </div>
  );
};

Default.storyName = "Select";
