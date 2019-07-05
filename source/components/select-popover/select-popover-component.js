import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
// import { sortBy, isEqual } from 'lodash';

import Popover from '../popover';
import Button from '../button';
import styles from './select-popover.styl';
import { FormControl } from '../form';

class SelectPopover extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        checked: PropTypes.bool,
      })
    ).isRequired,
    onSubmit: PropTypes.func,
    title: PropTypes.string,
    component: PropTypes.node.isRequired,
    position: PropTypes.oneOf(['bottomRight', 'bottomLeft', 'topRight', 'topLeft']),
    header: PropTypes.string,
    submitOnChange: PropTypes.bool,
  };
  static defaultProps = {
    onSubmit: () => {},
    position: 'bottomRight',
    submitOnChange: false,
  };

  constructor(props) {
    super(props);

    const options = this.generateOptions([...props.options]);

    this.state = {
      isOpen: false,
      prevOptions: { ...options },
      nextOptions: { ...options },
      touched: false,
      flatOptions: props.options.map(obj => obj.key),
    };

    this.toggleIsOpen = this.toggleIsOpen.bind(this);
    this.toggleCheck = this.toggleCheck.bind(this);
    this.submit = this.submit.bind(this);
    this.dismiss = this.dismiss.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.uncheckAll = this.uncheckAll.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  generateOptions(optionsArray) {
    const options = {};
    optionsArray.forEach(obj => {
      options[obj.key] = obj.hasOwnProperty('checked') ? obj.checked : true;
    });

    return options;
  }

  hasKeyChanged(arr) {
    return !arr.every(obj => this.state.flatOptions.includes(obj.key));
  }

  componentDidUpdate() {
    if (this.hasKeyChanged(this.props.options)) {
      const options = this.generateOptions(this.props.options);
      Object.keys(options).forEach(key => {
        options[key] = this.state.nextOptions.hasOwnProperty(key) ? this.state.nextOptions[key] : options[key];
      });

      this.setState({
        flatOptions: this.props.options.map(obj => obj.key),
        prevOptions: { ...options },
        nextOptions: { ...options },
      });
    }
  }

  toggleIsOpen() {
    this.setState({ isOpen: !this.state.isOpen }, () => {
      if (!this.state.isOpen) {
        this.dismiss();
      }
    });
  }

  toggleCheck(key) {
    const { nextOptions } = this.state;
    const options = { ...nextOptions };
    const { submitOnChange } = this.props;

    options[key] = !options[key];
    this.setState({ nextOptions: options, touched: true }, () => {
      submitOnChange && this.submitOnChange();
    });
  }

  checkAll() {
    const options = { ...this.state.nextOptions };
    const { submitOnChange } = this.props;
    Object.keys(options).forEach(key => {
      options[key] = true;
    });

    this.setState({ nextOptions: options, touched: true }, () => {
      submitOnChange && this.submitOnChange();
    });
  }

  uncheckAll() {
    const options = { ...this.state.nextOptions };
    const { submitOnChange } = this.props;
    Object.keys(options).forEach(key => {
      options[key] = false;
    });

    this.setState({ nextOptions: options, touched: true }, () => {
      submitOnChange && this.submitOnChange();
    });
  }

  submit() {
    const { onSubmit } = this.props;
    const { nextOptions } = this.state;

    onSubmit({ ...nextOptions });
    this.setState({ prevOptions: { ...nextOptions }, isOpen: false, touched: false });
  }

  submitOnChange() {
    const { onSubmit } = this.props;
    const { nextOptions } = this.state;

    onSubmit({ ...nextOptions });
    this.setState({ prevOptions: { ...nextOptions } });
  }

  dismiss() {
    const { prevOptions } = this.state;

    this.setState({ nextOptions: { ...prevOptions }, isOpen: false, touched: false });
  }

  isValid() {
    const { nextOptions, touched } = this.state;
    return touched && !!Object.values(nextOptions).filter(obj => obj === true).length;
  }

  render() {
    const { component, title, options, position, header, submitOnChange, ...rest } = this.props;
    return (
      <Popover
        actionComponent={React.cloneElement(component, { onClick: this.toggleIsOpen })}
        isOpen={this.state.isOpen}
        position={position}
        onDismiss={this.dismiss}
        {...rest}
      >
        {header && <div className={styles.selectPopoverHeader}><h2>{header}</h2></div>}
        <div className={styles.selectPopoverContent}>
          {title && <p>{title}</p>}
          <span className={styles.selectDeselectAll} onClick={this.checkAll}>Marcar todas</span>
          <span className={styles.selectDeselectAll} onClick={this.uncheckAll}>Desmarcar todas</span>
          <section className={styles.form}>
            {options &&
              options.map(obj => (
                <div className={styles.formItem} key={`formItem-${obj.key}`}>
                  <FormControl
                    className={styles.checkbox}
                    type="checkbox"
                    checked={!!this.state.nextOptions[obj.key]}
                    onChange={() => this.toggleCheck(obj.key)}
                    id={`checkbox-${obj.key}`}
                  />
                  <label
                    className={styles.checkboxLabel}
                    key={`checkboxLabel-${obj.key}`}
                    htmlFor={`checkbox-${obj.key}`}
                  >
                    {obj.label}
                  </label>
                </div>
              ))}
            {!submitOnChange &&
              <footer className={styles.formActions}>
                <Button color="variant" modifier="outline" size="medium" onClick={this.dismiss}>Cancelar</Button>
                <Button size="medium" onClick={this.submit} disabled={!this.isValid()}>Aplicar</Button>
              </footer>}
          </section>
        </div>
      </Popover>
    );
  }
}

export default CSSModules(SelectPopover, styles);
