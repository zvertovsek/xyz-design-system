import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import styled from "styled-components";

import InputText from "./inputText";
import { InputTextProps } from "./inputText.types";

export default {
  title: "Components/InputText",
  component: InputText,
} as Meta;

const Container = styled.div`
  width: 400px;
`;

export const Default: StoryFn<InputTextProps> = (props) => {
  const [value, setValue] = useState<string>("");

  return (
    <Container>
      <InputText {...props} value={value} onChange={(e) => setValue(e.target.value)} />
    </Container>
  );
};

Default.args = {
  label: "Description",
};
