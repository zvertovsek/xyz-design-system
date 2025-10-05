import { DefaultTheme } from "styled-components";

type BoxPosition = {
  x: "left" | "center" | "right";
  y: "top" | "bottom";
};

export default function updateTooltipLayoutStyles(
  tooltipElement: HTMLDivElement,
  triggerElement: Element,
  theme: DefaultTheme,
) {
  const viewportWidth = window.innerWidth;
  const boxRect = tooltipElement.getBoundingClientRect();
  const triggerElementRect = triggerElement.getBoundingClientRect();

  const differenceWidthElements = triggerElementRect.width - boxRect.width;

  // The space required to the left and right of the hovered element, to render the tooltip box centrally
  const horizontalSpaceRequired = Math.abs(differenceWidthElements) / 2;

  // The actual amount of available space to the left and right of the hovered element
  const spaceFreeToLeftOfHoveredEl = triggerElementRect.x;
  const spaceFreeToRightOfHoveredEl = viewportWidth - (triggerElementRect.x + triggerElementRect.width);

  // const canRenderBoxAboveTriggerEl = triggerElementRect.y > boxRect.height;
  const canRenderBoxBelowTriggerEl = window.innerHeight - triggerElementRect.bottom > boxRect.height;

  const canRenderBoxCentrally =
    differenceWidthElements > 0 ||
    (spaceFreeToLeftOfHoveredEl > horizontalSpaceRequired && spaceFreeToRightOfHoveredEl > horizontalSpaceRequired);
  const boxPosition: BoxPosition = {
    x: canRenderBoxCentrally ? "center" : spaceFreeToLeftOfHoveredEl < spaceFreeToRightOfHoveredEl ? "left" : "right",
    y: canRenderBoxBelowTriggerEl ? "bottom" : "top",
  };

  // Set vertical alignment of tooltip box
  let boxVerticalStyles;
  if (boxPosition.y === "top") {
    boxVerticalStyles = `
      top: ${triggerElementRect.top - boxRect.height - 4}px;
    `;
  }
  if (boxPosition.y === "bottom") {
    boxVerticalStyles = `
      top: ${triggerElementRect.bottom + 4}px;
    `;
  }

  // Set horizontal alignment of tooltip box
  let boxHorizontalStyles;
  if (boxPosition.x === "center") {
    const offsetToCentralize =
      boxRect.width === triggerElementRect.width
        ? 0 // triggerEl and tooltipBox are same size; no offset required to centralize
        : boxRect.width > triggerElementRect.width
        ? triggerElementRect.left - (boxRect.width - triggerElementRect.width) / 2 // tooltipBox is wider than triggerEl
        : triggerElementRect.left + (triggerElementRect.width - boxRect.width) / 2; // tooltipBox is narrower than tirggerEl
    boxHorizontalStyles = `
      left: ${offsetToCentralize}px;
    `;
  }
  if (boxPosition.x === "left") {
    boxHorizontalStyles = `
      left: ${triggerElementRect.left}px;
    `;
  }
  if (boxPosition.x === "right") {
    boxHorizontalStyles = `
      right: ${viewportWidth - (triggerElementRect.left + triggerElementRect.width)}px;
    `;
  }

  tooltipElement.style.cssText = `
    visibility: visible;
    pointer-events: all;
    z-index: ${theme.zIndices.tooltip};
    ${boxVerticalStyles};
    ${boxHorizontalStyles};
  `;
}
