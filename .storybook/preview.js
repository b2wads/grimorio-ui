// import React from 'react';
import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import "../source/styl/variables.styl";
import "../source/styl/style.styl";
import "../source/styl/vendor/react-dates.styl";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
