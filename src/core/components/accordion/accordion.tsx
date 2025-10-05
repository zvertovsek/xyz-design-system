import React from "react";
import AccordionContext from "./accordion.context";
import { AccordionProps } from "./accordion.types";

export const Accordion: React.FC<AccordionProps> = ({ children, ...props }) => {
  return (
    <AccordionContext.Provider value={props}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, { index });
        }

        return child;
      })}
    </AccordionContext.Provider>
  );
};

export default Accordion;
