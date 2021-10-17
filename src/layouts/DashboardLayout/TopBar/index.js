import clsx from 'clsx';
import React from 'react';
import Account from './Account';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify-icons/eva/menu-2-fill';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Box, AppBar, Hidden, Toolbar, IconButton } from '@material-ui/core';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    backdropFilter: 'blur(8px)',
    backgroundColor: alpha(theme.palette.background.default, 0.72),
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`
    }
  },
  toolbar: {
    minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 5)
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: APPBAR_DESKTOP
    }
  },
  btnMenu: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.primary
  }
}));

// ----------------------------------------------------------------------

TopBar.propTypes = {
  onOpenNav: PropTypes.func,
  className: PropTypes.string
};

function TopBar({ onOpenNav, className }) {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)}>
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton onClick={onOpenNav} className={classes.btnMenu}>
            <Icon icon={menu2Fill} />
          </IconButton>
        </Hidden>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > *:not(:first-of-type)': {
              ml: {
                xs: 0.5,
                sm: 2,
                lg: 3
              }
            }
          }}
        >
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
