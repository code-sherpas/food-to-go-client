import React from 'react';
import { Icon } from '@iconify/react';
import Page from '~/components/Page';
import Block from '~/components/Block';
import { PATH_APP } from '~/routes/paths';
import AdbIcon from '@material-ui/icons/Adb';
import AddIcon from '@material-ui/icons/Add';
import AppleIcon from '@material-ui/icons/Apple';
import clockFill from '@iconify-icons/eva/clock-fill';
import CodeSnippets from '~/components/CodeSnippets';
import chargingFill from '@iconify-icons/eva/charging-fill';
import HeaderDashboard from '~/components/HeaderDashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import alertCircleFill from '@iconify-icons/eva/alert-circle-fill';
import colorPaletteFill from '@iconify-icons/eva/color-palette-fill';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import arrowCircleDownFill from '@iconify-icons/eva/arrow-circle-down-fill';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  SvgIcon,
  Container,
  CardHeader,
  CardContent
} from '@material-ui/core';
import { MIcon } from '~/@material-extend';
import { material, iconify, local } from './data';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  margin: {
    marginBottom: theme.spacing(5)
  }
}));

// ----------------------------------------------------------------------

function IconsView() {
  const classes = useStyles();

  return (
    <Page title="Foundations | Icons" className={classes.root}>
      <Container maxWidth="lg">
        <HeaderDashboard
          heading="Icons"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Foundations', href: PATH_APP.foundations.root },
            { name: 'Icons' }
          ]}
          moreLink={[
            'https://material-ui.com/components/material-icons',
            'https://iconify.design/icon-sets'
          ]}
        />

        <Card className={classes.margin}>
          <CardHeader title="Material Icons" />
          <CardContent>
            <Block>
              <CodeSnippets source={material} />
              <AdbIcon color="action" />
              <AddIcon color="disabled" />
              <AccountCircleIcon color="error" />
              <AirplanemodeActiveIcon color="inherit" />
              <AppleIcon color="primary" />
            </Block>
          </CardContent>
        </Card>

        <Card className={classes.margin}>
          <CardHeader title="Iconify Icons" />
          <CardContent>
            <Block>
              <CodeSnippets source={iconify} />
              <SvgIcon color="action">
                <Icon icon={alertCircleFill} width={24} height={24} />
              </SvgIcon>
              <SvgIcon color="disabled">
                <Icon icon={chargingFill} width={24} height={24} />
              </SvgIcon>
              <SvgIcon color="error">
                <Icon icon={arrowCircleDownFill} width={24} height={24} />
              </SvgIcon>
              <SvgIcon color="inherit">
                <Icon icon={clockFill} width={24} height={24} />
              </SvgIcon>
              <SvgIcon color="primary">
                <Icon icon={colorPaletteFill} width={24} height={24} />
              </SvgIcon>
            </Block>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Local Icons" />
          <CardContent>
            <Block>
              <CodeSnippets source={local} />
              <MIcon src="/static/icons/browser-edge.svg" />
              <MIcon src="/static/icons/browser-edge.svg" color="action" />
              <MIcon src="/static/icons/browser-edge.svg" color="disabled" />
              <MIcon src="/static/icons/browser-edge.svg" color="primary" />
              <MIcon src="/static/icons/elephant.svg" color="info" />
              <MIcon src="/static/icons/json-logo.svg" color="success" />
              <MIcon src="/static/icons/love-camera.svg" color="warning" />
              <MIcon src="/static/icons/shield.svg" color="error" />
            </Block>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default IconsView;
