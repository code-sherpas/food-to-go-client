import clsx from 'clsx';
import PropTypes from 'prop-types';
import Logo from '~/components/Logo';
import { Icon } from '@iconify/react';
import { PATH_APP } from '~/routes/paths';
import React, { useCallback } from 'react';
import sunFill from '@iconify-icons/eva/sun-fill';
import moonFill from '@iconify-icons/eva/moon-fill';
import { Link as RouterLink } from 'react-router-dom';
import { toggleTheme } from '~/redux/slices/dark-mode';
import { useDispatch, useSelector } from 'react-redux';
import menu2Fill from '@iconify-icons/eva/menu-2-fill';
import arrowIosForwardFill from '@iconify-icons/eva/arrow-ios-forward-fill';
import { alpha, makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  AppBar,
  Hidden,
  Toolbar,
  IconButton
} from '@material-ui/core';
import { MIconButton } from '~/@material-extend';

// ----------------------------------------------------------------------

const APPBAR_HEIGHT = 64;

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 999,
    backdropFilter: 'blur(8px)',
    boxShadow: theme.shadows[25].z8,
    color: theme.palette.text.primary,
    backgroundColor: alpha(theme.palette.background.default, 0.72),
    [theme.breakpoints.up('md')]: {
      zIndex: 1999
    }
  },
  toolbar: {
    minHeight: APPBAR_HEIGHT
  }
}));

// ----------------------------------------------------------------------

TopBar.propTypes = {
  onOpenNav: PropTypes.func
};

function TopBar({ onOpenNav, className }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { darkMode } = useSelector(state => state.theme);
  const onToggleTheme = useCallback(() => dispatch(toggleTheme()), [dispatch]);

  return (
    <AppBar className={clsx(classes.root, className)}>
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton onClick={onOpenNav} color="inherit">
            <Icon icon={menu2Fill} />
          </IconButton>
        </Hidden>
        <Hidden lgDown>
          <RouterLink to="/">
            <Logo />
          </RouterLink>
        </Hidden>

        <Box sx={{ flexGrow: 1 }} />

        <MIconButton
          onClick={onToggleTheme}
          color={darkMode ? 'primary' : 'default'}
          sx={{ mr: 2 }}
        >
          <Icon icon={darkMode ? sunFill : moonFill} width={20} height={20} />
        </MIconButton>

        <Button
          disableRipple
          to={PATH_APP.root}
          component={RouterLink}
          endIcon={<Icon icon={arrowIosForwardFill} />}
        >
          Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
