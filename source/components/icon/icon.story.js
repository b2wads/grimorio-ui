import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Icon from './index';

const stories = storiesOf('Icon', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
  <div>
    <Icon />
    <Icon name="bars" />
    <Icon name="arrows-alt" />
    <Icon name="close" />
    <Icon name="search" />
    <Icon name="sort-desc" />
    <Icon name="sort-asc" />
    <Icon name="cog" />
    <Icon name="book" />
    <Icon name="image" />
    <Icon name="table" />
    <Icon name="plus" />
    <Icon name="copy" />
    <Icon name="pause" />
    <Icon name="play" />
    <Icon name="edit" />
    <Icon name="trash" />
    <Icon name="hourglass-2" />
    <Icon name="chain" />
    <Icon name="question" />
    <Icon name="tag" />
    <Icon name="th" />
    <Icon name="home" />
    <Icon name="warning" />
    <Icon name="check" />
    <Icon name="exit" />
    <Icon name="info-circle" />
    <Icon name="shield" />
    <Icon name="calendar" />
  </div>
));

stories.addWithInfo('Size', () => (
  <div>
    <Icon size="4rem" />
    <Icon size="4rem" name="bars" />
    <Icon size="4rem" name="arrows-alt" />
    <Icon size="4rem" name="close" />
    <Icon size="4rem" name="search" />
    <Icon size="4rem" name="sort-desc" />
    <Icon size="4rem" name="sort-asc" />
    <Icon size="4rem" name="cog" />
    <Icon size="4rem" name="book" />
    <Icon size="4rem" name="image" />
    <Icon size="4rem" name="table" />
    <Icon size="4rem" name="plus" />
    <Icon size="4rem" name="copy" />
    <Icon size="4rem" name="pause" />
    <Icon size="4rem" name="play" />
    <Icon size="4rem" name="edit" />
    <Icon size="4rem" name="trash" />
    <Icon size="4rem" name="hourglass-2" />
    <Icon size="4rem" name="chain" />
    <Icon size="4rem" name="question" />
    <Icon size="4rem" name="tag" />
    <Icon size="4rem" name="th" />
    <Icon size="4rem" name="home" />
    <Icon size="4rem" name="warning" />
    <Icon size="4rem" name="check" />
    <Icon size="4rem" name="exit" />
    <Icon size="4rem" name="info-circle" />
    <Icon size="4rem" name="shield" />
    <Icon size="4rem"  name="calendar" />
  </div>
));

stories.addWithInfo('Color', () => (
  <div>
    <Icon color='#ffcc00' />
    <Icon color="#ffcc00" name="bars" />
    <Icon color="#ffcc00" name="arrows-alt" />
    <Icon color="#ffcc00" name="close" />
    <Icon color="#ffcc00" name="search" />
    <Icon color="#ffcc00" name="sort-desc" />
    <Icon color="#ffcc00" name="sort-asc" />
    <Icon color="#ffcc00" name="cog" />
    <Icon color="#ffcc00" name="book" />
    <Icon color="#ffcc00" name="image" />
    <Icon color="#ffcc00" name="table" />
    <Icon color="#ffcc00" name="plus" />
    <Icon color="#ffcc00" name="copy" />
    <Icon color="#ffcc00" name="pause" />
    <Icon color="#ffcc00" name="play" />
    <Icon color="#ffcc00" name="edit" />
    <Icon color="#ffcc00" name="trash" />
    <Icon color="#ffcc00" name="hourglass-2" />
    <Icon color="#ffcc00" name="chain" />
    <Icon color="#ffcc00" name="question" />
    <Icon color="#ffcc00" name="tag" />
    <Icon color="#ffcc00" name="th" />
    <Icon color="#ffcc00" name="home" />
    <Icon color="#ffcc00" name="warning" />
    <Icon color="#ffcc00" name="check" />
    <Icon color="#ffcc00" name="exit" />
    <Icon color="#ffcc00" name="info-circle" />
    <Icon color="#ffcc00" name="shield" />
    <Icon color="#ffcc00" name="calendar" />
  </div>
));
