import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './steps.styl';
import Icon from '../icon/index';
import Panel from '../panel/index';
import { uniqueId } from '../../helpers';

const Steps = ({ data, current }) => {
  return (
    <Panel>
      <div className={styles.steps}>
        {data.map((step, index) => (
          <div
            className={cx(styles.stepsHolder, {
              [styles.stepsHolderActive]: step.isComplete,
              [styles.stepsCurrent]: step.name === current,
            })}
            key={uniqueId()}
          >
            <span className={cx(styles.stepsNumber, { [styles.currentNumber]: step.name === current })}>
              {step.isComplete ? <Icon name="check" className={styles.icon} size={16} /> : index + 1}
            </span>
            <span>{step.title}</span>
            {index + 1 < data.length && <div className={styles.stepsHolderLine} />}
          </div>
        ))}
      </div>
    </Panel>
  );
};

export default Steps;

Steps.propTypes = {
  data: PropTypes.array,
  current: PropTypes.string,
};
