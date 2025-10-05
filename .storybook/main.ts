import deeperSortSetup from "storybook-deeper-sort";
import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

deeperSortSetup(["System", "*"]);

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-webpack5",
    options: { fastRefresh: true },
  },
  docs: {
    autodocs: true,
  },
  async webpackFinal(config) {
    if (config?.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@src": path.resolve(__dirname, "../src"),
        "@core": path.resolve(__dirname, "../src/core"),
        "@icons": path.resolve(__dirname, "../src/icons"),
        "@charts": path.resolve(__dirname, "../src/charts"),
        "@system": path.resolve(__dirname, "../src/system"),
        "@theme": path.resolve(__dirname, "../src/theme"),
        "@utils": path.resolve(__dirname, "../src/utils"),
        "@vectors": path.resolve(__dirname, "../src/vectors"),
      };
    }
    return config;
  },
};
export default config;
