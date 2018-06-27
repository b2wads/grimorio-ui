import React from 'react';
import { storiesOf } from '@storybook/react';

import List from './index';

const stories = storiesOf('List', module);

stories.addWithInfo('Bordered', () => (
  <div>
    <List style="bordered">
      <List.Item>
        <span>List Item</span>
      </List.Item>
      <List.Item>
        <span>List Item</span>
      </List.Item>
      <List.Item>
        <span>List Item</span>
      </List.Item>
    </List>
  </div>
));

stories.addWithInfo('Normal', () => (
  <div>
    <List>
      <List.Item>
        <span>List Item</span>
      </List.Item>
      <List.Item>
        <span>List Item</span>
      </List.Item>
      <List.Item>
        <span>List Item</span>
      </List.Item>
    </List>
  </div>
));

stories.addWithInfo('Unstyled', () => (
  <div>
    <List>
      <List.Item>
        <span>List Item (unstyled)</span>
      </List.Item>
      <List.Item>
        <span>List Item (unstyled)</span>
      </List.Item>
      <List.Item>
        <span>List Item (unstyled)</span>
      </List.Item>
    </List>
  </div>
));

stories.addWithInfo('Disc', () => (
  <div>
    <List style="disc">
      <List.Item>
        <span>List Item (disc)</span>
      </List.Item>
      <List.Item>
        <span>List Item (disc)</span>
      </List.Item>
      <List.Item>
        <span>List Item (disc)</span>
      </List.Item>
    </List>
  </div>
));

stories.addWithInfo('Circle', () => (
  <div>
    <List style="circle">
      <List.Item>
        <span>List Item (circle)</span>
      </List.Item>
      <List.Item>
        <span>List Item (circle)</span>
      </List.Item>
      <List.Item>
        <span>List Item (circle)</span>
      </List.Item>
    </List>
  </div>
));

stories.addWithInfo('Decimal', () => (
  <div>
    <List style="decimal">
      <List.Item>
        <span>List Item (decimal)</span>
      </List.Item>
      <List.Item>
        <span>List Item (decimal)</span>
      </List.Item>
      <List.Item>
        <span>List Item (decimal)</span>
      </List.Item>
    </List>
  </div>
));

stories.addWithInfo('Zebra', () => (
  <div>
    <List style="zebra">
      <List.Item>
        <span>List Item impar</span>
      </List.Item>
      <List.Item>
        <span>List Item par</span>
      </List.Item>
      <List.Item>
        <span>List Item impar</span>
      </List.Item>
      <List.Item>
        <span>List Item par</span>
      </List.Item>
    </List>
  </div>
));

stories.addWithInfo('WithSubItem', () => (
  <div>
    <List style="decimal">
      <List.Item>
        <span>List Item (decimal) com Sub Item</span>
        <List style="disc">
          <List.Item>
            <span>Sub Item (disc)</span>
          </List.Item>
          <List.Item>
            <span>Sub Item (disc)</span>
          </List.Item>
          <List.Item>
            <span>Sub Item (disc)</span>
          </List.Item>
        </List>
      </List.Item>
      <List.Item>
        <span>List Item (decimal) com Sub Item</span>
        <List style="circle">
          <List.Item>
            <span>Sub Item (circle)</span>
          </List.Item>
          <List.Item>
            <span>Sub Item (circle)</span>
          </List.Item>
          <List.Item>
            <span>Sub Item (circle)</span>
          </List.Item>
        </List>
      </List.Item>
      <List.Item>
        <span>List Item (decimal) com Sub Item</span>
        <List style="decimal">
          <List.Item>
            <span>Sub Item (decimal)</span>
          </List.Item>
          <List.Item>
            <span>Sub Item (decimal)</span>
          </List.Item>
          <List.Item>
            <span>Sub Item (decimal)</span>
          </List.Item>
        </List>
      </List.Item>
    </List>
  </div>
));
