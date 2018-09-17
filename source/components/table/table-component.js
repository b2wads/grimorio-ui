import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './table.styl';

class Table extends PureComponent {
  static propTypes = {
    schema: PropTypes.object,
    data: PropTypes.array,
    head: PropTypes.array,
  };

  static defaultProps = {};

  renderRow(schema, data) {
    return data.map(row => {
      return (
        <tr className={styles.row}>
          {Object.keys(schema).map(name => {
            const currentValue = row[name];
            const currentSchema = schema[name];
            return (
              <td className={classNames(styles.cell, currentSchema.className)}>
                {currentSchema.render(currentValue)}
              </td>
            );
          })}
        </tr>
      );
    });
  }

  render() {
    const { schema, data } = this.props;

    return (
      <div className={styles.content}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr className={styles.rowHead}>
              {Object.keys(schema).map(name => {
                const currentSchema = schema[name];
                const headClass = classNames(styles.cellHead, currentSchema.className, currentSchema.headClassName);
                return (
                  <th key={currentSchema.title} className={headClass}>
                    {currentSchema.render(currentSchema.title)}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody className={styles.tableBody}>
            {this.renderRow(schema, data)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CSSModules(Table, styles);
