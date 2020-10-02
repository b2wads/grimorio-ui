import React from 'react';
import { storiesOf } from '@storybook/react';

import PageTitle from './page-title-component';
import Button from '../button';

const stories = storiesOf('PageTitle', module);

stories.add('Normal', () => <PageTitle isMobile={false} title="Dashboard" sideComponent={<Button>Hello</Button>} />);

stories.add('Mobile', () => <PageTitle isMobile title="Dashboard" sideComponent={<Button>Hello</Button>} />);
