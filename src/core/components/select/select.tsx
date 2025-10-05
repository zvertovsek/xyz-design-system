import Icons, { IconSize } from "@icons";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { Container, Display, Dropdown, Indicator, MAX_HEIGHT_DROPDOWN, Option, SelectLabel } from "./select.styles";
import { DropdownSize, OptionModel, SelectComponentProps } from "./select.types";

export const SelectComponent: React.FC<SelectComponentProps> = ({
  options,
  onSelect,
  selectedOptionId: initialSelectedOption,
  placeholder = "Please select an option",
  isDisabled = false,
  shouldLabelTruncate = false,
  disabledOptions = [],
  className,
  backgroundColor = "grey",
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const dropdownSelectRef = useRef<HTMLButtonElement>(null);

  const [isDropdownOpened, toggleDropdown] = useState<boolean>(false);
  const [isDropdownOnTop, setIsDropdownOnTop] = useState<boolean>(true);
  const [dropdownSize, setDropdownSize] = useState<DropdownSize>();
  const [selectedOptionId, setSelectedOptionId] = useState<string | undefined>(initialSelectedOption);
  const theme = useTheme();

  const calculateDropdownSize = () => {
    if (!dropdownContainerRef.current) return;

    const width = dropdownContainerRef.current.clientWidth;
    const height = dropdownRef.current ? Math.min(dropdownRef.current.clientHeight, MAX_HEIGHT_DROPDOWN) : 0;
    setDropdownSize({ width, height });
  };

  const setDropdownPosition = (): void => {
    const containerCurrentRef = dropdownContainerRef.current;
    if (containerCurrentRef && dropdownSize) {
      const distanceToptoDropdownBottom = containerCurrentRef.getBoundingClientRect().bottom + dropdownSize.height;
      const distanceToBottomWindow = window.innerHeight - distanceToptoDropdownBottom;
      if (distanceToBottomWindow < 0) {
        setIsDropdownOnTop(true);
      } else {
        setIsDropdownOnTop(false);
      }
    }
  };

  const truncateToFit = (label: string, limit: number): string => {
    if (label.length <= limit) return label;

    const wordsInLabel = label.split(" ");
    const endCharLength = wordsInLabel[wordsInLabel.length - 1].length;
    const frontCharLength = limit - endCharLength - 4;

    return `${label.slice(0, frontCharLength)}... ${label.slice(-endCharLength)}`;
  };

  const handleDisplayClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isDropdownOpened) {
      setDropdownPosition();
    }
    toggleDropdown(!isDropdownOpened);
  };

  const handleOptionClick = (option: OptionModel) => {
    onSelect(option);
    toggleDropdown(false);
    dropdownSelectRef.current?.focus();
  };

  const handleClickOutside = (e: Event) => {
    if (dropdownContainerRef.current && dropdownContainerRef.current.contains(e.target as Element)) {
      return;
    }
    toggleDropdown(false);
  };

  const getLabel = () => {
    if (selectedOptionId) {
      const selectedOptionLabel = options.find((option) => option.id === selectedOptionId)?.label || "";

      return shouldLabelTruncate ? truncateToFit(selectedOptionLabel, 17) : selectedOptionLabel;
    } else {
      return shouldLabelTruncate ? truncateToFit(placeholder, 17) : placeholder;
    }
  };

  useEffect(() => {
    if (!dropdownContainerRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      calculateDropdownSize();
    });
    resizeObserver.observe(dropdownContainerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    calculateDropdownSize();
  }, [options]);

  useEffect(() => {
    setSelectedOptionId(initialSelectedOption);
  }, [initialSelectedOption]);

  useEffect(() => {
    if (isDropdownOpened) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpened]);

  return (
    <Container ref={dropdownContainerRef} className={className} data-testid="select-component">
      <Display
        onClick={handleDisplayClick}
        className={selectedOptionId ? "selected" : undefined}
        disabled={isDisabled}
        color={backgroundColor}
        ref={dropdownSelectRef}
      >
        <Indicator isDropdownOpened={isDropdownOpened}>
          <Icons.ChevronUpIcon
            color={isDisabled ? theme.colorPalettes.primary.default[500] : theme.colorPalettes.black}
            size={IconSize.sm}
          />
        </Indicator>
        <SelectLabel>{getLabel()}</SelectLabel>
      </Display>
      {dropdownSize && (
        <Dropdown
          ref={dropdownRef}
          isDropdownOpened={isDropdownOpened}
          isOnTop={isDropdownOnTop}
          color={backgroundColor}
          {...dropdownSize}
          data-testid="dropdown"
        >
          {options.map((option) => (
            <Option
              key={option.id}
              className={option.id === selectedOptionId ? "selected" : undefined}
              onClick={() => handleOptionClick(option)}
              disabled={disabledOptions.includes(option.id)}
            >
              {option.label}
            </Option>
          ))}
        </Dropdown>
      )}
    </Container>
  );
};

export default SelectComponent;
