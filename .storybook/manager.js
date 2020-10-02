import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';

import brandImage from '../internals/logo/logo-grimorio-white.png';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Grimório✨',
    brandUrl: 'https://github.com/b2wads/grimorio-ui#readme',
    brandImage,

    // colorPrimary: '#5e4596',
    colorSecondary: '#7934d0',

    // UI
    appBg: '#282a36',
    appBorderRadius: 0,

    // Toolbar default and active colors
    barBg: '#282a36',
  }),
});
