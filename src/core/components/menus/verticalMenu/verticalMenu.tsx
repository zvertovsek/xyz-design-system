import VerticalMenuGroup from "./verticalMenuGroup";
import MenuContext from "./verticalMenu.context";
import { VerticalMenuProps } from "./verticalMenu.types";
import { VerticalMenuWrapper } from "./verticalMenu.styles";

/**
 * Vertical Menu Component
 */
export const VerticalMenu: React.FC<VerticalMenuProps> = ({
  viewState = "closed",
  itemGroups,
  onMenuItemSelectHandler,
}) => {
  return (
    <MenuContext.Provider value={{ viewState, onMenuItemSelectHandler }}>
      <VerticalMenuWrapper role="list" isExpanded={viewState === "extended"}>
        {itemGroups.map((group) => {
          return <VerticalMenuGroup {...group} />;
        })}
      </VerticalMenuWrapper>
    </MenuContext.Provider>
  );
};

export default VerticalMenu;
