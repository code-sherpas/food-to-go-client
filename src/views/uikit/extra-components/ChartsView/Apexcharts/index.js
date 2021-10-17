import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import AreaChart from './AreaChart';
import LineChart from './LineChart';
import MixedChart from './MixedChart';
import DonutChart from './DonutChart';
import Page from '~/components/Page';
import RadarBarChart from './RadarBarChart';
import { PATH_APP } from '~/routes/paths';
import RadialBarChart from './RadialBarChart';
import ColumnSingleChart from './ColumnSingleChart';
import ColumnStackedChart from './ColumnStackedChart';
import ColumnMultipleChart from './ColumnMultipleChart';
import ColumnNegativeChart from './ColumnNegativeChart';
import HeaderDashboard from '~/components/HeaderDashboard';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Grid,
  Container,
  CardHeader,
  CardContent
} from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    height: 420,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

function Apexcharts() {
  const classes = useStyles();

  return (
    <Page title="Extra Components | Apexcharts" className={classes.root}>
      <Container maxWidth="lg">
        <HeaderDashboard
          heading="Apexcharts"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Charts', href: PATH_APP.components.chart.root },
            { name: 'Apexcharts' }
          ]}
          moreLink="https://apexcharts.com"
        />

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Area" />
              <CardContent>
                <AreaChart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Line" />
              <CardContent>
                <LineChart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Column Single" />
              <CardContent>
                <ColumnSingleChart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Column Multiple" />
              <CardContent>
                <ColumnMultipleChart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Column Stacked" />
              <CardContent>
                <ColumnStackedChart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Column Negative" />
              <CardContent>
                <ColumnNegativeChart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Bar" />
              <CardContent>
                <BarChart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Mixed" />
              <CardContent>
                <MixedChart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Pie" />
              <CardContent className={classes.content}>
                <PieChart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Donut" />
              <CardContent className={classes.content}>
                <DonutChart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Radial Bar" />
              <CardContent className={classes.content}>
                <RadialBarChart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Radar" />
              <CardContent className={classes.content}>
                <RadarBarChart />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default Apexcharts;
