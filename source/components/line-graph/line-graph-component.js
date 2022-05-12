import React, { useEffect, useState, useRef, Fragment } from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';

import cx from 'classnames';

import { omit } from '../../helpers';
import Error from '../error';
import Loader from '../loader';

import styles from './line-graph.styl';

function LineGraph({
  options,
  datasets,
  className,
  loading,
  noLegend,
  error,
  errorMessage,
  errorBtnText,
  onErrorClick,
  tooltipFormatLabel,
  ...rest
}) {
  const [legendState, setLegendState] = useState(null);
  const [chartState, setChartState] = useState(mountChart());
  function mountChart() {
    if (!canvas || !canvas.current) {
      return null;
    }

    const chart =
      !error &&
      new Chart(canvas.current, {
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
            return (
              !noLegend &&
              chart.data.datasets.map(set => {
                const { label, borderColor } = set;
                return (
                  <div key={label} className={styles.legendItem}>
                    <span className={styles.legendSquare} style={{ background: borderColor }} />
                    <span className={styles.legendText}>{label}</span>
                  </div>
                );
              })
            );
          },
          ...options,
        },
      });

    if (!error) {
      const legend = chart.generateLegend();
      !legendState && setLegendState(legend);
    }

    return chart;
  }

  const canvas = useRef();

  useEffect(
    () => {
      setChartState(mountChart());
    },
    [canvas]
  );

  useEffect(() => {
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
  }, []);

  useEffect(
    () => {
      if (!error && chartState) {
        chartState.data.datasets = datasets;

        const legend = chartState.generateLegend();
        setLegendState(legend);

        chartState.update();
      }
    },
    [datasets]
  );

  function renderError() {
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

  const chartClass = cx(className, styles.chart);

  return (
    <div className={styles.chartWrap}>
      {loading && <Loader type="full" />}
      {error
        ? renderError()
        : <Fragment>
            <div className={chartClass} {...omit(rest, ['accordion', 'noLegend', 'tooltipFormatLabel'])}>
              <canvas ref={canvas} />
            </div>
            <div className={styles.legend}>
              {legendState}
            </div>
          </Fragment>}
    </div>
  );
}

LineGraph.propTypes = {
  options: PropTypes.object,
  datasets: PropTypes.array,
  className: PropTypes.string,
  loading: PropTypes.bool,
  noLegend: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  errorBtnText: PropTypes.string,
  onErrorClick: PropTypes.func,
  tooltipFormatLabel: PropTypes.func,
};

export default LineGraph;
