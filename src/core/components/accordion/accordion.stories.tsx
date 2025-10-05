import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import Accordion from "./accordion";
import { AccordionProps } from "./accordion.types";
import { AccordionTab } from "./accordionTab";

export default {
  title: "Components/Accordion",
  component: Accordion,
} as Meta;

export const Default: StoryFn<AccordionProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState<number>(props.activeIndex || 0);

  return (
    <div style={{ width: "400px" }}>
      <Accordion
        {...props}
        activeIndex={activeIndex}
        onTabChange={(index) => setActiveIndex((activeIndex) => (index === activeIndex ? -1 : index))}
      >
        <AccordionTab header="First Tab">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </AccordionTab>
        <AccordionTab header="Second Tab">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </AccordionTab>
      </Accordion>
    </div>
  );
};

Default.storyName = "Accordion";
