import clsx from 'clsx';
import Logo from '~/components/Logo';
import { Icon } from '@iconify/react';
import React, { useState, useRef } from 'react';
import useOffSetTop from '~/hooks/useOffSetTop';
import PopoverMenu from '~/components/PopoverMenu';
import homeFill from '@iconify-icons/eva/home-fill';
import { PATH_HOME, PATH_DOCS } from '~/routes/paths';
import roundSpeed from '@iconify-icons/ic/round-speed';
import menu2Fill from '@iconify-icons/eva/menu-2-fill';
import bookOpenFill from '@iconify-icons/eva/book-open-fill';
import roundStreetview from '@iconify-icons/ic/round-streetview';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { makeStyles, alpha } from '@material-ui/core/styles';
import {
  Box,
  List,
  Link,
  Button,
  AppBar,
  Hidden,
  Toolbar,
  MenuItem,
  Container,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';
import { MIconButton } from '~/@material-extend';

// ----------------------------------------------------------------------

const MENU_LINKS = [
  { title: 'Home', icon: homeFill, href: '/' },
  { title: 'Components', icon: roundStreetview, href: PATH_HOME.components },
  { title: 'Dashboard', icon: roundSpeed, href: PATH_HOME.dashboard },
  { title: 'Documentation', icon: bookOpenFill, href: PATH_DOCS.root }
];

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 96;

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  toolbar: {
    height: APP_BAR_MOBILE,
    transition: theme.transitions.create(['height', 'background-color'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter
    }),
    [theme.breakpoints.up('md')]: {
      height: APP_BAR_DESKTOP
    }
  },
  toolbarContainer: {
    lineHeight: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  toolbarShadow: {
    left: 0,
    right: 0,
    bottom: 0,
    height: 24,
    zIndex: -1,
    content: "''",
    margin: 'auto',
    borderRadius: '50%',
    position: 'absolute',
    width: `calc(100% - 48px)`,
    boxShadow: theme.shadows[25].z8
  },
  desktopMenu: {
    '& > * ': {
      color: theme.palette.text.primary,
      marginRight: `${theme.spacing(5)} !important`
    }
  },
  isDesktopActive: {
    color: `${theme.palette.primary.main} !important`
  },
  mobileMenu: {
    color: theme.palette.text.secondary
  },
  isMobileActive: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    )
  },
  isHome: { color: theme.palette.common.white },
  onScroll: {
    '& $toolbar': {
      backgroundColor: theme.palette.background.default
    },
    '& $isHome': { color: theme.palette.text.primary },
    [theme.breakpoints.up('md')]: {
      '& $toolbar': { height: APP_BAR_DESKTOP - 20 }
    }
  }
}));

// ----------------------------------------------------------------------

function TopBar() {
  const classes = useStyles();
  const anchorRef = useRef(null);
  const { pathname } = useLocation();
  const offset = useOffSetTop(100);
  const [openMenu, setOpenMenu] = useState(false);
  const isHome = pathname === '/';

  const renderMenuDesktop = (
    <div className={classes.desktopMenu}>
      {MENU_LINKS.map(link => (
        <Link
          exact
          to={link.href}
          key={link.title}
          color="initial"
          underline="none"
          variant="subtitle2"
          component={RouterLink}
          activeClassName={classes.isDesktopActive}
          className={clsx({
            [classes.isHome]: isHome
          })}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );

  const renderMenuMobile = (
    <PopoverMenu
      width={220}
      open={openMenu}
      anchorEl={anchorRef.current}
      onClose={() => setOpenMenu(false)}
    >
      <List>
        {MENU_LINKS.map(link => (
          <MenuItem
            exact
            to={link.href}
            key={link.title}
            component={RouterLink}
            onClick={() => setOpenMenu(false)}
            activeClassName={classes.isMobileActive}
            className={classes.mobileMenu}
          >
            <ListItemIcon>
              <Icon icon={link.icon} width={20} height={20} />
            </ListItemIcon>
            <ListItemText>{link.title}</ListItemText>
          </MenuItem>
        ))}
      </List>
    </PopoverMenu>
  );

  return (
    <AppBar
      color="transparent"
      className={clsx(classes.root, { [classes.onScroll]: offset })}
    >
      <Toolbar disableGutters className={classes.toolbar}>
        <Container maxWidth="lg" className={classes.toolbarContainer}>
          <RouterLink to="/">
            <Logo />
          </RouterLink>
          <Box sx={{ flexGrow: 1 }} />

          <Hidden mdDown>{renderMenuDesktop}</Hidden>

          <Button
            underline="none"
            variant="contained"
            component={Link}
            href={PATH_HOME.purchase}
          >
            Purchase Now
          </Button>

          <Hidden mdUp>
            <MIconButton
              ref={anchorRef}
              onClick={() => setOpenMenu(true)}
              className={clsx({
                [classes.isHome]: isHome
              })}
            >
              <Icon icon={menu2Fill} />
            </MIconButton>
            {renderMenuMobile}
          </Hidden>
        </Container>
      </Toolbar>
      {offset && <span className={classes.toolbarShadow} />}
    </AppBar>
  );
}

export default TopBar;
