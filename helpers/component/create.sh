#! /bin/bash

capitalize() {
  IFS="-"
  words=($name)

  output=""

  for word in "${words[@]}"; do
    # add capitalized 1st letter
    output+="$(tr '[:lower:]' '[:upper:]' <<<"${word:0:1}")"
    # add lowercase version of rest of word
    output+="$(tr '[:upper:]' '[:lower:]' <<<"${word:1}")"
  done

  unset IFS

  capitalizeName=$output
}

camelCase() {
  IFS="-"
  words=($name)

  output=""

  for word in "${words[@]}"; do
    if [ ${words[0]} == $word ]
    then
      output+="$(tr '[:upper:]' '[:lower:]' <<<"${word}")"
    else
      output+="$(tr '[:lower:]' '[:upper:]' <<<"${word:0:1}")"
      output+="$(tr '[:upper:]' '[:lower:]' <<<"${word:1}")"
    fi
  done

  unset IFS

  camelCase=$output
}

clear

path=$1
name=$2

capitalize
camelCase

echo '
       **;          `-;*iiiii*******;-
      `-;-  ;-    -riiiiiiiiiiiiir-`
  `--``        -immoiiiiiiiii*;-      `-`   ------    --  --`   --`     --    ------    --    ----
-;;;;;;;;;;r;;*mmgggggmoiii*-      -*ii*;  `ii;;rii;  ii  iii;-*ii-    -i-    ii;;rii-  ii  ;ii;rii-
;;;;;;;;;;;;*iiiiioggggggmo       ri;` ``` `i*   `ii` ii  iirii*ii-   `---    ii   `ii- ii -ii   -ii
-;;;;;;;;;;;;;*iiiiiomgggg*      -i;  -iii `i* --;i*  ii  ii -; *i- -*ii*i*-  ii --;i*  ii `ii;--ri;
 `-;;;;;;;;;;;;;riiiiiiiio;      -i*   -ii `i* -ii;   ii  ii    *i- ii`  `ii- ii -ii;   ii  `-;*r;-
    --;;;;;;;;;;;;;*iiiiiii;      ;i*-`-ii `i*  -i*`  ii  ii    *i- *i;---ii` ii  -ii`  ii
 -;;   `--;;;;;;;;;;;;*iiiii*-     -;*iiii `*r   ;*;  **  **    ;*-  ;*ii*;`  **   -*;  **  ;******-
 -;;`        `-;;;;;;;;;;;;r**;-`
    --      -;  `--;;;;;;;;;;;;;;;-`
            --`      `----;;;;;;;--`

'

echo -ne '[                     ] creating component...                       \r'

mkdir $path/$name

echo -ne '[###                  ] created folder!                       \r'
sleep 0.5

touch $path/$name/index.js
cat > $path/$name/index.js <<EOF
import $capitalizeName from './$name-component';

export default $capitalizeName;
EOF

echo -ne '[######               ] created index!                       \r'
sleep 0.5

touch $path/$name/$name-component.js
cat > $path/$name/$name-component.js <<EOF
import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './$name.styl';

const $capitalizeName = ({ name }) => {
  return <div className={styles.default}>{name}</div>;
};

$capitalizeName.propTypes = {
  name: PropTypes.string,
};

$capitalizeName.defaultProps = {
  name: '$capitalizeName',
};

export default memo($capitalizeName);
EOF

echo -ne '[#########            ] created react component!                       \r'
sleep 0.5

touch $path/$name/$name.stories.js
cat > $path/$name/$name.stories.js <<EOF
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import $capitalizeName from './$name-component';

const stories = storiesOf('$capitalizeName', module);

stories.addDecorator(withKnobs);

stories.add('Normal', () => <$capitalizeName />);
EOF

echo -ne '[############         ] created story!                       \r'
sleep 0.5

touch $path/$name/$name.spec.js
cat > $path/$name/$name.spec.js <<EOF
import '../../../internals/test/helper';

import $capitalizeName from './$name-component';

describe('$capitalizeName component', () => {

  it('renders correctly', () => {
    const wrapper = shallow(
      <$capitalizeName />
    );

    expect(wrapper.length).toEqual(1);
  });
});
EOF

echo -ne '[###############      ] created test!                       \r'
sleep 0.5

touch $path/$name/$name.styl
cat > $path/$name/$name.styl <<EOF
/* ==========================================================================
   Variables
========================================================================== */


/* ==========================================================================
   Placeholders
========================================================================== */
\$default {}

/* ==========================================================================
   $capitalizeName Elements
========================================================================== */

/* ==========================================================================
   $capitalizeName Props
========================================================================== */

/* Default
 ================ */

.default {
  @extend \$default;
}
EOF

echo -ne '[##################   ] created styles!                       \r'
sleep 0.5

echo -ne '[#####################] created component!                       \r'
sleep 0.5

echo -ne '\n'
