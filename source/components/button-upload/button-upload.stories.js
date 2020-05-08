import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';

import ButtonUpload from './index';

const stories = storiesOf('Button Upload', module);

const printRes = (data, list, error, size) => {
  console.log('images: ', data, 'list:', list, 'error:', error, 'size', size);
};

stories.add('Normal', () => <ButtonUpload onChange={printRes} />);

stories.add('As Div', () =>
  <ButtonUpload
    style={{
      border: '2px dashed #9b9b9b',
      padding: '20px',
      width: '250px',
      textAlign: 'center'
    }}
    as="div"
    onChange={printRes}
    btnText="Envie sua imagem"
  />);

stories.add(
  'With image Dimensions',
  () => (
    <ButtonUpload
      allowedDimensions={['300x250']}
      formatWhiteList={['.jpg', '.jpeg', '.png']}
      btnText="Apenas 300x250"
      onChange={printRes}
    />
  )
);

stories.add('With Limit', () =>
  <ButtonUpload
    btnText="Apenas 2 imagens"
    limit={2}
    onChange={printRes}
  />
);

stories.add('With Extension Whitelist', () =>
  <ButtonUpload
    formatWhiteList={['.jpg', '.jpeg']}
    btnText="Apenas JPG e JPEG"
    onChange={printRes}
  />
);

stories.add('With MaxFileSize', () =>
  <ButtonUpload
    maxFileSize={100000}
    btnText="Até 100KB"
    onChange={printRes}
  />
);

stories.add(
  'Showing Imagens',
  withState({ data: [] })(({ store }) => {
    const change = data => {
      store.set({ data });
    };
    return <div>
      <div>
        {store.state.data.map(base64 => <img width="150px" src={base64}/> )}
      </div>

      <br/>
      <br/>
      <br/>

      <ButtonUpload onChange={change} />
    </div>;
  })
);

