import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Panel from '../panel';
import Button from '../button';
import Icon from '../icon';
import Svg from '../svg';
import Form, { FormGroup, FormControlLabel, FormControl } from '../form';

import { shareOn, uniqueId, copyToClipboard } from '../../helpers';

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
    this.copyLink = this.copyLink.bind(this);
  }

  static propTypes = {
    onGenerate: PropTypes.func.isRequired,
    onClean: PropTypes.func.isRequired,
    stage: PropTypes.oneOf(['generate', 'finished']),
    sites: PropTypes.array,
    loading: PropTypes.bool,
    defaultSite: PropTypes.string,
    linkGenerated: PropTypes.string,
    text: PropTypes.string,
    acceptedDomains: PropTypes.array,
  };

  static defaultProps = {
    stage: 'generate',
    loading: false,
    sites: [],
    acceptedDomains: ['mundo.americanas', 'americanas', 'submarino', 'shoptime', 'soubarato'],
  };

  onGenerateClick(e) {
    e.preventDefault();
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

  copyLink() {
    const { linkGenerated } = this.props;
    copyToClipboard({
      value: linkGenerated,
      success: this.setState({ linkCopied: true }),
    });
  }

  share(type, link) {
    return () => shareOn[type](link);
  }

  isValidUrl(url) {
    const domains = this.props.acceptedDomains.join('|');
    const rx = new RegExp(`^((https?:\/\/)?(www\.)?(${domains})\.com\.br)[a-z-0-9.\/]{0,}`);
    return rx.test(url);
  }

  shouldShareLink() {
    const { site, link } = this.state;
    return site !== null && site !== undefined && this.isValidUrl(link);
  }

  renderGenerate() {
    const { sites, text, loading } = this.props;

    return (
      <Panel title="Gerador de links" contentClassName={styles.row}>
        <Form onSubmit={this.onGenerateClick}>
          <div className={styles.text}>
            {text}
          </div>
          <FormGroup className={styles.field}>
            <FormControlLabel
              type="select"
              value={this.state.site}
              items={sites}
              label="Site"
              onSelect={this.handleChangeSite}
              height={sites.length > 7 ? '400px' : 'auto'}
            />
          </FormGroup>

          <FormGroup className={styles.field}>
            <FormControlLabel label="Link da Oferta" placeholder="Link da Oferta" onChange={this.handleChangeLink} />
          </FormGroup>

          <div className={styles.sendWrap}>
            <Button disabled={!this.shouldShareLink()} type="submit" loading={loading}>
              Gerar Link
            </Button>
          </div>
        </Form>
      </Panel>
    );
  }

  renderFinish() {
    const { linkGenerated } = this.props;
    const { linkCopied } = this.state;

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
          <div className={styles.share}>
            <Button className={styles.copy} size="small" iconRight="insert_link" onClick={this.copyLink}>
              Copiar Link
            </Button>

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

          <Button size="small" iconRight="autorenew" className={styles.newLink} onClick={this.onCleanClick}>
            Novo link
          </Button>
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
    const { stage, className } = this.props;
    return (
      <div className={className}>
        {stage === 'generate' && this.renderGenerate()}
        {stage === 'finished' && this.renderFinish()}
      </div>
    );
  }
}

export default CSSModules(LinkGenerator, styles);
