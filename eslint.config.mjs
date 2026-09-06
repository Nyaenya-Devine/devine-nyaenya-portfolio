import NextPlugin from "@next/eslint-plugin-next";

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "build/**"],
  },
  // Native flat-config preset from @next/eslint-plugin-next (Next 16).
  NextPlugin.configs?.["core-web-vitals"] ?? {},
  {
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
