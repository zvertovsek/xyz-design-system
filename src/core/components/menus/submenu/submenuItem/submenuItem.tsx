import Typography from "@core/components/typography";
import React, { useContext } from "react";
import SubmenuContext from "../submenu.context";
import { SubmenuItemFormatted } from "../submenu.types";
import {
  SubmenuItemCounterWrapper,
  SubmenuChildrenListWrapper,
  SubmenuItemElement,
  SubmenuItemWrapper,
} from "./submenuItem.styles";

export const SubmenuItemComponent = React.forwardRef<HTMLAnchorElement, SubmenuItemFormatted>((item, ref) => {
  const { id, label, counterLabel, path, children, isAI = false } = item;
  const { handleClick, currentSelections } = useContext(SubmenuContext);
  const isSelected = currentSelections.includes(id);

  const onClickItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleClick(item);
  };

  return (
    <>
      <SubmenuItemWrapper>
        <SubmenuItemElement
          ref={ref}
          href={path}
          onClick={onClickItem}
          role="tab"
          isAI={isAI}
          aria-selected={isSelected}
          className={isSelected ? "selected" : undefined}
        >
          {label}
          {counterLabel && (
            <SubmenuItemCounterWrapper>
              <Typography.B2>{counterLabel}</Typography.B2>
            </SubmenuItemCounterWrapper>
          )}
        </SubmenuItemElement>
      </SubmenuItemWrapper>
      {children?.length && (
        <SubmenuChildrenListWrapper role="tablist">
          {children?.map((itemChild) => (
            <SubmenuItemComponent key={itemChild.id} {...itemChild} />
          ))}
        </SubmenuChildrenListWrapper>
      )}
    </>
  );
});
export default SubmenuItemComponent;
