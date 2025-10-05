import Layout from "@core/components/layout";
import React from "react";
import { TabProps } from "../tabs.types";
import { TabElement, TabTitle, TabWrapper } from "./tab.styles";

export const TabComponent: React.ForwardRefRenderFunction<HTMLAnchorElement, TabProps> = (
  { label, description, isSelected, isAI = false, onClick, path },
  ref,
) => {
  return (
    <TabWrapper>
      <TabElement
        ref={ref}
        href={path || "#"}
        onClick={onClick}
        role="tab"
        isAI={isAI}
        aria-selected={isSelected}
        className={isSelected ? "selected" : undefined}
      >
        <TabTitle isAI={isAI} data-testid="tabTitle">
          {label}
        </TabTitle>
        {description && <Layout.Container data-testid="tabSubcontent">{description}</Layout.Container>}
      </TabElement>
    </TabWrapper>
  );
};
export default React.forwardRef(TabComponent);
