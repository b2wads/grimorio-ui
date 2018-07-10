import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import Clipboard from 'clipboard';

import styles from './produto.styl';

import Svg from '../svg';
import Icon from '../icon';
import Button from '../button';

import { ellipsis, moneyFormat, shareOn } from '../../helpers';

class Produto extends PureComponent {
  constructor() {
    super();
    this.state = {
      linkCopied: false,
    };
  }

  static propTypes = {
    type: PropTypes.oneOf(['default, card']),
    nameLength: PropTypes.number,
  };

  static defaultProps = {
    className: '',
    type: 'default',
    nameLength: 65,
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

  componentWillUnmount() {
    this.clipboard && this.clipboard.destroy();
  }

  componentDidMount() {
    this.clipboard = new Clipboard(`.${styles['copy']}`);

    this.clipboard.on('success', () => {
      this.setState({ linkCopied: true });
      setTimeout(() => this.setState({ linkCopied: false }), 2000);
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
      // preco_boleto,
      // comissao_especial,
      // tipo,
    } = this.props;
    /* eslint-disable */

    const { linkCopied }  = this.state;

    const fullClassName = classNames(className, {
      [styles[type]]: type,
    });

    return (
      <section className={fullClassName}>
        <a href={link}>
          <div className={styles['tag']}>
            {type !== 'card' && <Svg width={48} height={48} src={`logo/${this.getBrand(marca)}`} />}
          </div>
          <div className={styles['img']}>
            <img src={imagem} alt={nome} />
          </div>
          <h1 className={styles['name']}>{ellipsis(nome, nameLength)}</h1>
          <div className={styles['price']}>{moneyFormat(preco_com_desconto)}</div>

          {type !== 'card' && <div className={styles['valid']}>{`Valido até: ${fim}`}</div>}
        </a>

        <div className={styles['social']}>
          <Button active={linkCopied} data-clipboard-text={link} className={styles['copy']} size="small">
            {linkCopied ? 'Copiado!' : 'Copiar Link'}
            <Icon name={linkCopied ? 'check' : 'link'} size={18} />
          </Button>
          <Svg onClick={() => shareOn.facebook(link)} className={styles['facebook']} align="top" width={26} height={26} src="icon/facebook-square" />
          <Svg onClick={() => shareOn.twitter(link)} className={styles['twitter']} align="top" width={26} height={26} src="icon/twitter-square" />
        </div>
      </section>
    );
  }
}

export default CSSModules(Produto, styles);

/*
- nome
- descricao
- preco_original
- preco_com_desconto
- preco_boleto
- comissao_especial (0,1)
- inicio
- fim
- link
- imagem
- tipo (cupom, produto)
- codigo_cupom
- regras_cupom
- fundo_destaque (0,1)
*/
