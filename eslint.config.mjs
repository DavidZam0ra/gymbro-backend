import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

// TODO: Check if really works
export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended", "plugin:prettier/recommended"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      "prettier/prettier": ["error", { "singleQuote": true, "semi": true, "trailingComma": "all", "bracketSpacing": true }],
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },
]);
