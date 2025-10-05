import sizes from "../sizes";
import spacing from "../spacing";
import { IconSizes } from "./iconsSizes.types";

const iconSizes: IconSizes = {
  xs: {
    size: sizes[2],
    margin: "0",
    border: "0.0625rem",
    thickness: "0.0625rem",
  },
  sm: {
    size: sizes[3],
    margin: "0",
    border: "0.0875rem",
    thickness: "0.0875rem",
  },
  md: {
    size: sizes[4],
    margin: spacing.px,
    border: "0.1rem",
    thickness: "0.1rem",
  },
  lg: {
    size: sizes[6],
    margin: spacing[0.5],
    border: "0.135rem",
    thickness: "0.135rem",
  },
  xl: {
    size: sizes[8],
    margin: spacing.px,
    border: "0.156rem",
    thickness: "0.156rem",
  },
};

export default iconSizes;
