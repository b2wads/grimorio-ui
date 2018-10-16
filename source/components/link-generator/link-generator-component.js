import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Clipboard from 'clipboard';
import classNames from 'classnames';

import Panel from '../panel';
import Button from '../button';
import Icon from '../icon';
import Svg from '../svg';
import { FormGroup, FormControlLabel, FormControl } from '../form';

import { shareOn, uniqueId } from '../../helpers';

import styles from './link-generator.styl';

class LinkGenerator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      site: props.defaultSite,
      link: null,
      linkGenerated: props.linkGenerated,
      linkCopied: false,
      btnId: uniqueId('copy'),
    };

    this.onGenerateClick = this.onGenerateClick.bind(this);
    this.onCleanClick = this.onCleanClick.bind(this);
    this.handleChangeSite = this.handleChangeSite.bind(this);
    this.handleChangeLink = this.handleChangeLink.bind(this);
  }

  static propTypes = {
    onGenerate: PropTypes.func.isRequired,
    onClean: PropTypes.func.isRequired,
    stage: PropTypes.oneOf(['generate', 'finished']),
    sites: PropTypes.array,
    loading: PropTypes.bool,
    defaultSite: PropTypes.string,
    linkGenerated: PropTypes.string,
  };

  static defaultProps = {
    stage: 'generate',
    loading: false,
  };

  componentWillUnmount() {
    this.clipboard && this.clipboard.destroy();
  }

  componentDidMount() {
    this.clipboard = new Clipboard(`.${this.state.btnId}`);

    this.clipboard.on('success', () => {
      this.setState({ linkCopied: true });
    });
  }

  onGenerateClick() {
    const { site, link } = this.state;
    this.props.onGenerate({ site, link });
  }

  onCleanClick() {
    this.setState({
      site: this.props.defaultSite,
      link: null,
      linkGenerated: null,
      linkCopied: false,
    });

    this.props.onClean();
  }

  handleChangeLink(event) {
    this.setState({ link: event.target.value });
  }

  handleChangeSite({ value }) {
    this.setState({ site: value });
  }

  share(type, link) {
    return () => shareOn[type](link);
  }

  renderGenerate() {
    const { sites, loading } = this.props;

    return (
      <Panel title="Gerador de links" contentClassName={styles.row}>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec in porta sapien. Maecenas congue quis ipsum vel vestibulum.
          Vestibulum suscipit, dolor sit amet aliquet dictum, nisi lectus sagittis massa.
        </div>
        <FormGroup className={styles.field}>
          <FormControlLabel
            type="select"
            value={this.state.site}
            items={sites}
            label="Site"
            onSelect={this.handleChangeSite}
          />
        </FormGroup>

        <FormGroup className={styles.field}>
          <FormControlLabel
            label="Link da Oferta"
            placeholder="www.americanas.com.br/oferta"
            onChange={this.handleChangeLink}
          />
        </FormGroup>

        <div className={styles.sendWrap}>
          <Button loading={loading} onClick={this.onGenerateClick}>
            Gerar Link
          </Button>
        </div>
      </Panel>
    );
  }

  renderFinish() {
    const { linkGenerated } = this.props;
    const { linkCopied, btnId } = this.state;

    return (
      <Panel>
        <div className={styles.iconResultWrap}>
          <Svg className={styles.iconResult} src="success" width="70px" height="70px" />
        </div>
        <h3 className={styles.title}>Link Gerado com sucesso!</h3>
        <div className={styles.textResult}>
          Pronto, agora é só divulgar.
        </div>
        <FormGroup className={styles.field}>
          <Icon size="20px" className={styles.fieldIcon} name="insert_link" />
          <FormControl inputClassName={styles.fieldCopy} value={linkGenerated} disabled />
        </FormGroup>

        <div className={styles.social}>
          {!linkCopied &&
            <Button
              data-clipboard-text={linkGenerated}
              className={classNames(styles.copy, btnId)}
              size="small"
              iconRight="insert_link"
            >
              Copiar Link
            </Button>}

          {linkCopied &&
            <Button size="small" iconRight="autorenew" className={styles.newLink} onClick={this.onCleanClick}>
              Novo link
            </Button>}

          <Svg
            onClick={this.share('facebook', linkGenerated)}
            className={styles.facebook}
            align="top"
            width={26}
            height={26}
            src="icon/facebook-square"
          />
          <Svg
            onClick={this.share('twitter', linkGenerated)}
            className={styles.twitter}
            align="top"
            width={26}
            height={26}
            src="icon/twitter-square"
          />
        </div>
        {linkCopied &&
          <span className={styles.feedback}>
            <Icon align="inherit" size="20px" className={styles.feedbackIcon} name="check" />
            Link copiado para a área de transferência!
          </span>}
      </Panel>
    );
  }

  render() {
    const { stage } = this.props;
    return (
      <Fragment>
        {stage === 'generate' && this.renderGenerate()}
        {stage === 'finished' && this.renderFinish()}
      </Fragment>
    );
  }
}

export default CSSModules(LinkGenerator, styles);
