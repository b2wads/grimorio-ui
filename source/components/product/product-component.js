import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import Clipboard from 'clipboard';

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
    type: PropTypes.oneOf(['default, card']),
    nameLength: PropTypes.number,
    nome: PropTypes.string,
    preco_com_desconto: PropTypes.number,
    preco_boleto: PropTypes.number,
    comissao_especial: PropTypes.bool,
    fim: PropTypes.string,
    link: PropTypes.string,
    imagem: PropTypes.string,
    tipo: PropTypes.oneOf(['cupom', 'produto']),
    codigo_cupom: PropTypes.string,
    regras_cupom: PropTypes.string,
    fundo_destaque: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    type: 'default',
    nameLength: 75,
    tipo: 'produto',
  };

  getBrand(id) {
    switch (id) {
      case 1:
        return 'shop';
      case 2:
        return 'acom';
      case 3:
        return 'suba';
      case 7:
        return 'soub';
      default:
        return null;
    }
  }

  renderPrice(boleto, desconto) {
    return (
      <div className={styles['price']}>
        {boleto > desconto ? moneyFormat(desconto) : moneyFormat(boleto)}
      </div>
    );
  }

  renderCupom(codigo, regras) {
    return (
      <div className={styles.cupom}>
        {codigo}
        <Tooltip className={styles.regras} width="220px" message={regras}>
          <span className={styles.regraIcon}>?</span>
        </Tooltip>
      </div>
    );
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
    /* eslint-disable */
    const {
      className,
      type,
      nameLength,
      imagem,
      nome,
      preco_com_desconto,
      marca,
      fim,
      link,
      preco_boleto,
      tipo,
      codigo_cupom,
      regras_cupom,
      fundo_destaque,
      ...elementProps
    } = this.props;
    /* eslint-disable */

    const { linkCopied, btnId }  = this.state;

    const fullClassName = classNames(className, {
      [styles[type]]: type,
    });

    return (
      <section {...elementProps} className={fullClassName}>
        <div className={styles['tag']}>
          {type !== 'card' ? (<Svg width={48} height={48} src={`logo/${this.getBrand(marca)}`} />) : ''}
          {fundo_destaque ? (<Icon className={styles.destaque} size="32" name="whatshot" />) : ''}
        </div>
        <div className={styles['img']}>
          <a href={link}>
            <img src={tipo === 'produto'? imagem : 'http://via.placeholder.com/250x250'} alt={nome} />
          </a>
        </div>

        <h1 className={styles['name']}>
          <a href={link}>
            {ellipsis(nome, nameLength)}
          </a>
        </h1>

        {
          tipo === 'produto'
            ? this.renderPrice(preco_boleto, preco_com_desconto)
            : this.renderCupom(codigo_cupom, regras_cupom)
        }

        {type !== 'card' && <div className={styles['valid']}>{`Valido até: ${fim}`}</div>}
        <div className={styles['social']}>
          <Button active={linkCopied} data-clipboard-text={tipo === 'produto' ? link : codigo_cupom} className={classNames(styles['copy'], btnId)} size="small">
            {linkCopied ? 'Copiado!' : `Copiar ${tipo === 'produto' ? 'Link' : 'Cupom'}`}
            <Icon name={linkCopied ? 'check' : 'link'} size={18} />
          </Button>
          <Svg onClick={() => shareOn.facebook(link)} className={styles['facebook']} align="top" width={26} height={26} src="icon/facebook-square" />
          <Svg onClick={() => shareOn.twitter(link)} className={styles['twitter']} align="top" width={26} height={26} src="icon/twitter-square" />
        </div>
      </section>
    );
  }
}

export default CSSModules(Product, styles);
