module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "react-native/no-inline-styles": "off",
    "no-unused-vars": "off", //Verficccação de valores não ultilizados
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
