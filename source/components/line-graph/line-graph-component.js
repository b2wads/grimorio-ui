import React, { PureComponent } from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Panel from '../panel';
import Loader from '../loader';

import styles from './line-graph.styl';

class LineGraph extends PureComponent {
  constructor() {
    super();
    this.state = {
      chart: null,
      legend: null,
    };

    this.canvas = null;
  }

  static propTypes = {
    options: PropTypes.object,
    datasets: PropTypes.array,
    data: PropTypes.array,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    data: [],
    datasets: [],
    options: {},
    loading: false,
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

  generateChart() {
    const { options, datasets } = this.props;

    this.chart && this.chart.destroy();

    return new Chart(this.canvas, {
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
        },
        legendCallback: chart => {
          return chart.data.datasets.map(set => {
            const { label, borderColor } = set;
            return (
              <div className={styles.legendItem}>
                <span className={styles.legendSquare} style={{ background: borderColor }} />
                <span className={styles.legendText}>{label}</span>
              </div>
            );
          });
        },
        ...options,
      },
    });
  }

  componentDidMount() {
    this.chart = this.generateChart();

    const legend = this.chart.generateLegend();
    !this.state.legend && this.setState({ legend });
  }

  componentWillUnmount() {
    this.chart && this.chart.destroy();
  }

  componentDidUpdate(prevProps) {
    const { datasets } = this.props;
    this.chart = this.generateChart();

    if (prevProps.datasets !== datasets) {
      const legend = this.chart.generateLegend();
      this.setState({ legend });
    }
  }

  render() {
    const { title, loading, className, ...rest } = this.props;
    const chartClass = classNames(className, styles.chart);

    return (
      <Panel className={styles.panel} title={title}>
        {loading && <Loader type="full" />}
        <div className={chartClass} {...rest}>
          <canvas ref={canvas => (this.canvas = canvas)} />
        </div>
        <div className={styles.legend}>
          {this.state.legend}
        </div>
      </Panel>
    );
  }
}

export default CSSModules(LineGraph, styles);
