export interface TreeViewModel {
  /**
   * An array of Tree nodes.
   */
  options: TreeNode[];
  /**
   * An array of selected node keys.
   */
  selectedKeys: string[];
  /**
   * An array of expanded node keys.
   */
  expandedKeys: string[];
  /**
   * Callback to invoke when a node is expanded/collapsed.
   */
  onExpandChange: (key: string) => void;
}

export interface TreeNode {
  key: string;
  label: string;
  children?: TreeNode[];
}
