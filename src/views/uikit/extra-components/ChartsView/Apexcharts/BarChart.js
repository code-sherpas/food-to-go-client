import { merge } from 'lodash';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexChartsOption } from '~/components/Charts/Apexcharts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  { data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] }
];

function BarChart() {
  const chartOptions = merge(ApexChartsOption(), {
    stroke: { show: false },
    plotOptions: {
      bar: { horizontal: true, barHeight: '30%', endingShape: 'rounded' }
    },
    xaxis: {
      categories: [
        'Italy',
        'Japan',
        'China',
        'Canada',
        'France',
        'Germany',
        'South Korea',
        'Netherlands',
        'United States',
        'United Kingdom'
      ]
    }
  });

  return (
    <ReactApexChart
      type="bar"
      height={320}
      series={CHART_DATA}
      options={chartOptions}
    />
  );
}

export default BarChart;
