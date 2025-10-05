import { DefaultTheme } from "styled-components";

export type TooltipState = {
  boxRef: React.RefObject<HTMLDivElement>;
  updateTooltipLayoutStyles: (boxRef: HTMLDivElement, triggerElement: Element, theme: DefaultTheme) => void;
};
