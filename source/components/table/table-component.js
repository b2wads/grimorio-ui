import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './table.styl';

import { uniqueId } from '../../helpers';

class Table extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }

  static propTypes = {
    type: PropTypes.oneOf(['auto', 'fixed']),
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
    data: PropTypes.oneOf([PropTypes.array, PropTypes.arrayOf(PropTypes.object)]),
    notFoundMessage: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
    loadingMessage: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
    tableClassName: PropTypes.string,
    scrollY: PropTypes.bool,
    scrollX: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
  };

  static defaultProps = {
    type: 'auto',
    notFoundMessage: 'Nenhum resultado encontrado :(',
    loadingMessage: 'Loading...',
  };

  renderHeadRow(schema) {
    return (
      <tr className={styles.rowHead}>
        {Object.keys(schema).map(key => {
          const currentSchema = schema[key];
          const headClass = classNames(styles.cellHead, currentSchema.className);

          return (
            <th width={currentSchema.width} key={uniqueId()} className={headClass}>
              {currentSchema.renderHead ? currentSchema.renderHead(currentSchema) : currentSchema.title}
            </th>
          );
        })}
      </tr>
    );
  }

  renderRow(data, schema) {
    return data.map(infoRow => (
      <tr key={uniqueId()} className={styles.row}>
        {Object.keys(schema).map(key => {
          const currentSchema = schema[key];
          return (
            <td
              width={currentSchema.width}
              key={uniqueId()}
              className={classNames(styles.cell, currentSchema.className)}
            >
              {currentSchema.render ? currentSchema.render(infoRow) : infoRow[key]}
            </td>
          );
        })}
      </tr>
    ));
  }

  renderEmptyResults(message, schema) {
    return (
      <tr>
        <td colSpan={schema.length} className={styles.cell}>
          {message}
        </td>
      </tr>
    );
  }

  verifyResults(data, schema) {
    const { loadingMessage, notFoundMessage } = this.props;

    if (!Array.isArray(data)) {
      return this.renderEmptyResults(loadingMessage, schema);
    } else if (data.length === 0) {
      return this.renderEmptyResults(notFoundMessage, schema);
    } else {
      return this.renderRow(data, schema);
    }
  }

  render() {
    const { data, schema, type, tableClassName, className, scrollY, scrollX, width, height, ...rest } = this.props;
    const tableClass = classNames(tableClassName, styles.table, {
      [styles.isFixed]: type === 'fixed',
    });
    const wrapClass = classNames(styles.wrap, className, {
      [styles.isScrollY]: scrollY,
      [styles.isScrollX]: scrollX,
    });

    const wrapSizes = {
      width: width || 'auto',
      height: height || 'auto',
    };

    return (
      <div style={wrapSizes} className={wrapClass} {...rest}>
        <table className={tableClass}>
          <thead className={styles.tableHead}>
            {this.renderHeadRow(schema)}
          </thead>

          <tbody className={styles.tableBody}>
            {this.verifyResults(data, schema)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CSSModules(Table, styles);
