import React from 'react';
import PickerDate from './PickerDate';
import PickerTime from './PickerTime';
import Page from '~/components/Page';
import { PATH_APP } from '~/routes/paths';
import PickerDateTime from './PickerDateTime';
import PickerDateRange from './PickerDateRange';
import HeaderDashboard from '~/components/HeaderDashboard';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, CardHeader, CardContent } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  margin: {
    marginBottom: theme.spacing(3)
  }
}));

function Pickers() {
  const classes = useStyles();

  return (
    <Page title="Components | Date / Time pickers" className={classes.root}>
      <Container maxWidth="lg">
        <HeaderDashboard
          heading="Date / Time pickers"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Components', href: PATH_APP.components.root },
            { name: 'Pickers' }
          ]}
          moreLink="https://next.material-ui.com/components/pickers"
        />

        <Card className={classes.margin}>
          <CardHeader title="Date picker" />
          <CardContent>
            <PickerDate />
          </CardContent>
        </Card>

        <Card className={classes.margin}>
          <CardHeader title="Date Range Picker" />
          <CardContent>
            <PickerDateRange />
          </CardContent>
        </Card>

        <Card className={classes.margin}>
          <CardHeader title="Date Time Picker" />
          <CardContent>
            <PickerDateTime />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Time Picker" />
          <CardContent>
            <PickerTime />
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default Pickers;
