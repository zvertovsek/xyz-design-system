import React from "react";
import { BaseCardWrapper } from "./baseCard.styles";
import { BaseCardProps } from "./baseCard.types";

export const BaseCard: React.FC<BaseCardProps> = ({
  colorCard = "white",
  onClickCard,
  children,
  isSelected = false,
  className,
}) => {
  const isClickable = !!onClickCard;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      onClickCard && onClickCard();
    }
  };

  return (
    <BaseCardWrapper
      as="article"
      color={colorCard}
      onClick={onClickCard}
      isSelected={isSelected}
      isClickable={isClickable}
      tabIndex={isClickable ? 0 : undefined}
      role="button"
      data-testid="baseCard"
      onKeyDown={handleKeyDown}
      className={className}
    >
      {children}
    </BaseCardWrapper>
  );
};

export default BaseCard;
