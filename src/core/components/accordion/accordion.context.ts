import React from "react";
import { AccordionContextProps } from "./accordion.types";

const defaultState: AccordionContextProps = {
  activeIndex: 0,
  onTabChange: () => null,
};

const AccordionContext = React.createContext<AccordionContextProps>(defaultState);

export default AccordionContext;
