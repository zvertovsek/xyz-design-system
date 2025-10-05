import { Checkbox } from "@core/components/checkbox";
import { ComponentProps } from "@core/components/components.types";
import Layout from "@core/components/layout";
import Typography from "@core/components/typography";
import Icons, { IconSize } from "@icons";
import React from "react";
import { useTheme } from "styled-components";
import { TreeNode } from "../tree.types";
import {
  CheckboxSelectButtonsWrapper,
  SelectButton,
  TreeItemArrowButton,
  TreeItemWrapper,
  TreeNodeChildrenWrapper,
} from "./checkboxSelect.styles";
import { CheckboxSelectViewModel } from "./checkboxSelect.types";
import { getNewSelectedKeys, hasSomeChildrenChecked } from "./checkboxSelect.utils";

export const CheckboxSelect: React.FC<ComponentProps<CheckboxSelectViewModel>> = ({
  vm: {
    options,
    selectedKeys,
    expandedKeys,
    selectAllLabel,
    selectNoneLabel,
    onSelectionChange,
    onExpandChange,
    onSelectAll,
    onSelectNone,
  },
}) => {
  const theme = useTheme();

  const getTreeNodes = (nodes: TreeNode[]): JSX.Element[] => {
    return nodes.map((node) => {
      const { key, label, children } = node;
      const isExpanded = expandedKeys.includes(key);
      const isSelected = selectedKeys.includes(key);
      const hasChildren = !!children?.length;

      return (
        <Layout.Container key={key} role="listitem">
          <TreeItemWrapper>
            <Checkbox
              id={key}
              label={label}
              isChecked={isSelected}
              hasChildrenChecked={hasChildren && !isSelected && hasSomeChildrenChecked(children, selectedKeys)}
              onChange={(e) => onSelectionChange(getNewSelectedKeys(e.target.checked, node, selectedKeys, options))}
            />
            {hasChildren && (
              <TreeItemArrowButton
                isExpanded={isExpanded}
                onClick={() => onExpandChange(key)}
                data-testid="arrowButton"
              >
                <Icons.ChevronUpIcon color={theme.colorPalettes.primary.accent[900]} size={IconSize.sm} />
              </TreeItemArrowButton>
            )}
          </TreeItemWrapper>
          {hasChildren && (
            <TreeNodeChildrenWrapper isVisible={isExpanded} role="list">
              {getTreeNodes(children)}
            </TreeNodeChildrenWrapper>
          )}
        </Layout.Container>
      );
    });
  };

  return (
    <Layout.Container>
      <CheckboxSelectButtonsWrapper>
        <SelectButton onClick={onSelectAll}>
          <Typography.B2>{selectAllLabel}</Typography.B2>
        </SelectButton>
        <SelectButton onClick={onSelectNone}>
          <Typography.B2>{selectNoneLabel}</Typography.B2>
        </SelectButton>
      </CheckboxSelectButtonsWrapper>
      <Layout.Container role="list">{getTreeNodes(options)}</Layout.Container>
    </Layout.Container>
  );
};

export default CheckboxSelect;
