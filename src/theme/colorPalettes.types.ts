export interface Color {
  [key: number]: string;
}

export interface PrimaryPalette {
  accent: Color;
  ai: Color;
  default: Color;
}

export interface RagPalette {
  danger: Color;
  success: Color;
  warning: Color;
}

export interface SecondaryPalette {
  color1: Color;
  color2: Color;
  color3: Color;
}

export interface ColorPalettes {
  black: string;
  white: string;
  primary: PrimaryPalette;
  rag: RagPalette;
  secondary: SecondaryPalette;
}

export default ColorPalettes;
