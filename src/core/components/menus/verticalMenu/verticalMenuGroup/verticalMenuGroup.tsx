import Typography from "@core/components/typography";
import { useContext } from "react";
import { useTheme } from "styled-components";
import MenuContext from "../verticalMenu.context";
import Item from "../verticalMenuItem";
import { GroupWrapper, ItemListWrapper, TitleGroup } from "./verticalMenuGroup.styles";
import { VerticalMenuGroupProps } from "./verticalMenuGroup.types";

export const VerticalMenuGroup: React.FC<VerticalMenuGroupProps> = ({ items, label }) => {
  const { viewState } = useContext(MenuContext);
  const theme = useTheme();

  return (
    <GroupWrapper data-testid="group">
      {!!label && (
        <TitleGroup data-testid="titleGroup" isHidden={viewState === "closed"}>
          <Typography.Caption color={theme.colorPalettes.primary.default[700]}>{label}</Typography.Caption>
        </TitleGroup>
      )}
      <ItemListWrapper role="menu">
        {items.map((item) => {
          return <Item {...item} />;
        })}
      </ItemListWrapper>
    </GroupWrapper>
  );
};

export default VerticalMenuGroup;
