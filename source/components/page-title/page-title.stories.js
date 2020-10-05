import React from 'react';

import PageTitle from './page-title-component';
import Button from '../button';

export default {
  title: 'PageTitle',
  component: PageTitle,
};

export const Normal = () => (
  <PageTitle isMobile={false} title="Dashboard" sideComponent={<Button>Hello</Button>} />
);
export const Mobile = () => (
  <PageTitle isMobile title="Dashboard" sideComponent={<Button>Hello</Button>} />
);
