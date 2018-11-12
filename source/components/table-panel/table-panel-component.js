import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Panel from '../panel';
import Loader from '../loader';
import Error from '../error';
import Table from '../table';

import Pager from './elements/pager';

import styles from './table-panel.styl';

class TablePanel extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    actions: PropTypes.element,
    pager: PropTypes.bool,
    perpage: PropTypes.bool,
    loading: PropTypes.bool,
    onClickPrev: PropTypes.func,
    onClickNext: PropTypes.func,
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
    perpage: false,
    loading: false,
    error: false,
    limitList: [10, 30, 50],
    onClickPrev: () => {},
    onClickNext: () => {},
    onLimitChange: value => {},
  };

  // TO-DO: Select Item Column

  renderFooter(data, pager, meta, onClickPrev, onClickNext, perpage, onLimitChange, limitList) {
    return pager
      ? <div className={styles.footer}>
          <Pager
            {...meta}
            perpage={perpage}
            length={data ? data.length : 0}
            onLimitChange={onLimitChange}
            limitList={limitList}
            onClickPrev={onClickPrev}
            onClickNext={onClickNext}
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
      meta,
      onClickPrev,
      onClickNext,
      perpage,
      onLimitChange,
      limitList,
      error,
      onErrorClick,
      errorMessage,
      errorBtnText,
      ...rest
    } = this.props;
    const Footer = this.renderFooter(data, pager, meta, onClickPrev, onClickNext, perpage, onLimitChange, limitList);

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
