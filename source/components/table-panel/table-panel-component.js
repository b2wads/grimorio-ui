import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import cx from 'classnames';

import Panel from '../panel';
import Loader from '../loader';
import Error from '../error';
import Table from '../table';

import Pager from './elements/pager';

import styles from './table-panel.styl';

class TablePanel extends PureComponent {
  static propTypes = {
    isMobile: PropTypes.bool,
    title: PropTypes.string,
    actions: PropTypes.element,
    pager: PropTypes.bool,
    hasFirstLast: PropTypes.bool,
    hasPagination: PropTypes.bool,
    perpage: PropTypes.bool,
    loading: PropTypes.bool,
    onClickPagination: PropTypes.func,
    onLimitChange: PropTypes.func,
    limitList: PropTypes.array,
    meta: PropTypes.shape({
      count: PropTypes.number,
      limit: PropTypes.number,
      offset: PropTypes.number,
    }),
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    onErrorClick: PropTypes.func,
    errorBtnText: PropTypes.string,
  };

  static defaultProps = {
    pager: false,
    hasFirstLast: false,
    perpage: false,
    hasPagination: false,
    loading: false,
    error: false,
    limitList: [10, 30, 50],
    onClickPagination: (type, value) => {},
    onLimitChange: value => {},
    isMobile: false,
  };

  // TO-DO: Select Item Column

  renderFooter(
    data,
    pager,
    hasFirstLast,
    meta,
    perpage,
    onLimitChange,
    limitList,
    hasPagination,
    onClickPagination,
    isMobile
  ) {
    return pager
      ? <div className={cx(styles.footer, { [styles.isMobile]: isMobile })}>
          <Pager
            {...meta}
            perpage={perpage}
            length={data ? data.length : 0}
            onLimitChange={onLimitChange}
            limitList={limitList}
            onClickPagination={onClickPagination}
            hasFirstLast={hasFirstLast}
            hasPagination={hasPagination}
            isMobile={isMobile}
          />
        </div>
      : false;
  }

  renderHeader(title, actions) {
    return (
      <div className={styles.header}>
        {title &&
          <h2 className={styles.title}>
            {title}
          </h2>}
        {actions &&
          <div className={styles.actions}>
            {actions}
          </div>}
      </div>
    );
  }

  render() {
    const {
      title,
      actions,
      schema,
      loading,
      data,
      pager,
      hasFirstLast,
      hasPagination,
      meta,
      onClickPagination,
      perpage,
      onLimitChange,
      limitList,
      error,
      onErrorClick,
      errorMessage,
      errorBtnText,
      isMobile,
      ...rest
    } = this.props;

    const Footer = this.renderFooter(
      data,
      pager,
      hasFirstLast,
      meta,
      perpage,
      onLimitChange,
      limitList,
      hasPagination,
      onClickPagination,
      isMobile
    );

    return (
      <Panel size="no-padding" className={styles.wrap} footer={Footer}>
        {loading && <Loader type="full" />}
        {this.renderHeader(title, actions)}
        {error &&
          <Error
            className={styles.error}
            hasButton
            onErrorClick={onErrorClick}
            errorMessage={errorMessage}
            errorBtnText={errorBtnText}
          />}
        {!error && <Table type="panel" schema={schema} data={data} {...rest} />}
      </Panel>
    );
  }
}

export default CSSModules(TablePanel, styles);
