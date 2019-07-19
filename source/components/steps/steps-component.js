import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './steps.styl';
import Icon from '../icon/index';
import Button from '../button/index';
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
    return (
      <Fragment>
        <Panel central>
          <div className={cx(styles.steps)}>
            {this.props.data.map((step, index) => (
              <div
                className={cx(styles.stepsHolder, {
                  [styles.stepsHolderActive]: index === this.state.value,
                })}
              >
                <span className={cx(styles.stepsNumber)}>
                  {this.state.value > index ? <Icon name="check_circle_outline" size={21} /> : index + 1}
                </span>
                <span>{step.title}</span>
                {index + 1 < this.props.data.length && <div className={cx(styles.stepsHolderLine)} />}
              </div>
            ))}
          </div>
        </Panel>
        {this.props.children}
        <Fragment>
          {this.props.showButton &&
            <div style={{ marginTop: '20px' }}>
              <Button modifier="outline" color="variant" onClick={() => this.resetStep()}>Cancelar</Button>
              <Button onClick={() => this.incrementStep()}>Proxímo Passo</Button>
              <Button onClick={() => this.decrementStep()}>Voltar Passo</Button>
            </div>}
        </Fragment>
      </Fragment>
    );
  }
}

export default Steps;

Steps.propTypes = {
  data: PropTypes.array,
  current: PropTypes.string,
};
