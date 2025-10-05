import { IconProps } from "@icons";

export enum Severity {
  Default = "DEFAULT",
  Accent = "ACCENT",
  Success = "SUCCESS",
  Warning = "WARNING",
  Danger = "DANGER",
  AI_Light = "AI_LIGHT",
  AI_Dark = "AI_DARK",
}

export interface TagProps {
  /**
   * Label of the tag to be shown.
   */
  label: string;
  /**
   * Tag severity. Each severity uses a different style.
   */
  severity?: Severity;
  /**
   * Icon of the tag to be shown.
   */
  icon?: React.ComponentType<IconProps>;
  /**
   * Tag id. Used as an argument when calling the onClick handler.
   */
  id?: string;
  /**
   * Flag that indicates whether the tag needs to be selected by default.
   */
  isSelected?: boolean;
  /**
   * Flag that indicates whether the tag needs to be disabled by default.
   */
  isDisabled?: boolean;
  /**
   * Flag that indicates whether the tag is removable or not (adding a proper cancel icon button).
   */
  isRemovable?: boolean;
  /**
   * Flag that indicates whether the text in the tag is bold or not.
   */
  isBold?: boolean;
  /**
   * Handler that gets executed when clicking on the tag.
   */
  onClick?: (id: string) => void;
  /**
   * Handler that gets executed when pressing a key while focusing on the tag.
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  /**
   * Handler that gets executed when hovering on the tag.
   */
  onHover?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * class name of the tag element.
   */
  className?: string;
  /**
   * testid
   */
  testId?: string;
  /**
   * min width of the tag component
   */
  minWidth?: string;
}
