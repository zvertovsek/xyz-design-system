import { Meta, StoryFn } from "@storybook/react";
import { JSONContent } from "@tiptap/react";
import { useState } from "react";
import styled from "styled-components";

import TextEditor from "./textEditor";
import { TextEditorProps } from "./textEditor.types";

export default {
  title: "Components/TextEditor",
  component: TextEditor,
} as Meta;

const Container = styled.div`
  width: 600px;
`;

export const Default: StoryFn<TextEditorProps> = (props) => {
  const [value, setValue] = useState<JSONContent>();

  return (
    <Container>
      <TextEditor {...props} value={value} onChange={(document) => setValue(document.json)} />
    </Container>
  );
};

Default.args = {
  placeholder: "This is a placeholder",
};
Default.storyName = "TextEditor";
