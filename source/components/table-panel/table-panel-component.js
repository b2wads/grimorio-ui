import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Panel from '../panel';
import Table from '../table';

import Pager from './elements/pager';

import styles from './table-panel.styl';

class TablePanel extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    actions: PropTypes.element,
    pager: PropTypes.bool,
    onClickPrev: PropTypes.func,
    onClickNext: PropTypes.func,
    onLimitChange: PropTypes.func,
    meta: PropTypes.shape({
      count: PropTypes.number,
      limit: PropTypes.number,
      offset: PropTypes.number,
    }),
  };

  static defaultProps = {
    pager: false,
    onClickPrev: () => {},
    onClickNext: () => {},
    onLimitChange: value => {},
  };

  // TO-DO: Select Item Column

  renderFooter(data, pager, meta, onClickPrev, onClickNext, onLimitChange) {
    return pager
      ? <div className={styles.footer}>
          <Pager
            {...meta}
            length={data.length}
            onLimitChange={onLimitChange}
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
    const { title, actions, schema, data, pager, meta, onClickPrev, onClickNext, onLimitChange } = this.props;
    const Footer = this.renderFooter(data, pager, meta, onClickPrev, onClickNext, onLimitChange);

    return (
      <Panel size="no-padding" footer={Footer}>
        {this.renderHeader(title, actions)}
        <Table type="panel" schema={schema} data={data} />
      </Panel>
    );
  }
}

export default CSSModules(TablePanel, styles);
