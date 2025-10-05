import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import sourceMaps from "rollup-plugin-sourcemaps";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import ttypescript from "ttypescript";
import pkg from "./package.json";

const cjs = {
  exports: "named",
  format: "cjs",
  sourcemap: true,
};

const esm = {
  format: "esm",
  sourcemap: true,
};

const getCJS = (override) => ({ ...cjs, ...override });
const getESM = (override) => ({ ...esm, ...override });

const commonPlugins = [
  typescript({
    typescript: ttypescript,
    useTsconfigDeclarationDir: true,
  }),
  sourceMaps(),
  json(),
  nodeResolve(),
  commonjs({
    ignoreGlobal: true,
    include: /\/node_modules\//,
  }),
  replace({
    __VERSION__: JSON.stringify(pkg.version),
    preventAssignment: true,
  }),
];

// this should always be last
const minifierPlugin = terser({
  compress: {
    passes: 2,
  },
});

const configBase = {
  // \0 is rollup convention for generated in memory modules
  external: (id) => !id.startsWith("\0") && !id.startsWith(".") && !id.startsWith("/"),
  plugins: commonPlugins,
};

const coreConfig = Object.assign({}, configBase, {
  input: "./src/core/index.ts",
  output: [getESM({ file: "dist/core.esm.js" }), getCJS({ file: "dist/core.cjs.js" })],
  plugins: configBase.plugins.concat(minifierPlugin),
});

const iconsConfig = Object.assign({}, configBase, {
  input: "./src/icons/index.ts",
  output: [getESM({ file: "dist/icons.esm.js" }), getCJS({ file: "dist/icons.cjs.js" })],
  plugins: configBase.plugins.concat(minifierPlugin),
});

const chartsConfig = Object.assign({}, configBase, {
  input: "./src/charts/index.ts",
  output: [getESM({ file: "dist/charts.esm.js" }), getCJS({ file: "dist/charts.cjs.js" })],
  plugins: configBase.plugins.concat(minifierPlugin),
  inlineDynamicImports: true,
});

const systemConfig = Object.assign({}, configBase, {
  input: "./src/system/index.ts",
  output: [getESM({ file: "dist/system.esm.js" }), getCJS({ file: "dist/system.cjs.js" })],
  plugins: configBase.plugins.concat(minifierPlugin),
  inlineDynamicImports: true,
});

const themingConfig = Object.assign({}, configBase, {
  input: "./src/theme/index.ts",
  output: [getESM({ file: "dist/themes.esm.js" }), getCJS({ file: "dist/themes.cjs.js" })],
  plugins: configBase.plugins.concat(minifierPlugin),
  inlineDynamicImports: true,
});

const utilsConfig = Object.assign({}, configBase, {
  input: "./src/utils/index.ts",
  output: [getESM({ file: "dist/utils.esm.js" }), getCJS({ file: "dist/utils.cjs.js" })],
  plugins: configBase.plugins.concat(minifierPlugin),
  inlineDynamicImports: true,
});

const vectorsConfig = Object.assign({}, configBase, {
  input: "./src/vectors/index.ts",
  output: [getESM({ file: "dist/vectors.esm.js" }), getCJS({ file: "dist/vectors.cjs.js" })],
  plugins: configBase.plugins.concat(minifierPlugin),
});

export default [chartsConfig, coreConfig, iconsConfig, systemConfig, themingConfig, utilsConfig, vectorsConfig];
