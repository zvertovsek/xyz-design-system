import { render, withThemeProvider } from "@test-utils/renderers";
import { screen } from "@testing-library/react";
import Banner from "./banner";
import { BannerProps } from "./banner.types";

const PROPS: BannerProps = {
  children: "Banner",
};

const renderBanner = ({ children, type } = PROPS): HTMLElement => {
  render(withThemeProvider)(<Banner type={type}>{children}</Banner>);
  return screen.getByTestId("banner");
};

describe("Banner", () => {
  it("renders children", () => {
    const banner = renderBanner();
    expect(banner).toHaveTextContent(PROPS.children as string);
  });

  it("renders userInteraction banner", () => {
    const banner = renderBanner({ ...PROPS, type: "userInteraction" });
    expect(banner).toHaveStyle(`background-color: #EAEAFF`);
  });

  it("renders aiInteraction banner", () => {
    const banner = renderBanner({ ...PROPS, type: "aiInteraction" });
    expect(banner).toHaveStyle(`background-color: #FBE4EE`);
  });
});
