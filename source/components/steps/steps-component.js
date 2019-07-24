import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './steps.styl';
import Icon from '../icon/index';
// import Button from '../button/index';
import Panel from '../panel/index';

class Steps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    };
  }

  incrementStep() {
    this.setState({ value: this.state.value + 1 });
  }

  decrementStep() {
    this.setState({ value: this.state.value - 1 });
  }

  resetStep() {
    this.setState({ value: 0 });
  }

  render() {
    const { current, data } = this.props;

    return (
      <Fragment>
        <Panel central>
          <div className={styles.steps}>
            {data.map((step, index) => (
              <div
                className={cx(styles.stepsHolder, {
                  [styles.StepsHolderActive]: step.isComplete,
                  [styles.stepsCurrent]: step.name === current,
                })}
              >
                <span className={cx(styles.stepsNumber, { [styles.currentNumber]: step.name === current })}>
                  {step.isComplete ? <Icon name="check" size={20} /> : index + 1}
                </span>
                <span>{step.title}</span>
                {index + 1 < data.length && <div className={styles.stepsHolderLine} />}
              </div>
            ))}
          </div>
        </Panel>
      </Fragment>
    );
  }
}

export default Steps;

Steps.propTypes = {
  data: PropTypes.array,
  current: PropTypes.string,
};
