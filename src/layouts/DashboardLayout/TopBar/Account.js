import clsx from 'clsx';
import { Icon } from '@iconify/react';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { PATH_APP } from '~/routes/paths';
import MyAvatar from '~/components/MyAvatar';
import React, { useRef, useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
import PopoverMenu from '~/components/PopoverMenu';
import useIsMountedRef from '~/hooks/useIsMountedRef';
import homeFill from '@iconify-icons/eva/home-fill';
import personFill from '@iconify-icons/eva/person-fill';
import settingsFill from '@iconify-icons/eva/settings-fill';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Button, Box, Divider, MenuItem, Typography } from '@material-ui/core';
import { MIconButton } from '~/@material-extend';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  menuItem: {
    ...theme.typography.body2,
    padding: theme.spacing(1, 2.5)
  },
  btnAvatar: {
    padding: 0,
    width: 44,
    height: 44
  },
  isSelected: {
    '&:before': {
      zIndex: 1,
      content: "''",
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      position: 'absolute',
      background: alpha(theme.palette.grey[900], 0.8)
    }
  },
  divider: {
    margin: theme.spacing(1, 0)
  }
}));

// ----------------------------------------------------------------------

function Account() {
  const classes = useStyles();
  const history = useHistory();
  const anchorRef = useRef(null);
  const firebase = useFirebase();
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();
  const [isOpen, setOpen] = useState(false);
  const { auth, profile } = useSelector(state => state.firebase);
  const displayName = auth.displayName || profile.displayName || '';

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      await firebase.logout();
      if (isMountedRef.current) {
        history.push('/');
        handleClose();
      }
    } catch (err) {
      console.error(err);
      enqueueSnackbar('Unable to logout', { variant: 'error' });
    }
  };

  return (
    <>
      <MIconButton
        ref={anchorRef}
        onClick={handleOpen}
        className={clsx(classes.btnAvatar, { [classes.isSelected]: isOpen })}
      >
        <MyAvatar />
      </MIconButton>

      <PopoverMenu
        width={220}
        open={isOpen}
        onClose={handleClose}
        anchorEl={anchorRef.current}
      >
        <Box sx={{ my: 2, px: 2.5 }}>
          <Typography variant="subtitle1" color="textPrimary" noWrap>
            {displayName}
          </Typography>
          <Typography variant="body2" color="textSecondary" noWrap>
            {auth.email}
          </Typography>
        </Box>

        <Divider className={classes.divider} />
        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button
            fullWidth
            color="inherit"
            variant="outlined"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </PopoverMenu>
    </>
  );
}

export default Account;
