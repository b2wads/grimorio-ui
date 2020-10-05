import React from 'react';
import { withState } from '@dump247/storybook-state';

import Accordion, { AccordionTitle, AccordionContent } from './index';

export default {
  title: 'Accordion',
  component: Accordion,
};

const renderContent = () => {
  return (
    <ul>
      <li>Default</li>
      <li>eCommerce</li>
      <li>news Portal</li>
    </ul>
  );
};

const options = {
  default: 'default',
  dark: 'dark',
};

export const Default = () => {
  const isExclusive = true;
  return (
    <Accordion
      exclusive={isExclusive}
      type="default"
      panels={[
        { icon: 'insert_chart', title: 'Dashboard', content: renderContent() },
        { icon: 'dashboard', title: 'Charts', content: 'segundo conteudo' },
      ]}
    />
  );
};

export const Manual = withState({ active: -1 })(({ store }) => {
  const getActive = (index) => {
    return store.state.active === index;
  };

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { active } = store.state;
    const newIndex = active === index ? -1 : index;

    store.set({ active: newIndex });
  };

  return (
    <Accordion>
      <AccordionTitle active={getActive(0)} index={0} onClick={handleClick}>
        Um --
      </AccordionTitle>
      <AccordionContent active={getActive(0)}>primeiro conteudo --</AccordionContent>
      <AccordionTitle active={getActive(1)} index={1} onClick={handleClick}>
        Dois --
      </AccordionTitle>
      <AccordionContent active={getActive(1)}>segundo conteudo --</AccordionContent>
    </Accordion>
  );
});
