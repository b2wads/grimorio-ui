import React, { useEffect, useState, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import SelectOption from './elements/select-option';
import Icon from '../icon';

import { omit } from '../../helpers';

import styles from './select.styl';

function Select({
  className,
  items,
  label,
  placeholder,
  onSelect,
  type,
  menuButton,
  position,
  height,
  open,
  closeOnClickOutside,
  children,
  onClickOutside,
  disabled,
  defaultValue,
  value,
  inputClassName,
  shouldSortItems,
  isMobile,
  active,
  outline,
  noCurrentValue,
  ...elementProps
}) {
  const [selectedName, _setSelectedName] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLabel, setActiveLabel] = useState(!!value || !!defaultValue);
  const [childItems, setChildItems] = useState([]);

  const selectWrap = useRef();
  const selectedNameRef = useRef();

  function setSelectedName(value) {
    selectedNameRef.current = value;
    _setSelectedName(value);
  }

  function getChildren() {
    const newChildItems = [];

    React.Children.forEach(children, child => {
      newChildItems.push({
        value: child.props.value,
        icon: child.props.icon,
        name: child.props.children,
      });
    });

    !childItems.length && setChildItems(newChildItems);
  }

  useEffect(() => {
    !items.length && getChildren();
    closeOnClickOutside && document.addEventListener('click', verifyClickOutside, false);

    return function cleanUp() {
      closeOnClickOutside && document.removeEventListener('click', verifyClickOutside, false);
    };
  }, []);

  function getSelectedValue(selectedValue) {
    const selectItems = items.length ? items : childItems;

    const currentOption = selectItems.filter(option => option.value === selectedValue);
    const [currentOptionValues] = currentOption;

    return currentOption.length ? currentOptionValues : false;
  }

  useEffect(() => {
    const initialValue = value || defaultValue;

    const selectedValue = getSelectedValue(initialValue);
    if (selectedValue) {
      setSelectedName(selectedValue['name']);
      setSelectedValue(selectedValue['value']);
    }
  }, []);

  useEffect(
    () => {
      value && setActiveLabel(true);

      const selectedValue = getSelectedValue(value);
      if (selectedValue) {
        setSelectedName(selectedValue['name']);
        setSelectedValue(selectedValue['value']);
      }
    },
    [value]
  );

  function verifyClickOutside(e) {
    if (selectWrap.current && !selectWrap.current.contains(e.target)) {
      closeSelect();
      typeof onClickOutside === 'function' && onClickOutside(isMenuOpen);
    }
  }

  function closeSelect() {
    setIsMenuOpen(false);
    setActiveLabel(!!selectedNameRef.current);
  }

  function onSelectItem({ name, value }) {
    return () => {
      setIsMenuOpen(false);

      if (type === 'select') {
        setActiveLabel(true);
        setSelectedName(name);
        setSelectedValue(value);
      }

      onSelect({ name, value }, false);
    };
  }

  function toggleOptions() {
    if (!disabled) {
      setActiveLabel(true);
      setIsMenuOpen(true);
    }
  }

  function sortItems(items, value) {
    return items.reduce((acc, item) => {
      if (item.value === value) {
        return [item, ...acc];
      }
      return [...acc, item];
    }, []);
  }

  function renderInput() {
    const fieldClasses = cx(styles.input, inputClassName, {
      [styles.isPlaceholder]: selectedName === null,
      [styles.isActive]: active,
      [styles.isDisabled]: disabled,
    });

    return (
      <div onClick={toggleOptions} className={fieldClasses}>
        {selectedName || placeholder}
      </div>
    );
  }

  function renderButton(type, label, menuButton) {
    const labelClasses = cx(styles.label, {
      [styles.isActive]: activeLabel,
    });

    if (type === 'select' && label) {
      return (
        <Fragment>
          <div className={styles.labelWrapper}>
            <span className={labelClasses}>{label}</span>
            {renderInput()}
          </div>
          <Icon className={styles.arrow} name="arrow_drop_down" size={20} />
        </Fragment>
      );
    } else if (type === 'select') {
      return (
        <Fragment>
          {renderInput()}
          <Icon className={styles.arrow} name="arrow_drop_down" size={20} />
        </Fragment>
      );
    } else if (type === 'menu') {
      return menuButton;
    }
  }

  const isOpen = open !== null ? open : isMenuOpen;
  const renderItems = items.length ? items : childItems;
  const sortedItems = shouldSortItems ? sortItems(renderItems, selectedValue) : renderItems;

  const menuStyle = cx(styles.menu, {
    [styles.isOpen]: isOpen,
    [styles.isBottom]: position === 'bottom',
    [styles.isUnder]: position === 'under',
    [styles.isScroll]: height !== 'auto',
    [styles.isMobile]: isMobile,
  });

  const selectStyles = cx(styles.selectWrap, className, {
    [styles.isOutline]: outline,
  });

  return (
    <div ref={selectWrap} className={selectStyles} {...omit(elementProps, ['closeOnClickOutside', 'onClickOutside'])}>
      <span onClick={toggleOptions} className={styles.button}>
        {renderButton(type, label, menuButton)}
      </span>

      <ul style={{ height }} className={menuStyle}>
        {sortedItems.map(option => (
          <SelectOption
            key={option.value}
            icon={option.icon}
            selected={selectedValue === option.value}
            onSelect={onSelectItem}
            value={option.value}
            noCurrentValue={noCurrentValue && selectedValue === option.value}
          >
            {option.name}
          </SelectOption>
        ))}
      </ul>

      {isMobile && <div onClick={closeSelect} className={cx(styles.overlay, { [styles.isOpen]: isOpen })} />}
    </div>
  );
}

Select.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onSelect: PropTypes.func,
  type: PropTypes.oneOf(['select', 'menu']),
  menuButton: PropTypes.element,
  position: PropTypes.oneOf(['top', 'bottom', 'under']),
  height: PropTypes.string,
  open: PropTypes.bool,
  closeOnClickOutside: PropTypes.bool,
  onClickOutside: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  inputClassName: PropTypes.string,
  shouldSortItems: PropTypes.bool,
  isMobile: PropTypes.bool,
  active: PropTypes.bool,
  outline: PropTypes.bool,
  noCurrentValue: PropTypes.bool,
};

Select.defaultProps = {
  items: [],
  type: 'select',
  position: 'top',
  open: null,
  closeOnClickOutside: true,
  disabled: false,
  height: 'auto',
  value: false,
  shouldSortItems: true,
  isMobile: false,
};

export default Select;
