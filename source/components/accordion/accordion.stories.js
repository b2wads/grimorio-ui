import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import Accordion, { AccordionTitle, AccordionContent } from './index';

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
  withState({ active: -1 })(({ store }) => {
    const getActive = (index) => {
      return store.state.active === index;
    }

    const handleClick = (e, titleProps) => {
      const { index } = titleProps;
      const { active } = store.state;
      const newIndex = active === index ? -1 : index;

      store.set({ active: newIndex });
    }

    return (
      <Accordion>
        <AccordionTitle
          active={getActive(0)}
          index={0}
          onClick={handleClick}
        >Um --</AccordionTitle>
        <AccordionContent active={getActive(0)}>primeiro conteudo --</AccordionContent>
        <AccordionTitle
          active={getActive(1)}
          index={1}
          onClick={handleClick}
        >Dois --</AccordionTitle>
        <AccordionContent active={getActive(1)}>segundo conteudo --</AccordionContent>
      </Accordion>
    )
  }
));
