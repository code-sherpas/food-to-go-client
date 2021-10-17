import React from 'react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { ApexChartsOption } from '~/components/Charts/Apexcharts';

// ----------------------------------------------------------------------

const CHART_DATA = [44, 55, 13, 43];

function PieChart() {
  const chartOptions = merge(ApexChartsOption(), {
    labels: ['Team A', 'Team B', 'Team C', 'Team D'],
    legend: {
      position: 'right',
      offsetX: -20,
      offsetY: 64,
      itemMargin: { vertical: 8 }
    },
    stroke: { show: false },
    dataLabels: { enabled: true, dropShadow: { enabled: false } },
    plotOptions: {
      pie: { donut: { labels: { show: false } } }
    }
  });

  return (
    <ReactApexChart
      type="pie"
      width={400}
      series={CHART_DATA}
      options={chartOptions}
    />
  );
}

export default PieChart;
