// import React from 'react';
// import { addParameters } from '@storybook/react';
import { parameters as reactParams } from "@storybook/addon-docs/dist/frameworks/react/config";
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import "../source/styl/variables.styl";
import "../source/styl/style.styl";
import "../source/styl/vendor/react-dates.styl";

export const parameters = {
  viewMode: 'docs',
  docs: {
    ...reactParams.docs,
    container: DocsContainer,
    page: DocsPage,
  },
};
