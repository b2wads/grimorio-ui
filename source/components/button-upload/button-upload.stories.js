import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';

import ButtonUpload from './index';
import Button from '../button'
import styles from './button-upload.styl';

const stories = storiesOf('Button Upload', module);

const printRes = (data, list, error, size) => {
  console.log('images: ', data, 'list:', list, 'error:', error, 'size', size);
};

stories.add('Normal', () => <ButtonUpload onChange={printRes} showTags/>);

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

stories.add('With Limit', () =>
  <ButtonUpload
    btnText="Apenas 2 imagens"
    limit={2}
    onChange={printRes}
    showTags
  />
);

stories.add('With Extension Whitelist', () =>
  <ButtonUpload
    formatWhiteList={['.jpg', '.jpeg']}
    btnText="Apenas JPG e JPEG"
    onChange={printRes}
    showTags
  />
);

stories.add('With MaxFileSize', () =>
  <ButtonUpload
    maxFileSize={100000}
    btnText="Até 100KB"
    onChange={printRes}
    showTags
  />
);

stories.add(
  'Without Tags',
  withState({ data: [], list: [] })(({ store }) => {
    const change = (data, list) => {
      store.set({ data, list });
    };

    const removeImage = (index) => {
      const listFiles = store.state.list.filter((_,i) => i !== index)
      const listData = store.state.data.filter((_,i) => i !== index)
      store.set({list: listFiles, data: listData})

    }

    return (
      <div>
        <div className={styles.contentList}>
          {store.state.data.map((base64, index) =>
            <div className={styles.wrapperImg}>
              <img width="150px" src={base64}/>
              <div>
                <Button className={styles.buttonRemove} onClick={() => removeImage(index)}>Remover</Button>
              </div>
              <br/>
              <br/>
            </div>
          )}
        </div>
        <br/>
        <ButtonUpload files={store.state.list} onChange={change} showTags={false} />
      </div>
    );
  })
);

