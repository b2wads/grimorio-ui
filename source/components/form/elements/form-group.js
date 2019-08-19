import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';

import { property } from 'helpers';
// styles
import styles from './form-group.styl';

import { Provider } from '../form-context';

const { randomId } = property;

class FormGroup extends PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      formGroup: {
        controlId: props.controlId,
        validationState: props.validationState,
      },
    };
  }

  static defaultProps = {
    controlId: randomId(),
    validationState: undefined,
  };

  static propTypes = {
    controlId: PropTypes.string,
    validationState: PropTypes.oneOf(['success', 'warning', 'error']),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.validationState !== this.props.validationState) {
      this.setState({
        formGroup: {
          ...this.state.formGroup,
          validationState: this.props.validationState,
        },
      });
    }
  }

  render() {
    const { validationState, children, className } = this.props;

    const validationStateClass = `has-${validationState}`;

    const formGroupClass = classNames(className, styles['form-group'], styles['form-group--horizontal'], {
      [styles[validationStateClass]]: validationState,
    });

    return (
      <Provider value={this.state}>
        <div className={formGroupClass}>
          {children}
        </div>
      </Provider>
    );
  }
}

export default CSSModules(FormGroup, styles);
