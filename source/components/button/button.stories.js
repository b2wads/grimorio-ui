import React from 'react';
import Button from './index';

// export default {
//   title: 'Button',
//   component: Button,
// };

export const Color = () => (
  <div>
    <Button color="primary" className="teste">
      Primary
    </Button>
    &nbsp;
    <Button color="secondary">Secondary</Button>&nbsp;
    <Button color="variant">Variant</Button>&nbsp;
    <Button color="clean" size="small">
      Clean
    </Button>
    &nbsp;
    <Button color="transparent">Transparent</Button>
  </div>
);

export const Modifier = () => (
  <div>
    <Button color="variant" modifier="outline">
      Variant --Outline
    </Button>
    &nbsp;
    <Button color="primary" modifier="outline">
      Primary --Outline
    </Button>
    &nbsp;
    <span color={{ background: 'lightgray' }}>
      <Button color="clean" modifier="inverted" size="small">
        Clean --Inverted
      </Button>
      &nbsp;
    </span>
  </div>
);

export const Size = () => (
  <div>
    <Button size="none">None</Button>&nbsp;
    <Button size="tiny">Tiny</Button>&nbsp;
    <Button size="small">Small</Button>&nbsp;
    <Button>Medium</Button>&nbsp;
    <Button size="large">Large</Button>&nbsp;
    <br />
    <br />
    <Button modifier="outline" size="none">
      None
    </Button>
    &nbsp;
    <Button modifier="outline" size="tiny">
      Tiny
    </Button>
    &nbsp;
    <Button modifier="outline" size="small">
      Small
    </Button>
    &nbsp;
    <Button modifier="outline">Medium</Button>&nbsp;
    <Button modifier="outline" size="large">
      Large
    </Button>
    <br />
    <br />
    <Button loading size="none">
      None
    </Button>
    &nbsp;
    <Button loading size="tiny">
      Tiny
    </Button>
    &nbsp;
    <Button loading size="small">
      Small
    </Button>
    &nbsp;
    <Button loading>Medium</Button>&nbsp;
    <Button loading size="large">
      Large
    </Button>
    &nbsp;
    <br />
    <br />
    <Button iconRight="person" size="none">
      None
    </Button>
    &nbsp;
    <Button iconRight="person" size="tiny">
      Tiny
    </Button>
    &nbsp;
    <Button iconRight="person" size="small">
      Small
    </Button>
    &nbsp;
    <Button iconRight="person">Medium</Button>&nbsp;
    <Button iconRight="person" size="large">
      Large
    </Button>
    &nbsp;
  </div>
);

export const Loading = () => (
  <div>
    <Button onClick={() => alert('btn is disabled while loading')} loading color="primary">
      Primary
    </Button>
    &nbsp;
    <Button loading color="clean" size="small">
      Clean Small
    </Button>
    &nbsp;
    <Button color="variant" modifier="outline" loading>
      Variant --Outline
    </Button>
    &nbsp;
  </div>
);

export const WithIcon = () => (
  <div>
    <Button iconLeft="person" color="primary">
      Primary Medium
    </Button>
    &nbsp;
    <Button color="secondary" size="small" iconRight="insert_link">
      Secondary Small
    </Button>
    &nbsp;
    <Button color="clean" iconLeft="person" iconRight="keyboard_arrow_down" size="small">
      Clean Small
    </Button>
    &nbsp;
    <Button iconLeft="person" color="primary" modifier="outline">
      Outline
    </Button>
    &nbsp;
  </div>
);

WithIcon.story = {
  name: 'With icon',
};

export const States = () => (
  <div>
    <Button color="primary">Normal</Button>&nbsp;
    <Button color="primary" disabled>
      Disabled
    </Button>
    &nbsp;
    <Button color="primary" active>
      Active
    </Button>
    &nbsp;
    <Button color="variant" modifier="outline" active>
      Variant Active
    </Button>
    &nbsp;
  </div>
);

export const Disabled = () => (
  <div>
    <Button color="primary" disabled>
      Primary
    </Button>
    &nbsp;
    <Button color="secondary" disabled>
      Secondary
    </Button>
    &nbsp;
    <Button color="clean" size="small" disabled>
      Clean
    </Button>
    &nbsp;
    <Button color="variant" modifier="outline" disabled>
      Variant Outline
    </Button>
    &nbsp;
  </div>
);
