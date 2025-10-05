import { TreeNode } from "../tree.types";

export const hasSomeChildrenChecked = (nodes: TreeNode[], selectedKeys: string[]): boolean => {
  let hasSomeChecked = false;

  for (const node of nodes) {
    if (
      selectedKeys.includes(node.key) ||
      (node.children?.length && hasSomeChildrenChecked(node.children, selectedKeys))
    ) {
      hasSomeChecked = true;
      break;
    }
  }

  return hasSomeChecked;
};

export const hasAllChildrenChecked = (nodes: TreeNode[], selectedKeys: string[]): boolean => {
  let hasAllChecked = true;

  for (const node of nodes) {
    if (
      !selectedKeys.includes(node.key) ||
      (node.children?.length && !hasAllChildrenChecked(node.children, selectedKeys))
    ) {
      hasAllChecked = false;
      break;
    }
  }

  return hasAllChecked;
};

export const getChildrenNodeKeys = (nodes: TreeNode[]): string[] => {
  const keys: string[] = [];

  nodes.forEach(({ key, children }) => {
    keys.push(key);
    children?.length && keys.push(...getChildrenNodeKeys(children));
  });

  return keys;
};

export const getNewSelectedKeys = (
  isChecked: boolean,
  node: TreeNode,
  selectedKeys: string[],
  nodes: TreeNode[],
): string[] => {
  let newSelectedKeys: string[] = [...selectedKeys];

  const updateNodeKeysWithChildren = (nodes: TreeNode[]): void => {
    nodes.forEach(({ children = [], ...node }) => {
      if (children.length) {
        updateNodeKeysWithChildren(children);

        if (hasAllChildrenChecked(children, newSelectedKeys)) {
          newSelectedKeys = [...new Set([...newSelectedKeys, node.key])];
        } else {
          newSelectedKeys = newSelectedKeys.filter((key) => key !== node.key);
        }
      }
    });
  };

  if (!node.children?.length) {
    if (isChecked) {
      newSelectedKeys.push(node.key);
    } else {
      newSelectedKeys = newSelectedKeys.filter((key) => key !== node.key);
    }
  } else {
    const currentTreeKeys = [node.key, ...getChildrenNodeKeys(node.children)];

    if (isChecked) {
      newSelectedKeys = [...new Set([...newSelectedKeys, ...currentTreeKeys])];
    } else {
      newSelectedKeys = newSelectedKeys.filter((key) => !currentTreeKeys.includes(key));
    }
  }

  updateNodeKeysWithChildren(nodes);

  return newSelectedKeys;
};
