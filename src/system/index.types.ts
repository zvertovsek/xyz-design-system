import { Borders } from "./borders";
import { Breakpoints } from "./breakpoints";
import { FontSizes } from "./fontSizes";
import { FontWeights } from "./fontWeights";
import { Fonts } from "./fonts";
import { IconSizes } from "./iconSizes";
import { LineHeights } from "./lineHeights";
import { Radii } from "./radius";
import { Shadows } from "./shadows";
import { Sizes } from "./sizes";
import { Spacing } from "./spacing";
import { ZIndices } from "./z-index";

export interface System {
  borders: Borders;
  breakpoints: Breakpoints;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  fonts: Fonts;
  iconSizes: IconSizes;
  lineHeights: LineHeights;
  radii: Radii;
  shadows: Shadows;
  sizes: Sizes;
  spacing: Spacing;
  zIndices: ZIndices;
}
