import React, { PureComponent } from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

import Panel from '../panel';

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
  };

  static defaultProps = {
    datasets: [],
    options: {},
  };

  componentWillMount() {
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.elements.point = {
      ...Chart.defaults.global.elements.point,
      radius: 5,
      backgroundColor: '#fff',
      borderWidth: 2,
      hoverRadius: 6,
      hoverBorderWidth: 2,
      hoverBackgroundColor: '#fff',
    };
  }

  componentDidMount() {
    const { options, datasets } = this.props;
    const chart = new Chart(this.canvas, {
      type: 'line',
      data: {
        datasets,
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          cornerRadius: 2,
          yAlign: 'bottom',
          xAlign: 'center',
          borderColor: 'rgba(0,0,0,0.15)',
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

    const legend = chart.generateLegend();
    this.setState({ chart, legend });
  }

  componentWillUnmount() {
    this.state.chart && this.state.chart.destroy();
  }

  render() {
    const { title, className, ...rest } = this.props;
    const chartClass = classNames(className, styles.chart);
    return (
      <Panel title={title}>
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
