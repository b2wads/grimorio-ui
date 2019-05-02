import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import cx from 'classnames';

import styles from './table.styl';

import { uniqueId } from '../../helpers';

class Table extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['default', 'panel']),
    layout: PropTypes.oneOf(['auto', 'fixed']),
    schema: PropTypes.objectOf(
      PropTypes.shape({
        title: PropTypes.string,
        className: PropTypes.string,
        headClassName: PropTypes.string,
        width: PropTypes.string,
        renderHead: PropTypes.func,
        render: PropTypes.func,
      })
    ).isRequired,
    specialCase: PropTypes.arrayOf(
      PropTypes.shape({
        className: PropTypes.string,
        case: PropTypes.func,
      })
    ),
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.arrayOf(PropTypes.object)]),
    notFoundMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    loadingMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    tableClassName: PropTypes.string,
    scrollY: PropTypes.bool,
    scrollX: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    isSticky: PropTypes.bool,
  };

  static defaultProps = {
    data: null,
    layout: 'auto',
    type: 'default',
    notFoundMessage: 'Nenhum resultado encontrado :(',
    loadingMessage: 'Loading...',
    isSticky: false,
  };

  renderHeadRow(schema, isSticky) {
    return (
      <tr className={cx(styles.rowHead, { [styles.isSticky]: isSticky })}>
        {Object.keys(schema).map((key, index) => {
          const currentSchema = schema[key];
          const headClass = cx(styles.cellHead, currentSchema.className, { [styles.isSticky]: isSticky });

          if (Object.keys(currentSchema).length) {
            return (
              <th width={currentSchema.width} key={uniqueId()} className={headClass}>
                {currentSchema.renderHead ? currentSchema.renderHead(currentSchema, index) : currentSchema.title}
              </th>
            );
          }
        })}
      </tr>
    );
  }

  generateSpecialStyle(specialCase, row) {
    return specialCase
      ? specialCase.reduce((acc, obj) => {
          acc = {
            ...acc,
            [obj.className]: obj.case(row),
          };
          return acc;
        }, {})
      : {};
  }

  renderRow(data, schema, specialCase) {
    return data.map((infoRow, index) => (
      <tr key={uniqueId()} className={cx(styles.row, this.generateSpecialStyle(specialCase, infoRow))}>
        {Object.keys(schema).map(key => {
          const currentSchema = schema[key];
          if (Object.keys(currentSchema).length) {
            return (
              <td width={currentSchema.width} key={uniqueId()} className={cx(styles.cell, currentSchema.className)}>
                {currentSchema.render ? currentSchema.render(infoRow, index) : infoRow[key]}
              </td>
            );
          }
        })}
      </tr>
    ));
  }

  renderEmptyResults(message, schema) {
    return (
      <tr>
        <td colSpan={Object.keys(schema).length} className={styles.cell}>
          {message}
        </td>
      </tr>
    );
  }

  verifyResults(data, schema, loadingMessage, notFoundMessage, specialCase) {
    if (!Array.isArray(data)) {
      return this.renderEmptyResults(loadingMessage, schema);
    } else if (data.length === 0) {
      return this.renderEmptyResults(notFoundMessage, schema);
    } else {
      return this.renderRow(data, schema, specialCase);
    }
  }

  render() {
    const {
      data,
      schema,
      type,
      layout,
      tableClassName,
      className,
      scrollY,
      scrollX,
      width,
      height,
      loadingMessage,
      notFoundMessage,
      specialCase,
      isSticky,
      ...rest
    } = this.props;

    const tableClass = cx(tableClassName, styles.table, {
      [styles.isFixed]: layout === 'fixed',
    });

    const wrapClass = cx(styles.wrap, className, {
      [styles.isScrollY]: scrollY,
      [styles.isScrollX]: scrollX,
      [styles.panel]: type === 'panel',
    });

    const wrapSizes = {
      maxWidth: width || 'auto',
      maxHeight: height || 'auto',
    };

    return (
      <div style={wrapSizes} className={wrapClass} {...rest}>
        <table className={tableClass}>
          <thead className={styles.tableHead}>
            {this.renderHeadRow(schema, isSticky)}
          </thead>

          <tbody className={styles.tableBody}>
            {this.verifyResults(data, schema, loadingMessage, notFoundMessage, specialCase)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CSSModules(Table, styles);
