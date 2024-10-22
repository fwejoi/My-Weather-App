# Dropdown Menu Component

## 简介

这是一个可复用的下拉菜单组件，允许用户通过点击按钮来显示或隐藏菜单项。它可以用于各种场景，例如设置、导航或操作选项。

## 安装

确保你已将组件文件（如 `dropdown.js` 和样式文件 `dropdown.css`）添加到你的项目中。

```bash
npm install your-dropdown-package

在html文件中添加如以下html所示结构:
<div class="my-dropdown">
      <button class="dropdown-toggle">Toggle Dropdown</button>
      <div class="dropdown-menu">
        <a href="#">Edit</a>
        <a href="#">Copy</a>
        <a href="#">Delete</a>
      </div>
    </div>

在index.js中添加如下代码:
import "./dropdown.css";
import Dropdown from "./dropdown.js";

document.addEventListener("DOMContentLoaded", () => {
  const myDropdown = new Dropdown(".my-dropdown");
});
