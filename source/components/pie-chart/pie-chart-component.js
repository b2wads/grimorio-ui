import React, { PureComponent, Fragment } from 'react';
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
// import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import cx from 'classnames';

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

  static propTypes = {};
  static defaultProps = {
    error: false,
    cutoutPercentage: 50,
  };

  componentDidMount() {
    const { options, error, labels, datasets, cutoutPercentage } = this.props;
    const total = datasets[0].data.reduce((acc, num) => acc + num, 0);

    if (!this.canvas || !this.canvas.current) {
      return null;
    }

    this.chart =
      !error &&
      new Chart(this.canvas.current, {
        type: 'pie',
        data: {
          datasets,
          labels,
        },
        plugins: [ChartDataLabels],
        options: {
          cutoutPercentage,
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
            return chart.data.datasets[0].data.map(value => {
              return (
                <div key={value} className={styles.legendItem}>
                  {value}
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

    if (prevProps.datasets !== datasets && !error) {
      this.chart.data.datasets = datasets;

      const legend = this.chart.generateLegend();
      this.setState({ legend });

      this.chart.update();
    }
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

export default CSSModules(PieChart, styles);
