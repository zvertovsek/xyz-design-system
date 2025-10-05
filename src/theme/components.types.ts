import { ButtonVariant } from "@core/components/button/button.types";

interface ButtonVariantAttributes {
  color: string;
  backgroundColor: string;
  borderColor: string;
  _hover?: {
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    boxShadow?: string;
  };
  _disabled?: {
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    boxShadow?: string;
  };
}

export interface ThemedComponents {
  typography: {
    color: string;
  };
  button: {
    variants: {
      [ButtonVariant.CommonLight]: ButtonVariantAttributes;
      [ButtonVariant.CommonDark]: ButtonVariantAttributes;
      [ButtonVariant.Primary]: ButtonVariantAttributes;
      [ButtonVariant.PrimaryAI]: ButtonVariantAttributes;
      [ButtonVariant.Secondary]: ButtonVariantAttributes;
      [ButtonVariant.TextOnly]: ButtonVariantAttributes;
      [ButtonVariant.TextOnlyAI]: ButtonVariantAttributes;
    };
    defaultProps: {
      variant: string;
    };
  };
}
