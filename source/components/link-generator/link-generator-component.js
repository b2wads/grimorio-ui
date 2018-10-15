import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Panel from '../panel';
import Button from '../button';
import { FormGroup, FormControlLabel } from '../form';

import styles from './link-generator.styl';

class LinkGenerator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      site: props.defaultSite,
      link: null,
      linkGenerated: null,
    };

    this.onGenerateClick = this.onGenerateClick.bind(this);
    this.handleChangeSite = this.handleChangeSite.bind(this);
    this.handleChangeLink = this.handleChangeLink.bind(this);
  }

  static propTypes = {
    onGenerateClick: PropTypes.func.isRequired,
    stage: PropTypes.oneOf(['generate', 'finished']),
    sites: PropTypes.array,
    loading: PropTypes.bool,
    defaultSite: PropTypes.string,
  };

  static defaultProps = {
    stage: 'generate',
    loading: false,
  };

  onGenerateClick() {
    const { site, link } = this.state;
    this.props.onGenerateClick({ site, link });
  }

  handleChangeLink(event) {
    this.setState({ link: event.target.value });
  }

  handleChangeSite({ value }) {
    this.setState({ site: value });
  }

  renderGenerate() {
    const { sites, loading } = this.props;

    return (
      <Fragment>
        <FormGroup className={styles.field}>
          <FormControlLabel
            type="select"
            value={this.state.site}
            items={sites}
            label="Selecione o site"
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

        <Button loading={loading} onClick={this.onGenerateClick}>
          Gerar Link
        </Button>
      </Fragment>
    );
  }

  renderFinish() {
    return (
      <Fragment>
        Finish!
      </Fragment>
    );
  }

  render() {
    const { stage } = this.props;
    return (
      <Panel title="Gerador de links" contentClassName={styles.row}>
        {stage === 'generate' && this.renderGenerate()}
        {stage === 'finished' && this.renderFinish()}
      </Panel>
    );
  }
}

export default CSSModules(LinkGenerator, styles);
