import Layout from "@core/components/layout";
import Icons, { IconSize } from "@icons";
import { useContext } from "react";
import { useTheme } from "styled-components";
import { AccordionTypes } from "..";
import AccordionContext from "../accordion.context";
import {
  AccordionTabBody,
  AccordionTabHeader,
  AccordionTabHeaderButton,
  AccordionTabHeaderContent,
} from "./accordionTab.styles";

const AccordionTab: React.FC<AccordionTypes.AccordionTabProps> = ({ header, children, isExpandable = true, index }) => {
  const { activeIndex, onTabChange } = useContext(AccordionContext);
  const theme = useTheme();
  const isExpanded = activeIndex === index;

  const onClickTabHandler = (): void => {
    if (isExpandable && index !== undefined) {
      onTabChange?.(index);
    }
  };

  return (
    <Layout.Container data-testid="accordionTab">
      <AccordionTabHeader isExpanded={isExpanded} isExpandable={isExpandable} onClick={onClickTabHandler}>
        <AccordionTabHeaderButton isVisible={isExpandable}>
          <Icons.ChevronUpIcon color={theme.colorPalettes.primary.accent[700]} size={IconSize.md} />
        </AccordionTabHeaderButton>
        <AccordionTabHeaderContent data-testid="accordionTab-header">{header}</AccordionTabHeaderContent>
      </AccordionTabHeader>
      <AccordionTabBody isExpanded={isExpanded || !isExpandable} data-testid="accordionTab-content">
        {children}
      </AccordionTabBody>
    </Layout.Container>
  );
};

export default AccordionTab;
