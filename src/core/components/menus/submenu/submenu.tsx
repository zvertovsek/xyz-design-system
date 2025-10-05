import React, { useEffect, useMemo, useRef, useState } from "react";
import SubmenuContext from "./submenu.context";
import { SubmenuContainer, SubmenuList, SubmenuSlider } from "./submenu.styles";
import { SubmenuItemFormatted, SubmenuProps } from "./submenu.types";
import { addIdPathsToItems } from "./submenu.utilities";
import { SubmenuItem } from "./submenuItem";

export const SubmenuComponent: React.FC<SubmenuProps> = ({ items, currentSelections, onItemClickHandler }) => {
  const itemsFormatted = useMemo(() => addIdPathsToItems(items), [items]);
  const [sliderHeight, setSliderHeight] = useState<number | undefined>();
  const [offsetY, setOffsetY] = useState<number | undefined>();
  const submenuRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const handleClick = (item: SubmenuItemFormatted) => {
    onItemClickHandler(item);
  };

  useEffect(() => {
    const animateSliderToTheSelection = () => {
      const startRef = submenuRefs.current[itemsFormatted[0].id];
      const currentRef = submenuRefs.current[currentSelections[0]];
      if (startRef != null && currentRef != null) {
        const startBlock = startRef.getBoundingClientRect();
        const currentBlock = currentRef.getBoundingClientRect();
        setSliderHeight(currentRef.offsetHeight);
        setOffsetY(currentBlock.y - startBlock.y);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      animateSliderToTheSelection();
    });

    resizeObserver.observe(document.body);
    animateSliderToTheSelection();

    return () => {
      resizeObserver.disconnect();
    };
  }, [currentSelections]);

  return (
    <SubmenuContainer data-testid="submenuComponent">
      <SubmenuSlider height={sliderHeight} offsetY={offsetY} role="slider" />
      <SubmenuContext.Provider value={{ handleClick, currentSelections }}>
        <SubmenuList role="tablist">
          {itemsFormatted.map((submenuItem) => (
            <SubmenuItem {...submenuItem} key={submenuItem.id} ref={(e) => (submenuRefs.current[submenuItem.id] = e)} />
          ))}
        </SubmenuList>
      </SubmenuContext.Provider>
    </SubmenuContainer>
  );
};
export default SubmenuComponent;
