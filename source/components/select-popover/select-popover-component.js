import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Popover from '../popover';
import Button from '../button';
import styles from './select-popover.styl';
import { FormControl } from '../form';

class SelectPopover extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.string,
      })
    ).isRequired,
    onSubmit: PropTypes.func,
    title: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
  };
  static defaultProps = {
    onSubmit: () => {},
  };

  constructor(props) {
    super(props);

    const options = this.generateOptions(props.options);

    this.state = {
      isOpen: true,
      prevOptions: { ...options },
      nextOptions: { ...options },
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
      options[obj.key] = true;
    });

    return options;
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

    options[key] = !options[key];
    this.setState({ nextOptions: options });
  }

  checkAll() {
    const options = { ...this.state.nextOptions };
    Object.keys(options).forEach(key => {
      options[key] = true;
    });

    this.setState({ nextOptions: options });
  }

  uncheckAll() {
    const options = { ...this.state.nextOptions };
    Object.keys(options).forEach(key => {
      options[key] = false;
    });

    this.setState({ nextOptions: options });
  }

  submit() {
    const { onSubmit } = this.props;
    const { nextOptions } = this.state;

    onSubmit({ ...nextOptions });
    this.setState({ prevOptions: { ...nextOptions }, isOpen: false });
  }

  dismiss() {
    const { prevOptions } = this.state;

    this.setState({ nextOptions: { ...prevOptions }, isOpen: false });
  }

  isValid() {
    const { nextOptions } = this.state;
    return !Object.values(nextOptions).filter(obj => obj === true).length;
  }

  render() {
    const { component, title, options } = this.props;
    return (
      <Popover component={React.cloneElement(component, { onClick: this.toggleIsOpen })} isOpen={this.state.isOpen}>
        <div className={styles.popoverSelectContainer}>
          <p>{title}</p>
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
            <footer className={styles.formActions}>
              <Button style="outline" size="medium" onClick={this.dismiss}>Cancelar</Button>
              <Button size="medium" onClick={this.submit} disabled={this.isValid()}>Aplicar</Button>
            </footer>
          </section>
        </div>
      </Popover>
    );
  }
}

export default CSSModules(SelectPopover, styles);
