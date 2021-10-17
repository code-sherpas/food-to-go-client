import React from 'react';
import Page from '~/components/Page';
import { PATH_APP } from '~/routes/paths';
import CopyClipboard from '~/components/CopyClipboard';
import HeaderDashboard from '~/components/HeaderDashboard';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, CardContent } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

function CopyToClipboardView() {
  const classes = useStyles();

  return (
    <Page title="Extra Components | Copy To Clipboard" className={classes.root}>
      <Container maxWidth="lg">
        <HeaderDashboard
          heading="Copy To Clipboard"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Copy To Clipboard' }
          ]}
          moreLink="https://www.npmjs.com/package/react-copy-to-clipboard"
        />

        <Card>
          <CardContent>
            <CopyClipboard value="https://www.npmjs.com/package/react-copy-to-clipboard" />
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default CopyToClipboardView;
