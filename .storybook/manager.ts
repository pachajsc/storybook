import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const theme = create({
  base: "light",

  colorPrimary: '#2b94b3',
  colorSecondary: '#690295',

  // UI
  appBorderRadius: 6,

  // Text colors
  textColor: '#303333',
  textInverseColor: '#8f9899',

  // Toolbar default and active colors
  barTextColor: '#303333',
  barSelectedColor: '#690295',
  barBg: '#fafafa',

  brandTitle: "",
  brandUrl: "Forms",
  //brandImage: "https://static.iebschool.com/test-ana-19/www3/image/logo-iebs-10-tagline.png",
});

addons.setConfig({
  theme: theme,
});
