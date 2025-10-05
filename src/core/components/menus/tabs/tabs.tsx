import React, { useRef } from "react";
import { Tab } from "./tab";
import { TabList, TabListContainer } from "./tabs.styles";
import { TabsProps } from "./tabs.types";

export const TabsComponent: React.FC<TabsProps> = ({ items, currentlySelectedTab, onChangeHandler }) => {
  const tabRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const handleClick = (event: React.MouseEvent<HTMLElement>, key: string) => {
    event.preventDefault();
    onChangeHandler(key);
  };

  return (
    <TabListContainer>
      <TabList role="tablist">
        {items.map((tab) => (
          <Tab
            {...tab}
            ref={(element) => (tabRefs.current[tab.key] = element)}
            isSelected={tab.key === currentlySelectedTab}
            onClick={(e) => handleClick(e, tab.key)}
          />
        ))}
      </TabList>
    </TabListContainer>
  );
};

export default TabsComponent;
