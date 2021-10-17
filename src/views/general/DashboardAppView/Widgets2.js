import { merge } from 'lodash';
import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import ReactApexChart from 'react-apexcharts';
import { fNumber } from '~/utils/formatNumber';
import emailFill from '@iconify-icons/eva/email-fill';
import { ApexChartsOption } from '~/components/Charts/Apexcharts';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Card, Box, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      padding: theme.spacing(3),
      backgroundColor: theme.palette.warning.darker
    },
    icon: {
      width: 120,
      height: 120,
      opacity: 0.12,
      position: 'absolute',
      right: theme.spacing(-3),
      color: theme.palette.common.white
    }
  };
});

// ----------------------------------------------------------------------

Widgets2.propTypes = {
  className: PropTypes.string
};

const TOTAL = 55566;

function Widgets2({ className, ...other }) {
  const classes = useStyles();
  const theme = useTheme();

  const chartData = [75];
  const chartOptions = merge(ApexChartsOption(), {
    colors: [theme.palette.warning.main],
    chart: { sparkline: { enabled: true } },
    legend: { show: false },
    plotOptions: {
      radialBar: {
        hollow: { size: '78%' },
        track: { margin: 0 },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 6,
            color: theme.palette.common.white,
            fontSize: theme.typography.subtitle2.fontSize
          }
        }
      }
    }
  });

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <ReactApexChart
        width={86}
        height={86}
        type="radialBar"
        series={chartData}
        options={chartOptions}
      />
      <Box sx={{ ml: 3, color: 'white' }}>
        <Typography variant="h4"> {fNumber(TOTAL)}</Typography>
        <Box sx={{ typography: 'body2', opacity: 0.72 }}>Conversion</Box>
      </Box>
      <Icon icon={emailFill} className={classes.icon} />
    </Card>
  );
}

export default Widgets2;
