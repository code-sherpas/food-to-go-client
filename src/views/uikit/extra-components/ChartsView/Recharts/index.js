import React from 'react';
import BarRechart from './BarRechart';
import PieRechart from './PieRechart';
import Page from '~/components/Page';
import AreaRechart from './AreaRechart';
import LineRechart from './LineRechart';
import MixedRechart from './MixedRechart';
import DonutRechart from './DonutRechart';
import RadarRechart from './RadarRechart';
import { PATH_APP } from '~/routes/paths';
import RadialBarRechart from './RadialBarRechart';
import ColumnSingleRechart from './ColumnSingleRechart';
import ColumnStackedRechart from './ColumnStackedRechart';
import ColumnMultipleRechart from './ColumnMultipleRechart';
import ColumnNegativeRechart from './ColumnNegativeRechart';
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
  root: {}
}));

function Recharts() {
  const classes = useStyles();

  return (
    <Page title="Extra Components | Recharts" className={classes.root}>
      <Container maxWidth="lg">
        <HeaderDashboard
          heading="Recharts"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Chart', href: PATH_APP.components.chart.root },
            { name: 'Recharts' }
          ]}
          moreLink="https://recharts.org"
        />

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Area" />
              <CardContent>
                <AreaRechart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Line" />
              <CardContent>
                <LineRechart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Column Single" />
              <CardContent>
                <ColumnSingleRechart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Column Multiple" />
              <CardContent>
                <ColumnMultipleRechart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Column Stacked" />
              <CardContent>
                <ColumnStackedRechart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Column Negative" />
              <CardContent>
                <ColumnNegativeRechart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Bar" />
              <CardContent>
                <BarRechart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Mixed" />
              <CardContent>
                <MixedRechart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Pie" />
              <CardContent>
                <PieRechart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Donut" />
              <CardContent>
                <DonutRechart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Radial Bar" />
              <CardContent>
                <RadialBarRechart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Radar" />
              <CardContent>
                <RadarRechart />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default Recharts;
