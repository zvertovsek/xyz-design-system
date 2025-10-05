export interface CarouselProps {
  /**
   * Header title of the carousel.
   */
  header?: string;
  /**
   * items to be displayed in the carousel.
   */
  items: React.ReactNode[];
  /**
   * Page number to start with.
   */
  startPage?: number;
  /**
   * Number of items to be visible on each page.
   */
  numVisible: number;
}
