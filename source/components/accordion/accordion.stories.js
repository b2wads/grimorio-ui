import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs';

import Accordion from './index';
import AccordionTitle from './elements/accordion-title';
import AccordionContent from './elements/accordion-content';

const stories = storiesOf('Accordion', module);

stories.addDecorator(withKnobs);

const renderContent = () => {
  return (
    <ul>
      <li>Default</li>
      <li>eCommerce</li>
      <li>news Portal</li>
    </ul>
  );
}

const options = {
  default: 'default',
  dark: 'dark',
};

stories.addWithInfo(
  'Default',
  `This is the basic usage with the accordion.`,
  () => {
    const isExclusive = boolean('exclusive', true);
    return (
      <Accordion exclusive={isExclusive} type={select('Theme', options, 'default', '0')}  panels={[
        { icon: 'insert_chart', title: 'Dashboard', content: renderContent() },
        { icon: 'dashboard', title: 'Charts', content: 'segundo conteudo' }
      ]} />
    );
  }
);

stories.addWithInfo(
  'Manual',``,
  () => {
    const activeIndex = number('activeIndex', -1);

    return (
      <Accordion>
        <AccordionTitle
          active={activeIndex === 0}
          index={0}
          onClick={action('clicked!!')}
        >Um --</AccordionTitle>
        <AccordionContent active={activeIndex === 0}>primeiro conteudo --</AccordionContent>
        <AccordionTitle
          active={activeIndex === 1}
          index={1}
          onClick={action('clicked!!')}
        >Dois --</AccordionTitle>
        <AccordionContent active={activeIndex === 1}>segundo conteudo --</AccordionContent>
      </Accordion>
    )
  }
);
