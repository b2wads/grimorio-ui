import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import Clipboard from 'clipboard';
import moment from 'moment';

import styles from './product.styl';

import Svg from '../svg';
import Button from '../button';
import Tooltip from '../tooltip';

import { moneyFormat, shareOn, property } from '../../helpers';

class Product extends PureComponent {
  constructor() {
    super();
    this.state = {
      linkCopied: false,
      btnId: `-copy-${property.randomId()}`,
    };
  }

  static propTypes = {
    type: PropTypes.oneOf(['default', 'card']),
    btnText: PropTypes.string,
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      info: PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        rules: PropTypes.string,
      }).isRequired,
      expires: PropTypes.string,
      copyValue: PropTypes.string,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        })
      ),
    }),
  };

  static defaultProps = {
    type: 'default',
    btnText: 'Copiar Link',
    data: {},
  };

  share(type, link) {
    return () => shareOn[type](link);
  }

  renderInfo() {
    const { info } = this.props.data;

    if (!info) {
      return null;
    }

    return (
      <div className={styles.info}>
        {typeof info.value === 'number' ? moneyFormat(info.value) : info.value}
        {info.rules &&
          <Tooltip className={styles.rules} width="220px" message={info.rules}>
            <span className={styles.rulesIcon}>?</span>
          </Tooltip>}
      </div>
    );
  }

  renderTags() {
    const { tags } = this.props.data;

    if (!tags) {
      return null;
    }

    return tags.map(tag => {
      const key = `${tag.type}-${tag.value}`;
      switch (tag.type) {
        case 'brand':
          return <Svg key={key} width={48} height={48} src={`logo/${tag.value}`} />;
        case 'highlight':
          return tag.value && <Svg key={key} className={styles.tagHighlight} width={32} height={32} src="flame" />;
        default:
          return '';
      }
    });
  }

  componentWillUnmount() {
    this.clipboard && this.clipboard.destroy();
  }

  componentDidMount() {
    this.clipboard = new Clipboard(`.${this.state.btnId}`);

    this.clipboard.on('success', () => {
      this.setState({ linkCopied: true });
      setTimeout(() => this.setState({ linkCopied: false }), 1500);
    });
  }

  render() {
    const { linkCopied, btnId } = this.state;
    const { className, type, btnText, ...elementProps } = this.props;
    const { img, name, info, expires, link, copyValue } = this.props.data;

    const fullClassName = classNames(className, {
      [styles[type]]: type,
    });

    if (!name || !link || !info) {
      return null;
    }

    return (
      <section {...elementProps} className={fullClassName}>
        <div className={styles.tag}>
          {this.renderTags()}
        </div>

        <div className={styles.imgWrapper}>
          <a href={link}>
            {img
              ? <img className={styles.imgCustom} src={img} alt={name} />
              : <Svg className={styles.imgDefault} src="cupom" />}
          </a>
        </div>

        <h1 className={classNames(styles.name, { [styles.isShort]: name.length < 31 })}>
          <a href={link}>
            {name}
          </a>
        </h1>

        {this.renderInfo()}

        {expires &&
          <div className={styles.expires}>
            {`Valido até: ${moment(expires).utc().format('DD/MM/YYYY H:mm')}`}
          </div>}

        <div className={styles.social}>
          <Button
            active={linkCopied}
            data-clipboard-text={copyValue ? copyValue : link}
            className={classNames(styles.copy, btnId)}
            size="small"
            iconRight={linkCopied ? 'check' : 'insert_link'}
          >
            {linkCopied ? 'Copiado!' : btnText}
          </Button>
          <Svg
            onClick={this.share('facebook', copyValue ? copyValue : link)}
            className={styles.facebook}
            align="top"
            width={26}
            height={26}
            src="icon/facebook-square"
          />
          <Svg
            onClick={this.share('twitter', copyValue ? copyValue.replace(/&/g, '%26') : link)}
            className={styles.twitter}
            align="top"
            width={26}
            height={26}
            src="icon/twitter-square"
          />
        </div>
      </section>
    );
  }
}

export default CSSModules(Product, styles);
