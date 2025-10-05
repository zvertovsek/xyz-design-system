import React from "react";
import { Card } from "../card.types";

export interface BaseCardProps extends Card {
  children?: React.ReactNode;
}
