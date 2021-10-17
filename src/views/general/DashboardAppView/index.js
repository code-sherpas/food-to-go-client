import React from 'react';
import Welcome from './Welcome';
import Widgets1 from './Widgets1';
import Widgets2 from './Widgets2';
import NewInvoice from './NewInvoice';
import TopAuthors from './TopAuthors';
import Page from '~/components/Page';
import { useSelector } from 'react-redux';
import FeaturedApp from './FeaturedApp';
import AreaInstalled from './AreaInstalled';
import TotalDownloads from './TotalDownloads';
import TotalInstalled from './TotalInstalled';
import CurrentDownload from './CurrentDownload';
import TotalActiveUsers from './TotalActiveUsers';
import TopInstalledCountries from './TopInstalledCountries';
import TopRelatedApplications from './TopRelatedApplications';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

function DashboardAppView() {
  const classes = useStyles();
  const { auth, profile } = useSelector(state => state.firebase);
  const displayName = auth.displayName || profile.displayName;

  return (
    <Page title="Dashboard" className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={12}>
          {/*********************/}
          <Grid item xs={12} md={6}>
            <Welcome displayName={displayName} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default DashboardAppView;
