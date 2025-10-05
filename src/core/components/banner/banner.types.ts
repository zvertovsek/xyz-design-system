export type BannerType = "aiInteraction" | "userInteraction";

export interface BannerProps {
  /**
   * Specifies the type of banner for styling purposes.
   */
  type?: BannerType;
  /**
   * Specifies the content of the banner.
   */
  children: React.ReactNode;
}

export type BannerElementProps = Pick<BannerProps, "type">;
