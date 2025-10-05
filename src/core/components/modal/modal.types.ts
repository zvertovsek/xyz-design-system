import React from "react";

export interface ComponentProps<T> {
  children?: React.ReactElement;
  className?: string;
  vm: T;
}

export interface ModalViewModel {
  /**
   * Flag that indicates whether the modal is visible or not.
   */
  isVisible: boolean;
  /**
   * Title of the header.
   */
  headerTitle?: string;
  /**
   * Content of the modal.
   */
  content: React.ReactNode;
  /**
   * Footer of the modal.
   */
  footer?: React.ReactNode;
  /**
   * z-index to use in layering.
   */
  baseZIndex?: number;
  /**
   * Callback to invoke when dialog is hidden.
   */
  onHide?: () => void;
  /**
   * Basically the size of the modal, maybe something else in the future
   */
  type?: "default" | "dialog";
  /**
   * Flag that indicates whether the modal content is allowing overflowing content
   * like select's dropdown showing outside of the modal.
   * @default false
   */
  allowOverflow?: boolean;
}
