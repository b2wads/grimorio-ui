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
    } = this.props;
    const wrapSizes = {
      maxWidth: width || 'auto',
      maxHeight: height || 'auto',
    };
    const checkIsMobile = cx({
      [styles.wrapMobile]: isMobile,
      [styles.wrap]: !isMobile,
    });
    return (
      <div className={checkIsMobile} style={wrapSizes}>
        <div className={styles.sticky} style={{ width: widthFixedTable }}>
          <Table
            className={styles.table}
            type="panel"
            isSticky
            schema={schemaLeft}
            data={data}
            dataFooter={dataFooterLeft}
            specialCase={specialCase}
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
            specialCase={specialCase}
          />
        </div>
      </div>
    );
  }
}

export default CSSModules(TableFixed, styles);
