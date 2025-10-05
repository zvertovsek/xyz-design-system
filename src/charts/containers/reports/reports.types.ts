export interface ReportWrapperProps {
  hasSideInformationPanel?: boolean;
}

export interface ReportContainerProps {
  width?: number | string;
  height?: number | string;
  leftMargin?: boolean;
  rightMargin?: boolean;
}

export interface ReportBackLinkProps {
  text: string;
  onClick: () => void;
}
