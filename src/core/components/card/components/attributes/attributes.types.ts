import { SyntheticEvent } from "react";
import { Attribute } from "../../card.types";

export interface AttributesComponentProps {
  attributes: Attribute[];
  showTooltip?: (message: string) => (e: SyntheticEvent) => void;
}
