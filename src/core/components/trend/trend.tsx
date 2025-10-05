import Icons, { IconProps, IconSize } from "@icons";
import React from "react";
import { TrendLabel, TrendWrapper } from "./trend.styles";
import { TrendComponentProps } from "./trend.types";

export const Trend: React.FC<TrendComponentProps> = ({
  severity = "neutral",
  forelabel,
  label,
  direction,
  onClickHandler,
}) => {
  const getIcon = (): JSX.Element | null => {
    const props: IconProps = {
      size: IconSize.md,
    };
    switch (direction) {
      case "up":
        return <Icons.TrendUpIcon {...props} />;
      case "flat":
        return <Icons.TrendFlatIcon {...props} />;
      case "down":
        return <Icons.TrendDownIcon {...props} />;
      default:
        return null;
    }
  };

  return (
    <TrendWrapper color={severity}>
      {forelabel && <TrendLabel as="span">{forelabel}</TrendLabel>}
      {getIcon()}
      <TrendLabel as={onClickHandler ? "button" : "span"} isClickable={!!onClickHandler} onClick={onClickHandler}>
        {label}
      </TrendLabel>
    </TrendWrapper>
  );
};

export default Trend;
