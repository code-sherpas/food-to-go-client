import React from 'react';
import Page from '~/components/Page';
import Block from '~/components/Block';
import { PATH_APP } from '~/routes/paths';
import HomeIcon from '@material-ui/icons/Home';
import GrainIcon from '@material-ui/icons/Grain';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MBreadcrumbs from '~/@material-extend/MBreadcrumbs';
import HeaderDashboard from '~/components/HeaderDashboard';
import { makeStyles } from '@material-ui/core/styles';
import {
  Link,
  Card,
  Grid,
  Container,
  Typography,
  CardContent,
  Breadcrumbs
} from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  link: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: theme.spacing(0.5)
  }
}));

// ----------------------------------------------------------------------

function BreadcrumbView() {
  const classes = useStyles();

  return (
    <Page title="Components | Breadcrumbs" className={classes.root}>
      <Container maxWidth="lg">
        <HeaderDashboard
          heading="Breadcrumbs"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Components', href: PATH_APP.components.root },
            { name: 'Breadcrumbs' }
          ]}
          moreLink="https://next.material-ui.com/components/breadcrumbs"
        />

        <Card>
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Block title="Text">
                  <Breadcrumbs>
                    <Link color="inherit" href="/">
                      Material-UI
                    </Link>
                    <Link color="inherit" href="#">
                      Core
                    </Link>
                    <Typography color="textPrimary">Breadcrumb</Typography>
                  </Breadcrumbs>
                </Block>
              </Grid>

              <Grid item xs={12} md={6}>
                <Block title="With Icon">
                  <Breadcrumbs>
                    <Link color="inherit" href="/" className={classes.link}>
                      <HomeIcon className={classes.icon} />
                      Material-UI
                    </Link>
                    <Link color="inherit" href="#" className={classes.link}>
                      <WhatshotIcon className={classes.icon} />
                      Core
                    </Link>
                    <Typography color="textPrimary" className={classes.link}>
                      <GrainIcon className={classes.icon} />
                      Breadcrumb
                    </Typography>
                  </Breadcrumbs>
                </Block>
              </Grid>

              <Grid item xs={12}>
                <Block title="Customized">
                  <MBreadcrumbs
                    links={[
                      { name: 'Home', href: '#', icon: <HomeIcon /> },
                      { name: 'Link1', href: '#', icon: <WhatshotIcon /> },
                      { name: 'Link2', href: '#', icon: <WhatshotIcon /> },
                      { name: 'Link3', href: '#', icon: <WhatshotIcon /> },
                      { name: 'Link4', href: '#', icon: <WhatshotIcon /> },
                      { name: 'Link5', href: '#', icon: <WhatshotIcon /> }
                    ]}
                  />
                </Block>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default BreadcrumbView;
