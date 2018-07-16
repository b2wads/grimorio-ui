import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import Clipboard from 'clipboard';
import moment from 'moment';

import styles from './product.styl';

import Svg from '../svg';
import Icon from '../icon';
import Button from '../button';
import Tooltip from '../tooltip';

import { ellipsis, moneyFormat, shareOn, property } from '../../helpers';

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
    nameLength: PropTypes.number,
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
    nameLength: 75,
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
          return tag.value && <Icon key={key} className={styles.tagHighlight} size="32" name="whatshot" />;
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
    const { className, type, nameLength, btnText, ...elementProps } = this.props;
    const { tags, img, name, info, expires, link, copyValue } = this.props.data;

    const fullClassName = classNames(className, {
      [styles[type]]: type,
    });

    if (!img || !name || !link || !info) {
      return null;
    }

    return (
      <section {...elementProps} className={fullClassName}>
        <div className={styles.tag}>
          {this.renderTags(tags, type)}
        </div>

        <div className={styles.img}>
          <a href={link}>
            <img src={img} alt={name} />
          </a>
        </div>

        <h1 className={styles.name}>
          <a href={link}>
            {ellipsis(name, nameLength)}
          </a>
        </h1>

        {this.renderInfo()}

        {expires &&
          <div className={styles.expires}>
            {`Valido até: ${moment(expires).format('DD/MM/YYYY H:mm')}`}
          </div>}

        <div className={styles.social}>
          <Button
            active={linkCopied}
            data-clipboard-text={copyValue ? copyValue : link}
            className={classNames(styles.copy, btnId)}
            size="small"
          >
            {linkCopied ? 'Copiado!' : btnText}
            <Icon name={linkCopied ? 'check' : 'link'} size={18} />
          </Button>
          <Svg
            onClick={this.share('facebook', link)}
            className={styles.facebook}
            align="top"
            width={26}
            height={26}
            src="icon/facebook-square"
          />
          <Svg
            onClick={this.share('twitter', link)}
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
