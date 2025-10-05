import Icons, { IconSize } from "@icons";
import { Meta, StoryFn } from "@storybook/react";
import { JSONContent } from "@tiptap/react";
import { useState } from "react";
import { FloatingTextEditor } from ".";
import FloatingNote from "./floatingTextEditor";
import { FloatingTextEditorProps } from "./floatingTextEditor.types";

export default {
  title: "Components/FloatingTextEditor",
  component: FloatingTextEditor,
} as Meta;

export const Default: StoryFn<FloatingTextEditorProps> = (args) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [value, setValue] = useState<JSONContent>();

  return (
    <div>
      <button onClick={() => setIsVisible(true)}>
        <Icons.DocumentIcon size={IconSize.md} />
      </button>
      <FloatingNote
        {...args}
        onChangeHandler={(document) => setValue(document.json)}
        value={value}
        onHide={() => setIsVisible(false)}
        isVisible={isVisible}
      />
    </div>
  );
};

Default.args = {
  description:
    "Make notes for your own reference. Notes are attached to the assessment and are not provided to the adviser.",
  placeholder: "Case notes...",
};

Default.storyName = "FloatingTextEditor";
