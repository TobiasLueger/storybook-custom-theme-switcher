# Storybook Custom Theme Switcher

![Storybook custom theme switcher](storybook-custom-theme-switcher.gif?raw=true "Storybook addon theme switcher")

This addon can be used to set a data attribute in Storybook's iframe HTML
element triggering a toggle between your custom themes.

Example styles:

```css
:root [data-theme="theme1"] {
  --white: #000;
  --black: #fff;
}

:root [data-theme="theme2"] {
  --white: #fff;
  --black: #000;
}

:root [data-theme="theme3"] {
  --white: #696969;
  --black: #700404;
}
```

## Installation

```bash
npm i -D storybook-custom-theme-switcher
```

Add the addon to `.storybook/main.js`:

```js
module.exports = {
  addons: ["storybook-custom-theme-switcher"],
};
```

Add parameters options to `.storybook/preview.js`:

```js
export const parameters = {
  theme: {
    selector: "body (or your selector with data attribute)",
    dataAttr: "data-theme (or your data attribute)",
    // Put all theme options in themeOptions. You can name customeTheme as you want.
    themeOptions: {
      customeTheme1: "theme1 (or your name of light theme)",
      customeTheme2: "theme2 (or your name of dark theme)",
      customeTheme3: "theme3 (or your name of dark theme)",
    },
  },
};
```

## Usage

Click on the new theme popup in the toolbar to switch between theme modes.
