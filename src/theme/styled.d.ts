import "styled-components";
import { Theme } from "./theme.types";

// replacing the default interface for the theme object
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
