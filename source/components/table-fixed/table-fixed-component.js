import React, { PureComponent } from 'react';
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
    } = this.props;
    const wrapSizes = {
      maxWidth: width || 'auto',
      maxHeight: height || 'auto',
    };
    return (
      <div className={styles.wrap} style={wrapSizes}>
        <div className={styles.sticky} style={{ width: widthFixedTable }}>
          <Table
            className={styles.table}
            type="panel"
            isSticky
            schema={schemaLeft}
            data={data}
            dataFooter={dataFooterLeft}
          />
        </div>
        <div>
          <Table
            className={styles.table}
            type="panel"
            isSticky
            schema={schemaRight}
            data={data}
            dataFooter={dataFooterRight}
          />
        </div>
      </div>
    );
  }
}

export default CSSModules(TableFixed, styles);
