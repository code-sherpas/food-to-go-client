import React from 'react';
import { Icon } from '@iconify/react';
import Page from '~/components/Page';
import { useSnackbar } from 'notistack';
import Block from '~/components/Block';
import { PATH_APP } from '~/routes/paths';
import closeFill from '@iconify-icons/eva/close-fill';
import HeaderDashboard from '~/components/HeaderDashboard';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Grid,
  Container,
  IconButton,
  CardContent
} from '@material-ui/core';
import { MButton } from '~/@material-extend';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

function SnackbarView() {
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onSnackbarClose = color => {
    enqueueSnackbar(`This is an ${color}`, {
      variant: color,
      action: key => (
        <IconButton
          onClick={() => closeSnackbar(key)}
          size="small"
          color="inherit"
        >
          <Icon icon={closeFill} width="24" height="24" />
        </IconButton>
      )
    });
  };

  const onSnackbarAction = (color, anchor) => {
    enqueueSnackbar(`This is an ${color}`, {
      variant: color,
      anchorOrigin: anchor,
      action: key => (
        <>
          <MButton
            color={color !== 'inherit' ? 'inherit' : 'info'}
            onClick={() => {
              alert(`I belong to snackbar with key ${key}`);
            }}
          >
            Alert
          </MButton>
          <MButton
            color={color !== 'inherit' ? 'inherit' : 'info'}
            onClick={() => closeSnackbar(key)}
            size="small"
          >
            Dismiss
          </MButton>
        </>
      )
    });
  };

  return (
    <Page title="Components | Snackbar" className={classes.root}>
      <Container maxWidth="lg">
        <HeaderDashboard
          heading="Snackbar"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Components', href: PATH_APP.components.root },
            { name: 'Snackbar' }
          ]}
          moreLink={[
            'https://next.material-ui.com/components/snackbars',
            'https://www.iamhosseindhv.com/notistack'
          ]}
        />

        <Card>
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Block title="Simple">
                  <MButton
                    variant="text"
                    color="inherit"
                    onClick={() => enqueueSnackbar('This is an default')}
                  >
                    Default
                  </MButton>
                  <MButton
                    variant="contained"
                    color="info"
                    onClick={() =>
                      enqueueSnackbar('This is an info', { variant: 'info' })
                    }
                  >
                    Info
                  </MButton>
                  <MButton
                    variant="contained"
                    color="success"
                    onClick={() =>
                      enqueueSnackbar('This is an success', {
                        variant: 'success'
                      })
                    }
                  >
                    Success
                  </MButton>
                  <MButton
                    variant="contained"
                    color="warning"
                    onClick={() =>
                      enqueueSnackbar('This is an warning', {
                        variant: 'warning'
                      })
                    }
                  >
                    Warning
                  </MButton>
                  <MButton
                    variant="contained"
                    color="error"
                    onClick={() =>
                      enqueueSnackbar('This is an error', { variant: 'error' })
                    }
                  >
                    Error
                  </MButton>
                </Block>
              </Grid>

              <Grid item xs={12} md={6}>
                <Block title="With Close">
                  <MButton
                    variant="text"
                    color="inherit"
                    onClick={() => onSnackbarClose('default')}
                  >
                    Default
                  </MButton>
                  <MButton
                    variant="contained"
                    color="info"
                    onClick={() => onSnackbarClose('info')}
                  >
                    Info
                  </MButton>
                  <MButton
                    variant="contained"
                    color="success"
                    onClick={() => onSnackbarClose('success')}
                  >
                    Success
                  </MButton>
                  <MButton
                    variant="contained"
                    color="warning"
                    onClick={() => onSnackbarClose('warning')}
                  >
                    Warning
                  </MButton>
                  <MButton
                    variant="contained"
                    color="error"
                    onClick={() => onSnackbarClose('error')}
                  >
                    Error
                  </MButton>
                </Block>
              </Grid>
              <Grid item xs={12} md={6}>
                <Block title="With Action">
                  <MButton
                    variant="text"
                    color="inherit"
                    onClick={() => onSnackbarAction('default')}
                  >
                    Default
                  </MButton>
                  <MButton
                    variant="contained"
                    color="info"
                    onClick={() => onSnackbarAction('info')}
                  >
                    Info
                  </MButton>
                  <MButton
                    variant="contained"
                    color="success"
                    onClick={() => onSnackbarAction('success')}
                  >
                    Success
                  </MButton>
                  <MButton
                    variant="contained"
                    color="warning"
                    onClick={() => onSnackbarAction('warning')}
                  >
                    Warning
                  </MButton>
                  <MButton
                    variant="contained"
                    color="error"
                    onClick={() => onSnackbarAction('error')}
                  >
                    Error
                  </MButton>
                </Block>
              </Grid>

              <Grid item xs={12} md={6}>
                <Block title="anchorOrigin">
                  <MButton
                    variant="text"
                    color="inherit"
                    onClick={() =>
                      onSnackbarAction('default', {
                        vertical: 'top',
                        horizontal: 'left'
                      })
                    }
                  >
                    Top Left
                  </MButton>
                  <MButton
                    variant="text"
                    color="inherit"
                    onClick={() =>
                      onSnackbarAction('default', {
                        vertical: 'top',
                        horizontal: 'center'
                      })
                    }
                  >
                    Top Center
                  </MButton>
                  <MButton
                    variant="text"
                    color="inherit"
                    onClick={() => onSnackbarAction('default')}
                  >
                    Top Right
                  </MButton>
                  <MButton
                    variant="text"
                    color="inherit"
                    onClick={() =>
                      onSnackbarAction('default', {
                        vertical: 'bottom',
                        horizontal: 'left'
                      })
                    }
                  >
                    Bottom Left
                  </MButton>
                  <MButton
                    variant="text"
                    color="inherit"
                    onClick={() =>
                      onSnackbarAction('default', {
                        vertical: 'bottom',
                        horizontal: 'center'
                      })
                    }
                  >
                    Bottom Center
                  </MButton>
                  <MButton
                    variant="text"
                    color="inherit"
                    onClick={() =>
                      onSnackbarAction('default', {
                        vertical: 'bottom',
                        horizontal: 'right'
                      })
                    }
                  >
                    Bottom Right
                  </MButton>
                </Block>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default SnackbarView;
