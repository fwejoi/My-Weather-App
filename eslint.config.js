const { defineConfig } = require("eslint-define-config");
const prettier = require("eslint-plugin-prettier");

module.exports = defineConfig([
  {
    languageOptions: {
      globals: {
        console: true,
        window: true,
      },
      parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
      },
    },
    rules: {
      "prettier/prettier": "warn", // 将错误改为警告
      // 在这里添加其他自定义规则
    },
    plugins: {
      prettier: prettier, // 使用插件对象
    },
  },
]);
