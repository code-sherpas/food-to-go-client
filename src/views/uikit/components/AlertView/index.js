import React from 'react';
import Page from '~/components/Page';
import { PATH_APP } from '~/routes/paths';
import HeaderDashboard from '~/components/HeaderDashboard';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Alert,
  Button,
  Container,
  AlertTitle,
  CardHeader,
  CardContent
} from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  margin: {
    marginBottom: theme.spacing(3)
  },
  cardContent: {
    '& > *:not(:last-child)': {
      marginBottom: theme.spacing(2)
    }
  }
}));

// ----------------------------------------------------------------------

function AlertView() {
  const classes = useStyles();

  return (
    <Page title="Components | Alert" className={classes.root}>
      <Container maxWidth="lg">
        <HeaderDashboard
          heading="Alert"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Components', href: PATH_APP.components.root },
            { name: 'Alert' }
          ]}
          moreLink="https://next.material-ui.com/components/alert"
        />

        <Card className={classes.margin}>
          <CardHeader title="Simple" />
          <CardContent className={classes.cardContent}>
            <Alert severity="error" onClose={() => {}}>
              This is an error alert — check it out!
            </Alert>
            <Alert severity="warning" onClose={() => {}}>
              This is a warning alert — check it out!
            </Alert>
            <Alert severity="info">This is an info alert — check it out!</Alert>
            <Alert severity="success">
              This is a success alert — check it out!
            </Alert>
          </CardContent>
        </Card>

        <Card className={classes.margin}>
          <CardHeader title="Filled" />
          <CardContent className={classes.cardContent}>
            <Alert variant="filled" severity="error" onClose={() => {}}>
              This is an error alert — check it out!
            </Alert>
            <Alert variant="filled" severity="warning" onClose={() => {}}>
              This is a warning alert — check it out!
            </Alert>
            <Alert variant="filled" severity="info">
              This is an info alert — check it out!
            </Alert>
            <Alert variant="filled" severity="success">
              This is a success alert — check it out!
            </Alert>
          </CardContent>
        </Card>

        <Card className={classes.margin}>
          <CardHeader title="Outlined" />
          <CardContent className={classes.cardContent}>
            <Alert variant="outlined" severity="error" onClose={() => {}}>
              This is an error alert — check it out!
            </Alert>
            <Alert variant="outlined" severity="warning" onClose={() => {}}>
              This is a warning alert — check it out!
            </Alert>
            <Alert variant="outlined" severity="info">
              This is an info alert — check it out!
            </Alert>
            <Alert variant="outlined" severity="success">
              This is a success alert — check it out!
            </Alert>
          </CardContent>
        </Card>

        <Card className={classes.margin}>
          <CardHeader title="Description" />
          <CardContent className={classes.cardContent}>
            <Alert severity="error" onClose={() => {}}>
              <AlertTitle>Error</AlertTitle>
              This is an error alert — <strong>check it out!</strong>
            </Alert>
            <Alert severity="warning">
              <AlertTitle>Warning</AlertTitle>
              This is a warning alert — <strong>check it out!</strong>
            </Alert>
            <Alert severity="info">
              <AlertTitle>Info</AlertTitle>
              This is an info alert — <strong>check it out!</strong>
            </Alert>
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              This is a success alert — <strong>check it out!</strong>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Actions" />
          <CardContent className={classes.cardContent}>
            <Alert onClose={() => {}}>
              This is a success alert — check it out!
            </Alert>
            <Alert variant="outlined" onClose={() => {}}>
              This is a success alert — check it out!
            </Alert>
            <Alert variant="filled" onClose={() => {}}>
              This is a success alert — check it out!
            </Alert>
            <Alert
              action={
                <Button color="inherit" size="small" variant="outlined">
                  Undo
                </Button>
              }
            >
              This is a success alert — check it out!
            </Alert>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default AlertView;
