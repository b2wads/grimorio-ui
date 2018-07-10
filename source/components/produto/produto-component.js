import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './produto.styl';

import Svg from '../svg';
import Icon from '../icon';
import Button from '../button';

import { ellipsis, shareOn } from '../../helpers';

class Produto extends PureComponent {
  static propTypes = {
    card: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    card: false,
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

  render() {
    /* eslint-disable */
    const {
      className,
      card,
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

    const style = card ? 'card': 'default';
    const fullClassName = classNames(className, styles[style]);

    return (
      <section className={fullClassName}>
        <div className={styles[`${style}__tag`]}>
          <Svg width={48} height={48} src={`logo/${this.getBrand(marca)}`} />
        </div>
        <div className={styles[`${style}__img`]}>
          <img src={imagem} alt={nome} />
        </div>
        <h1 className={styles[`${style}__name`]}>{ellipsis(nome, 72)}</h1>
        <div className={styles[`${style}__price`]}>{preco_com_desconto}</div>
        <div className={styles[`${style}__valid`]}>{fim}</div>
        <div className={styles[`${style}__social`]}>
          <Button className={styles[`${style}__copy`]} size="small">
            Copiar Link <Icon name="link" size={18} />
          </Button>
          <Svg onClick={() => shareOn.facebook(link)} className={styles[`${style}__facebook`]} align="top" width={28} height={28} src="icon/facebook-square" />
          <Svg onClick={() => shareOn.twitter(link)} className={styles[`${style}__twitter`]} align="top" width={28} height={28} src="icon/twitter-square" />
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
