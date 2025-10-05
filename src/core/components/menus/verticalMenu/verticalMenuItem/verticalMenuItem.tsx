import Icons from "@icons";
import { useContext, useState } from "react";
import { useTheme } from "styled-components";
import MenuContext from "../verticalMenu.context";
import {
  ArrowButton,
  ExtendedPartWrapper,
  ItemChildrenWrapper,
  ItemWrapper,
  LabelItem,
  LinkWrapper,
} from "./verticalMenuItem.styles";
import { VerticalMenuItemProps } from "./verticalMenuItem.types";

export const VerticalMenuItem: React.FC<VerticalMenuItemProps> = (item) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { onMenuItemSelectHandler, viewState } = useContext(MenuContext);
  const { isSelected, isDisabled = false, icon, children, label, itemPath } = item;
  const theme = useTheme();

  const Icon = !!icon && Icons[icon];

  const onItemSelectHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onMenuItemSelectHandler(item);
  };

  const onArrowSelectHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsExpanded((isExpanded) => !isExpanded);
  };

  const getColor = () => {
    if (isDisabled) {
      return theme.colorPalettes.primary.default[400];
    }
    if (isSelected) {
      return theme.colorPalettes.white;
    }
    return theme.colorPalettes.primary.accent[600];
  };

  const color = getColor();

  return (
    <>
      <ItemWrapper isSelectable={!!itemPath} isSelected={isSelected} isDisabled={isDisabled} role="menuitem">
        <LinkWrapper href={itemPath} onClick={onItemSelectHandler} data-testid="item-link">
          {Icon && <Icon color={color} />}
          <ExtendedPartWrapper isHidden={viewState === "closed"}>
            <LabelItem data-testid="labelItem" color={color}>
              {label}
            </LabelItem>
            {children?.length && (
              <ArrowButton onClick={onArrowSelectHandler} direction={isExpanded ? "up" : "down"}>
                <Icons.ChevronUpIcon color={color} />
              </ArrowButton>
            )}
          </ExtendedPartWrapper>
        </LinkWrapper>
      </ItemWrapper>
      {isExpanded && (
        <ItemChildrenWrapper role="menu" isHidden={viewState === "closed"}>
          {children?.map((itemChild) => {
            return <VerticalMenuItem {...itemChild} />;
          })}
        </ItemChildrenWrapper>
      )}
    </>
  );
};

export default VerticalMenuItem;
