import { DefaultThemeProvider } from "@theme";
import { RenderOptions, render as originalRender } from "@testing-library/react";
import Options from "@testing-library/dom/types/queries";
import React from "react";
import { TooltipProvider } from "@core/components/tooltip";

type Renderer = (children: React.ReactNode) => React.ReactElement;

export const withThemeProvider: Renderer = (children) => <DefaultThemeProvider>{children}</DefaultThemeProvider>;

export const withTooltipProvider: Renderer = (children) => <TooltipProvider>{children}</TooltipProvider>;

export const render =
  (...renderers: Renderer[]) =>
  (component: React.ReactElement, options?: Omit<RenderOptions<typeof Options, HTMLElement, HTMLElement>, "queries">) =>
    originalRender(
      renderers.reverse().reduce((acc, renderer) => renderer(acc), component),
      options,
    );
