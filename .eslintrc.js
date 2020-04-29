module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    quotes: ["error", "backtick"],
    "prettier/prettier": ["error", {"trailingComma": "all", "parser": "flow"}]
  }
};
