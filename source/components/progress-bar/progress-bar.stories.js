import React from 'react';
import { withState } from '@dump247/storybook-state';

import ProgressBar from './progress-bar-component';
import Button from '../button';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
};

export const Normal = withState({ percent: 0 })(({ store }) => {
  const changePercent = () => {
    store.set({ percent: parseFloat((Math.random() * 100).toFixed(0)) });
  };

  return (
    <div>
      <Button onClick={changePercent}>Change Percent Randomly</Button>
      <br />
      <br />

      <p>Primary / With State</p>
      <ProgressBar progress={store.state.percent} />
      <br />
    </div>
  );
});

export const Temas = () => {
  return (
    <div>
      <p>Primary</p>
      <ProgressBar progress={30} className="my-progress" theme="primary" />
      <br />
      <p>Support</p>
      <ProgressBar progress={30} className="my-progress" theme="support" />
      <br />
      <p>Error</p>
      <ProgressBar progress={30} className="my-progress" theme="error" />
      <br />
      <p>Warning</p>
      <ProgressBar progress={50} className="my-progress" theme="warning" />
      <br />
      <p>Success</p>
      <ProgressBar progress={70} className="my-progress" theme="success" />
    </div>
  );
};
