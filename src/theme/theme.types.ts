import { System } from "@system/index.types";
import { ReactNode } from "react";
import ColorPalettes from "./colorPalettes.types";
import { ThemedComponents } from "./components.types";

export interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export interface Theme extends System {
  colorPalettes: ColorPalettes;
  components: ThemedComponents;
}
