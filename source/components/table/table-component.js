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
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isSticky: PropTypes.bool,
    rowHeight: PropTypes.string,
    numberFixedColumns: PropTypes.string,
  };

  static defaultProps = {
    data: null,
    layout: 'auto',
    type: 'default',
    notFoundMessage: 'Nenhum resultado encontrado :(',
    loadingMessage: 'Loading...',
    isSticky: false,
  };

  constructor(props) {
    super(props);
    this.headerTable = React.createRef();
    this.state = {
      listWidthFixed: [],
    };
  }

  componentDidMount() {
    this.setColumnsFixed();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setColumnsFixed();
    }
  }

  setColumnsFixed() {
    const { numberFixedColumns } = this.props;
    if (numberFixedColumns === '0') {
      // pra não precisar passar por essa função caso não tenha coluna fixa
      return;
    }

    const nodesWidth = this.headerTable.current && this.headerTable.current.children
      ? [...this.headerTable.current.children].map(el => el.clientWidth)
      : [];

    const fixedColumnOffset = [];

    for (let idx = 0; idx < numberFixedColumns; idx++) {
      if (idx === 0) {
        fixedColumnOffset.push(0);
      } else {
        const remaining = nodesWidth.slice(0, idx);
        const previousElSum = remaining.reduce((acc, el) => el + acc, 0);
        fixedColumnOffset.push(previousElSum);
      }
    }

    this.setState({ listWidthFixed: fixedColumnOffset });
  }

  renderHeadRow(isSticky) {
    const { schema, rowHeight } = this.props;
    return (
      <tr
        ref={this.headerTable}
        style={{ height: rowHeight }}
        className={cx(styles.rowHead, { [styles.isSticky]: isSticky })}
      >
        {Object.keys(schema).map((key, index) => {
          const currentSchema = schema[key];
          const headClass = cx(
            styles.cellHead,
            currentSchema.className,
            { [styles.isSticky]: isSticky },
            this.hasStickyColumn(index)
          );
          const wrapStyles = {
            left: this.state.listWidthFixed[index],
            position: 'sticky',
            zIndex: this.getZindexHeadAndFooter(index),
          };

          if (Object.keys(currentSchema).length) {
            return (
              <th style={wrapStyles} width={currentSchema.width} key={uniqueId()} className={headClass}>
                {currentSchema.renderHead ? currentSchema.renderHead(currentSchema, index) : currentSchema.title}
              </th>
            );
          }
        })}
      </tr>
    );
  }

  renderFootRow(isSticky) {
    const { dataFooter, rowHeight } = this.props;
    let numbColspans = 0;
    return (
      <tr style={{ height: rowHeight }} className={cx(styles.rowFoot, { [styles.isSticky]: isSticky })}>
        {Object.keys(dataFooter).map((key, index) => {
          const currentData = dataFooter[key];
          let newIndex = this.getNewIndex(currentData, index, numbColspans);

          const headClass = cx(
            styles.cellFoot,
            currentData.className,
            { [styles.isSticky]: isSticky },
            this.hasStickyColumn(newIndex)
          );

          const wrapStyles = {
            left: this.state.listWidthFixed[newIndex],
            zIndex: this.getZindexHeadAndFooter(newIndex),
          };

          if (currentData.colspan) {
            numbColspans += currentData.colspan;
          }

          if (Object.keys(currentData).length) {
            return (
              <td
                style={wrapStyles}
                width={currentData.width}
                key={uniqueId()}
                className={headClass}
                colSpan={currentData.colspan || 1}
              >
                {currentData.value || ''}
              </td>
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

  hasStickyColumn(index) {
    if (typeof this.state.listWidthFixed[index] !== 'undefined') {
      return styles.isStickyColumn;
    }
  }

  getNewIndex(currentData, index, numbColspans) {
    if (currentData.colspan) {
      return numbColspans + index;
    } else {
      return index === 0 ? index + numbColspans : index + numbColspans - 1;
    }
  }

  getZindexHeadAndFooter(zindex) {
    const { data = [], numberFixedColumns } = this.props;
    const dataLength = data ? data.length : 0;
    return zindex < numberFixedColumns ? `${dataLength + 1}` : `${dataLength}`;
  }

  renderRow(data, schema, specialCase, rowHeight) {
    return data.map((infoRow, index) => (
      <tr
        style={{ height: rowHeight }}
        key={uniqueId()}
        className={cx(styles.row, this.generateSpecialStyle(specialCase, infoRow))}
      >
        {Object.keys(schema).map((key, indexTd) => {
          const currentSchema = schema[key];
          if (Object.keys(currentSchema).length) {
            return (
              <td
                style={{
                  left: this.state.listWidthFixed[indexTd],
                  zIndex: `${data.length - index}`,
                }}
                width={currentSchema.width}
                key={uniqueId()}
                className={cx(styles.cell, currentSchema.className, this.hasStickyColumn(indexTd))}
              >
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

  verifyResults(data, schema, loadingMessage, notFoundMessage, specialCase, rowHeight) {
    if (!Array.isArray(data)) {
      return this.renderEmptyResults(loadingMessage, schema);
    } else if (data.length === 0) {
      return this.renderEmptyResults(notFoundMessage, schema);
    } else {
      return this.renderRow(data, schema, specialCase, rowHeight);
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
      dataFooter,
      rowHeight,
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

    const wrapStyles = {
      maxWidth: width || 'auto',
      maxHeight: height || 'auto',
    };

    return (
      <div style={wrapStyles} className={wrapClass} {...rest}>
        <table className={tableClass}>
          <thead className={styles.tableHead}>
            {this.renderHeadRow(isSticky)}
          </thead>

          <tbody className={styles.tableBody}>
            {this.verifyResults(data, schema, loadingMessage, notFoundMessage, specialCase, rowHeight)}
          </tbody>
          {dataFooter &&
            <tfoot>
              {this.renderFootRow(isSticky)}
            </tfoot>}
        </table>
      </div>
    );
  }
}

export default CSSModules(Table, styles);
