import React, { PropsWithChildren, useRef } from "react";

import TooltipContext from "./tooltip.context";
import { TooltipBox } from "./tooltip.styles";
import updateTooltipLayoutStyles from "./utils/updateTooltipLayoutStyles";

const TooltipProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const boxRef = useRef<HTMLDivElement>(null);

  return (
    <TooltipContext.Provider value={{ boxRef, updateTooltipLayoutStyles }}>
      {children}
      <TooltipBox ref={boxRef} role="tooltip" data-testid="tooltip-box" />
    </TooltipContext.Provider>
  );
};

export default TooltipProvider;
