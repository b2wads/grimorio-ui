import React, { PureComponent, Fragment } from 'react';
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import cx from 'classnames';

import Loader from '../loader';
import Error from '../error';

import styles from './pie-chart.styl';

class PieChart extends PureComponent {
  constructor() {
    super();

    this.state = {
      legend: null,
    };

    this.canvas = React.createRef();
  }

  static chart = null;

  static propTypes = {
    options: PropTypes.object,
    chartData: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    onErrorClick: PropTypes.func,
    errorBtnText: PropTypes.string,
  };

  static defaultProps = {
    error: false,
    chartData: {
      data: [],
    },
  };

  componentDidMount() {
    const { options, error, chartData } = this.props;
    const chartValues = chartData.data || [];
    const total = chartValues.reduce((acc, num) => acc + num, 0);

    if (!this.canvas || !this.canvas.current) {
      return null;
    }

    this.chart =
      !error &&
      new Chart(this.canvas.current, {
        type: 'pie',
        data: {
          datasets: [
            {
              borderWidth: chartValues.map(() => 0),
              hoverBorderColor: chartValues.map(() => '#FFF'),
              hoverBorderWidth: chartValues.map(() => 2),
              ...chartData,
            },
          ],
          labels: chartData.labels,
        },
        plugins: [ChartDataLabels],
        options: {
          cutoutPercentage: 50,
          maintainAspectRatio: false,
          tooltips: {
            enabled: false,
          },
          plugins: {
            datalabels: {
              color: '#FFF',
              font: {
                size: 14,
                weight: 'bold',
              },
              formatter: value => `${Math.round(value * 100 / total)}%`,
            },
          },
          legend: {
            display: false,
          },
          legendCallback: chart => {
            return chart.data.datasets[0].data.map((value, index) => {
              const color = chart.data.datasets[0].backgroundColor[index];
              return (
                <div key={value} className={styles.legendItem}>
                  <span className={styles.legendColor} style={{ background: color }} />
                  <span className={styles.legendText}>
                    {chartData.labels[index]} - {value}
                  </span>
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
    const { chartData, error } = this.props;

    if (prevProps.chartData !== chartData && !error) {
      this.chart.data.datasets[0] = { ...this.chart.data.datasets[0], ...chartData };

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
              <div className={styles.legend}>
                {this.state.legend}
              </div>
              <div className={chartClass} {...rest}>
                <canvas ref={this.canvas} />
              </div>
            </Fragment>}
      </div>
    );
  }
}

export default CSSModules(PieChart, styles);
