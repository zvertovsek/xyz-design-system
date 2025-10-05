export interface AccordionProps extends AccordionContextProps {
  children: JSX.Element | JSX.Element[];
}

export interface AccordionTabProps {
  /**
   * Header of the accordion tab. Can be a string or a custom jsx element.
   */
  header: React.ReactNode;
  /**
   * Body element shown when the accordion tab is expanded.
   */
  children?: React.ReactNode;
  /**
   * Flag that indicates whether the tab should be expandable or not.
   */
  isExpandable?: boolean;
  /**
   * index number used to identify the current tab  .
   */
  index?: number;
}

export interface AccordionContextProps {
  /**
   * current expanded tab with specified index.
   */
  activeIndex?: number;
  /**
   * Handler to be executed when a new tab has been expanded.
   */
  onTabChange?: (index: number) => void;
}
