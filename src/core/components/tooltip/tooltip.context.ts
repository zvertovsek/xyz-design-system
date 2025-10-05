import { createContext } from "react";
import { TooltipState } from "./tooltip.types";

const TooltipContext = createContext<TooltipState | undefined>(undefined);

export default TooltipContext;
