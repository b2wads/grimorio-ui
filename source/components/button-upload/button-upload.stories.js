import React from 'react';
import { withState } from '../../helpers/storybook';

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

export const Normal = () => (
  <div>
    <ButtonUpload onChange={printRes} showTags />
    <ButtonUpload onChange={printRes} withDrop showTags />
  </div>
);

export const WithImageDimensions = () => (
  <ButtonUpload
    allowedDimensions={['300x250']}
    formatWhiteList={['.jpg', '.jpeg', '.png']}
    btnText="Apenas 300x250"
    onChange={printRes}
    showTags
  />
);

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

export const WithDropArea = () => (
  <ButtonUpload onChange={printRes} showTags withDrop dropText="Texto custom de drop" />
);

export const WithoutTags = withState({ data: [], list: [] }, store => {
  const change = (data, list) => {
    store.set({ data, list });
  };

  const removeImage = (index) => {
    const listFiles = store.state.list.filter((_, i) => i !== index);
    const listData = store.state.data.filter((_, i) => i !== index);
    store.set({ list: listFiles, data: listData });
  };

  return (
    <div className={styles.contentList}>
      {store.state.data.map((base64, index) => (
        <div className={styles.wrapperImg}>
          <img width="150px" src={base64} />
          <div>
            <Button className={styles.buttonRemove} onClick={() => removeImage(index)}>
              Remover
            </Button>
          </div>
        </div>
      ))}
      <br />
      <ButtonUpload withDrop files={store.state.list} onChange={change} showTags={false} />
    </div>
  );
});

export const Disabled = () => (
  <div>
    <ButtonUpload disabled onChange={printRes} showTags />
    <ButtonUpload disabled onChange={printRes} withDrop showTags />
  </div>
);
