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
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        })
      ),
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number,
      cupom: PropTypes.shape({
        codigo: PropTypes.string,
        regras: PropTypes.string,
      }),
      expires: PropTypes.string,
      link: PropTypes.string.isRequired,
      copy: PropTypes.string,
    }),
  };

  static defaultProps = {
    className: '',
    type: 'default',
    nameLength: 75,
    btnText: 'Copiar Link',
    data: {},
  };

  renderPrice() {
    const { price } = this.props.data;

    if (!price) {
      return false;
    }

    return (
      <div className={styles.price}>
        {moneyFormat(price)}
      </div>
    );
  }

  renderCupom() {
    const { cupom } = this.props.data;

    if (!cupom) {
      return false;
    } else if (cupom.hasOwnProperty('codigo')) {
      return (
        <div className={styles.cupom}>
          {cupom.codigo}
          {cupom.regras &&
            <Tooltip className={styles.regras} width="220px" message={cupom.regras}>
              <span className={styles.regraIcon}>?</span>
            </Tooltip>}
        </div>
      );
    }
  }

  renderTags() {
    const { tags } = this.props.data;

    if (!tags) {
      return false;
    }

    return tags.map(tag => {
      const key = `${tag.name}-${tag.value}`;
      switch (tag.name) {
        case 'brand':
          return this.props.type !== 'card' && <Svg key={key} width={48} height={48} src={`logo/${tag.value}`} />;
        case 'highlight':
          return <Icon key={key} className={styles.destaque} size="32" name="whatshot" />;
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
    const { tags, img, name, price, cupom, expires, link, copy } = this.props.data;

    const fullClassName = classNames(className, {
      [styles[type]]: type,
    });

    if (!img || !name || !link || (!price && !cupom)) {
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

        {this.renderPrice(price)}

        {this.renderCupom(cupom)}

        {expires &&
          <div className={styles.valid}>
            {`Valido até: ${moment(expires).format('DD/MM/YYYY H:mm')}`}
          </div>}

        <div className={styles.social}>
          <Button
            active={linkCopied}
            data-clipboard-text={copy ? copy : link}
            className={classNames(styles.copy, btnId)}
            size="small"
          >
            {linkCopied ? 'Copiado!' : btnText}
            <Icon name={linkCopied ? 'check' : 'link'} size={18} />
          </Button>
          <Svg
            onClick={() => shareOn.facebook(link)}
            className={styles.facebook}
            align="top"
            width={26}
            height={26}
            src="icon/facebook-square"
          />
          <Svg
            onClick={() => shareOn.twitter(link)}
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
