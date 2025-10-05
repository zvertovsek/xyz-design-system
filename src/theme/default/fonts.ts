import { Fonts } from "@system/fonts/fonts.types";
import "typeface-open-sans";
import "typeface-poppins";

const fallbackFonts =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";

const fonts: Fonts = {
  heading: `Poppins, ${fallbackFonts}`,
  body: `Poppins, ${fallbackFonts}`,
};

export default fonts;
