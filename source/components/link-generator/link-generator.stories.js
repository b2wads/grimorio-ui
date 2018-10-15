import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import LinkGenerator from './link-generator-component';

const stories = storiesOf('LinkGenerator', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Generate', () => (
        <LinkGenerator
            onGenerateClick={res => console.log(res)}
            sites={[{value: 1, name: 'site 1'}]}
        />
    )
);

stories.addWithInfo('Finish', () => (
    <LinkGenerator
        stage="finished"
        onGenerateClick={res => console.log(res)}
        sites={[{value: 1, name: 'site 1'}]}
    />
)
);
