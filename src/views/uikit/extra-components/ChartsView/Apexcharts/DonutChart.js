import React from 'react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { ApexChartsOption } from '~/components/Charts/Apexcharts';
// ----------------------------------------------------------------------

const CHART_DATA = [44, 55, 13, 43];

function DonutChart() {
  const chartOptions = merge(ApexChartsOption(), {
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
    stroke: { show: false },
    legend: { horizontalAlign: 'center' },
    plotOptions: { pie: { donut: { size: '90%' } } }
  });

  return (
    <ReactApexChart
      width={400}
      type="donut"
      series={CHART_DATA}
      options={chartOptions}
    />
  );
}

export default DonutChart;
