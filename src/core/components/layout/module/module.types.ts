export interface BacklinkProps {
  label: string;
  onClick: () => void;
}

export interface ModuleHeaderProps {
  /**
   * Specifies the back link configuration.
   */
  backlink?: BacklinkProps;
  /**
   * Specifies the page title.
   */
  pageTitle: React.ReactNode;
  /**
   * Specifies the component to be displayed at the end of the title row.
   */
  titleEndElement?: React.ReactNode;
  /**
   * Specifies the list of items to be displayed as breadcrumbs.
   */
  breadcrumbItems?: {
    label: string;
    onClick: () => void;
  }[];
}
