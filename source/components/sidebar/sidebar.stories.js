import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import Sidebar from './index';
import Svg from '../svg';
import Menu from '../menu';
import MenuItem from '../menu/elements//menu-item';
import Accordion from '../accordion';
import AccordionTitle from '../accordion/elements/accordion-title';
import AccordionContent from '../accordion/elements/accordion-content';


const stories = storiesOf('Sidebar', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Default', () => {
  const activeIndex = number('activeIndex', -1);

  return (
    <div>
      <Sidebar>
        <Svg width={48} height={48} src="logo/example" />
        <Accordion>
          <Menu>
            <MenuItem>
              <AccordionTitle
                active={activeIndex === 0}
                index={0}
                onClick={action('clicked!!')}
              >Dashboard</AccordionTitle>
              <AccordionContent active={activeIndex === 0}>
                <Menu>
                  <MenuItem>Default</MenuItem>
                  <MenuItem>eCommerce</MenuItem>
                  <MenuItem>News Portal</MenuItem>
                </Menu>
              </AccordionContent>
            </MenuItem>
            <MenuItem>
              <AccordionTitle
                active={activeIndex === 1}
                index={1}
                onClick={action('clicked!!')}
              >Charts</AccordionTitle>
              <AccordionContent active={activeIndex === 1}>
                <Menu>
                  <MenuItem>Test</MenuItem>
                </Menu>
              </AccordionContent>
            </MenuItem>
          </Menu>
        </Accordion>
      </Sidebar>
    </div>
  );
});
