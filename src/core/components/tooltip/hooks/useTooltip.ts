import { SyntheticEvent, useContext } from "react";
import { useTheme } from "styled-components";

import TooltipContext from "../tooltip.context";

export default function useTooltipUtility() {
  const tooltipContext = useContext(TooltipContext);
  const theme = useTheme();

  if (tooltipContext === undefined) {
    throw new Error("useTooltipUtility must be used within <TooltipProvider />");
  }

  const { updateTooltipLayoutStyles, boxRef } = tooltipContext;

  const showTooltip = (message: string) => (event: SyntheticEvent) => {
    const tooltipElement = boxRef.current;

    if (tooltipElement && event.currentTarget) {
      const hideTooltip = () => {
        tooltipElement.style.cssText = `
          visibility: hidden;
          pointer-events: none;
          z-index: ${theme.zIndices.hide};
        `;
        event.target.removeEventListener("mouseleave", hideTooltip);
        event.target.removeEventListener("focusout", hideTooltip);
        event.target.removeEventListener("mousedown", hideTooltip);
      };

      event.target.addEventListener("mouseleave", hideTooltip);
      event.target.addEventListener("focusout", hideTooltip);
      event.target.addEventListener("mousedown", hideTooltip);
      tooltipElement.innerHTML = message;
      updateTooltipLayoutStyles(tooltipElement, event.currentTarget, theme);
    }
  };

  return { showTooltip };
}
