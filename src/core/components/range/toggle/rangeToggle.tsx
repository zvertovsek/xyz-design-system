import React, { useEffect, useState } from "react";
import { Button, Container } from "./rangeToggle.styles";
import { RangeOptionModel, RangeToggleComponentProps } from "./rangeToggle.types";

export const RangeToggleComponent: React.FC<RangeToggleComponentProps> = ({
  options,
  onSelect,
  selectedOptionId: initialSelectedOptionId,
  disabledOptionIds = [],
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | undefined>(initialSelectedOptionId);

  const handleOptionClick = (option: RangeOptionModel) => {
    onSelect(option);
    setSelectedOptionId(option.id);
  };

  useEffect(() => {
    setSelectedOptionId(initialSelectedOptionId);
  }, [initialSelectedOptionId]);

  return (
    <Container>
      {options.map((option) => (
        <Button
          key={option.id}
          className={option.id === selectedOptionId ? "selected" : undefined}
          disabled={disabledOptionIds.includes(option.id)}
          onClick={() => handleOptionClick(option)}
          data-testid="toggle"
        >
          {option.label}
        </Button>
      ))}
    </Container>
  );
};

export default RangeToggleComponent;
