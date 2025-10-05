import React from "react";
import { SubmenuContextProps } from "./submenu.types";

const defaultState: SubmenuContextProps = {
  handleClick: () => null,
  currentSelections: [],
};

const SubmenuContext = React.createContext<SubmenuContextProps>(defaultState);

export default SubmenuContext;
