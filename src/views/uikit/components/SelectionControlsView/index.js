import React from 'react';
import Switches from './Switches';
import Checkboxes from './Checkboxes';
import Page from '~/components/Page';
import RadioButtons from './RadioButtons';
import { PATH_APP } from '~/routes/paths';
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

// ----------------------------------------------------------------------

function SelectionControlsView() {
  const classes = useStyles();

  return (
    <Page title="Components | Selection Controls" className={classes.root}>
      <Container maxWidth="lg">
        <HeaderDashboard
          heading="Selection Controls"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Components', href: PATH_APP.components.root },
            { name: 'Selection Controls' }
          ]}
          moreLink={[
            'https://next.material-ui.com/components/checkboxes',
            'https://next.material-ui.com/components/radio-buttons',
            'https://next.material-ui.com/components/switches'
          ]}
        />

        <Card className={classes.margin}>
          <CardHeader title="Checkboxes" />
          <CardContent>
            <Checkboxes />
          </CardContent>
        </Card>

        <Card className={classes.margin}>
          <CardHeader title="Radio Buttons" />
          <CardContent>
            <RadioButtons />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Switches" />
          <CardContent>
            <Switches />
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default SelectionControlsView;
