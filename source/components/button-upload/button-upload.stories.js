import React from 'react';
import { useState } from '../../helpers/storybook';

import ButtonUpload from './index';
import Button from '../button';
import styles from './button-upload.styl';

export default {
  title: 'Button Upload',
  component: ButtonUpload,
};

const printRes = (data, list, error, size) => {
  console.log('images: ', data, 'list:', list, 'error:', error, 'size', size);
};

stories.add('Normal', () => (
  <div>
    <ButtonUpload onChange={printRes} showTags/>
    <ButtonUpload onChange={printRes} withDrop showTags/>
  </div>
));

stories.add(
  'With image Dimensions',
  () => (
    <ButtonUpload
      allowedDimensions={['300x250']}
      formatWhiteList={['.jpg', '.jpeg', '.png']}
      btnText="Apenas 300x250"
      onChange={printRes}
      showTags
    />
  )
);

export const WithImageDimensions = () => (
  <ButtonUpload
    allowedDimensions={['300x250']}
    formatWhiteList={['.jpg', '.jpeg', '.png']}
    btnText="Apenas 300x250"
    onChange={printRes}
    showTags
    withDrop
  />
);

WithImageDimensions.story = {
  name: 'With image Dimensions',
};

export const WithLimit = () => (
  <ButtonUpload btnText="Apenas 2 imagens" limit={2} onChange={printRes} showTags />
);

export const WithExtensionWhitelist = () => (
  <ButtonUpload
    formatWhiteList={['.jpg', '.jpeg']}
    btnText="Apenas JPG e JPEG"
    onChange={printRes}
    showTags
  />
);

export const WithMaxFileSize = () => (
  <ButtonUpload maxFileSize={100000} btnText="Até 100KB" onChange={printRes} showTags />
);

stories.add('With Drop Area', () =>
  <ButtonUpload
    onChange={printRes}
    showTags
    withDrop
    dropText="Texto custom de drop"
  />
);

stories.add(
  'Without Tags',
  withState({ data: [], list: [] })(({ store }) => {
    const change = (data, list) => {
      store.set({ data, list });
    };

export const WithoutTags = useState({ data: [], list: [] }, store => {
  const change = (data, list) => {
    store.set({ data, list });
  };

  const removeImage = (index) => {
    const listFiles = store.state.list.filter((_, i) => i !== index);
    const listData = store.state.data.filter((_, i) => i !== index);
    store.set({ list: listFiles, data: listData });
  };

  return (
    <div>
      <div className={styles.contentList}>
        {store.state.data.map((base64, index) => (
          <div className={styles.wrapperImg}>
            <img width="150px" src={base64} />
            <div>
              <Button className={styles.buttonRemove} onClick={() => removeImage(index)}>
                Remover
              </Button>
            </div>
          )}
        </div>
        <br/>
        <ButtonUpload withDrop files={store.state.list} onChange={change} showTags={false} />
      </div>
    );
  })
);

stories.add('Disabled', () => (
  <div>
    <ButtonUpload disabled onChange={printRes} showTags/>
    <ButtonUpload disabled onChange={printRes} withDrop showTags/>
  </div>
));

