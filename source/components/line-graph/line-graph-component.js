import React, { PureComponent } from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Panel from '../panel';

import styles from './line-graph.styl';

class LineGraph extends PureComponent {
  constructor() {
    super();
    this.chart = null;
  }

  static propTypes = {
    options: PropTypes.object,
    datasets: PropTypes.array,
    scales: PropTypes.object,
  };

  static defaultProps = {
    datasets: [],
  };

  componentWillMount() {
    console.log('>>', Chart.defaults.global.elements.point);
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
    this.chart = new Chart(document.getElementById('myChart'), {
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
        ...options,
      },
    });
  }

  componentWillUnmount() {
    this.chart && this.chart.destroy();
  }

  getItem(data, tooltipItem, chartData) {
    const [{ index }] = tooltipItem;
    const item = chartData[index];
    return item;
  }

  render() {
    const { title, ...rest } = this.props;
    return (
      <Panel title={title}>
        <canvas id="myChart" {...rest} />
      </Panel>
    );
  }
}

export default CSSModules(LineGraph, styles);
