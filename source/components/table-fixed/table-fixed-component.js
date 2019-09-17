import React, { PureComponent } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Table from '../table';
import styles from './table-fixed.styl';

class TableFixed extends PureComponent {
  static propTypes = {
    schemaLeft: PropTypes.objectOf(
      PropTypes.shape({
        title: PropTypes.string,
        className: PropTypes.string,
        headClassName: PropTypes.string,
        width: PropTypes.string,
        renderHead: PropTypes.func,
        render: PropTypes.func,
      })
    ).isRequired,
    schemaRight: PropTypes.objectOf(
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
    isMobile: PropTypes.bool,
    rowHeight: PropTypes.string,
    layout: PropTypes.oneOf(['auto', 'fixed']),
  };

  static defaultProps = {};

  render() {
    const {
      schemaLeft,
      data,
      schemaRight,
      width,
      height,
      dataFooterRight,
      dataFooterLeft,
      widthFixedTable,
      specialCase,
      isMobile,
      rowHeight,
      layout,
    } = this.props;
    const wrapSizes = {
      maxWidth: width || 'auto',
      maxHeight: height || 'auto',
    };

    const tableWrap = cx(styles.fullWrap, { [styles.shortWrap]: !isMobile });
    const tableSticky = cx(styles.sticky, { [styles.stickShort]: isMobile, [styles.stickFull]: !isMobile });

    return (
      <div className={tableWrap} style={wrapSizes}>
        <div className={tableSticky} style={{ width: widthFixedTable }}>
          <Table
            className={styles.table}
            type="panel"
            isSticky
            schema={schemaLeft}
            data={data}
            dataFooter={dataFooterLeft}
            specialCase={specialCase}
            rowHeight={rowHeight}
            layout={layout}
          />
        </div>
        <div className={styles.fullWidth}>
          <Table
            className={styles.table}
            type="panel"
            isSticky
            schema={schemaRight}
            data={data}
            dataFooter={dataFooterRight}
            specialCase={specialCase}
            rowHeight={rowHeight}
            layout={layout}
          />
        </div>
      </div>
    );
  }
}

export default CSSModules(TableFixed, styles);
