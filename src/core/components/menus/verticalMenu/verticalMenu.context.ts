import React from "react";
import { MenuContextProps } from "./verticalMenu.types";

const defaultState: MenuContextProps = {
  viewState: "closed",
  onMenuItemSelectHandler: () => null,
};

const MenuContext = React.createContext<MenuContextProps>(defaultState);

export default MenuContext;
