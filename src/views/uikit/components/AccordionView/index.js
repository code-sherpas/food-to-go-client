import React from 'react';
import faker from 'faker';
import Simple from './Simple';
import Controlled from './Controlled';
import Page from '~/components/Page';
import { PATH_APP } from '~/routes/paths';
import HeaderDashboard from '~/components/HeaderDashboard';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, CardHeader, CardContent } from '@material-ui/core';

// ----------------------------------------------------------------------

const ACCORDIONS = [...Array(4)].map((accordion, index) => {
  const setIndex = index + 1;
  return {
    value: `panel${setIndex}`,
    heading: `Accordion${setIndex}`,
    subHeading: faker.lorem.slug(),
    text: faker.lorem.lines()
  };
});

const useStyles = makeStyles(theme => ({
  root: {},
  margin: {
    marginBottom: theme.spacing(3)
  }
}));

// ----------------------------------------------------------------------

function AccordionView() {
  const classes = useStyles();

  return (
    <Page title="Components | Accordion" className={classes.root}>
      <Container>
        <HeaderDashboard
          heading="Accordion"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Components', href: PATH_APP.components.root },
            { name: 'Accordion' }
          ]}
          moreLink="https://next.material-ui.com/components/accordion"
        />
        <Card className={classes.margin}>
          <CardHeader title="Simple" />
          <CardContent>
            <Simple accordions={ACCORDIONS} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Controlled" />
          <CardContent>
            <Controlled accordions={ACCORDIONS} />
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default AccordionView;
