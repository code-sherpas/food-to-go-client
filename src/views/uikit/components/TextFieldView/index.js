import React from 'react';
import Filled from './Filled';
import Standard from './Standard';
import Outlined from './Outlined';
import Page from '~/components/Page';
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

function TextFieldView() {
  const classes = useStyles();

  return (
    <Page title="Components | Text Field" className={classes.root}>
      <Container maxWidth="lg">
        <HeaderDashboard
          heading="Text Field"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Components', href: PATH_APP.components.root },
            { name: 'Text Field' }
          ]}
          moreLink="https://next.material-ui.com/components/text-fields"
        />

        <Card className={classes.margin}>
          <CardHeader title="Outlined" />
          <CardContent>
            <Outlined />
          </CardContent>
        </Card>

        <Card className={classes.margin}>
          <CardHeader title="Standard" />
          <CardContent>
            <Standard />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Filled" />
          <CardContent>
            <Filled />
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default TextFieldView;
