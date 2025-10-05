import React from "react";
import { BannerElement } from "./banner.styles";
import { BannerProps } from "./banner.types";

export const Banner: React.FC<BannerProps> = ({ type, children }) => {
  return (
    <BannerElement data-testid="banner" role="banner" type={type}>
      {children}
    </BannerElement>
  );
};

export default Banner;
