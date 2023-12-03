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

NPM / Yarn
```bash
npm i -D storybook-custom-theme-switcher

yarn add storybook-custom-theme-switcher -D
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
    selector: "body",
    dataAttr: "data-theme",
    /* Put all theme options in
    themeOptions. You can name
    customeTheme as you want.*/
    themeOptions: {
      customeTheme1: "theme1",
      customeTheme2: "theme2",
      customeTheme3: "theme3",
    },
    defaultTheme: "theme1",
  },
};
```

## Parameters

The `theme` parameter accept an array of `Theme` object.

Each `Theme` is an object with the following properties:

* `selector` (`string` - default: 'body'): Target element to which the data Attribute will be applied.
* `dataAttr` (`string` - default: 'data-theme'): The data attribute that will be applied.
* `themeOptions` (`{ [key: string]: string }` - default: {}): The themes you want to use as an `Object`.
* `defaultTheme` (`string` - default: ''): The name of the theme that should be used on default.

## Usage

Click on the new theme popup in the toolbar to switch between theme modes.
