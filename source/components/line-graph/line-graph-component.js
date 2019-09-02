import React, { PureComponent, Fragment } from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import cx from 'classnames';

import Error from '../error';
import Loader from '../loader';

import styles from './line-graph.styl';

class LineGraph extends PureComponent {
  constructor() {
    super();

    this.state = {
      legend: null,
    };

    this.canvas = React.createRef();
  }

  static propTypes = {
    options: PropTypes.object,
    datasets: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    onErrorClick: PropTypes.func,
    errorBtnText: PropTypes.string,
    tooltipFormatLabel: PropTypes.func,
  };

  static chart = null;

  componentWillMount() {
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.elements.point = {
      ...Chart.defaults.global.elements.point,
      radius: 5,
      backgroundColor: '#fff',
      borderWidth: 2,
      hoverRadius: 5,
      hoverBorderWidth: 2,
      hoverBackgroundColor: '#fff',
    };
  }

  componentDidMount() {
    const { options, datasets, error, tooltipFormatLabel } = this.props;

    if (!this.canvas || !this.canvas.current) {
      return null;
    }

    this.chart =
      !error &&
      new Chart(this.canvas.current, {
        type: 'line',
        data: {
          datasets,
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            cornerRadius: 2,
            borderColor: 'rgba(0,0,0,0.08)',
            borderWidth: 2,
            backgroundColor: '#fff',
            titleFontColor: '#777',
            bodyFontColor: '#777',
            footerFontColor: '#777',
            callbacks: {
              label: (tooltipItem, data) =>
                tooltipFormatLabel
                  ? tooltipFormatLabel(tooltipItem, data)
                  : ` ${data.datasets[tooltipItem.datasetIndex].label}: ${tooltipItem.yLabel}`,
            },
          },
          plugins: {
            datalabels: {
              display: false,
            },
          },
          legendCallback: chart => {
            return chart.data.datasets.map(set => {
              const { label, borderColor } = set;
              return (
                <div key={label} className={styles.legendItem}>
                  <span className={styles.legendSquare} style={{ background: borderColor }} />
                  <span className={styles.legendText}>{label}</span>
                </div>
              );
            });
          },
          ...options,
        },
      });

    if (!error) {
      const legend = this.chart.generateLegend();
      !this.state.legend && this.setState({ legend });
    }
  }

  componentDidUpdate(prevProps) {
    const { datasets, error } = this.props;

    if (prevProps.datasets !== datasets && !error && this.chart) {
      this.chart.data.datasets = datasets;

      const legend = this.chart.generateLegend();
      this.setState({ legend });

      this.chart.update();
    }
  }

  renderError() {
    const { onErrorClick, errorMessage, errorBtnText } = this.props;

    return (
      <Error
        hasButton
        className={styles.error}
        onErrorClick={onErrorClick}
        errorMessage={errorMessage}
        errorBtnText={errorBtnText}
      />
    );
  }

  render() {
    const { className, error, loading, ...rest } = this.props;
    const chartClass = cx(className, styles.chart);

    return (
      <div className={styles.chartWrap}>
        {loading && <Loader type="full" />}
        {error
          ? this.renderError()
          : <Fragment>
              <div className={chartClass} {...rest}>
                <canvas ref={this.canvas} />
              </div>
              <div className={styles.legend}>
                {this.state.legend}
              </div>
            </Fragment>}
      </div>
    );
  }
}

export default CSSModules(LineGraph, styles);
