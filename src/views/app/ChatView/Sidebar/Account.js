import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { capitalCase } from 'change-case';
import { useSelector } from 'react-redux';
import MyAvatar from '~/components/MyAvatar';
import BadgeStatus from '~/components/BadgeStatus';
import settingsFill from '@iconify-icons/eva/settings-fill';
import roundAccountBox from '@iconify-icons/ic/round-account-box';
import roundPowerSettingsNew from '@iconify-icons/ic/round-power-settings-new';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  List,
  Select,
  Divider,
  Popover,
  Tooltip,
  ListItem,
  Typography,
  IconButton,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

// ----------------------------------------------------------------------

const STATUS = ['online', 'invisible', 'away'];

const useStyles = makeStyles(theme => ({
  root: {},
  listItem: {
    padding: theme.spacing(1, 2.5)
  },
  select: {
    '& svg': { display: `none` },
    '& fieldset': { border: `none !important` },
    '& select': {
      padding: 0,
      ...theme.typography.body2,
      '&:focus': { backgroundColor: 'transparent' }
    }
  }
}));

// ----------------------------------------------------------------------

Account.propTypes = {
  className: PropTypes.string
};

function Account({ className }) {
  const classes = useStyles();
  const { auth, profile } = useSelector(state => state.firebase);
  const [open, setOpen] = useState(null);
  const [status, setStatus] = useState('online');

  const handleOpen = event => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleChangeStatus = event => {
    setStatus(event.target.value);
  };

  return (
    <div className={clsx(classes.root, className)}>
      <Box sx={{ position: 'relative' }}>
        <MyAvatar
          onClick={handleOpen}
          sx={{ cursor: 'pointer', width: 48, height: 48 }}
        />
        <BadgeStatus
          status={status}
          sx={{ position: 'absolute', bottom: 2, right: 2 }}
        />
      </Box>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        classes={{ paper: classes.popover }}
      >
        <Box
          sx={{
            py: 2,
            pr: 1,
            pl: 2.5,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <MyAvatar />

          <Box sx={{ ml: 2, mr: 3 }}>
            <Typography variant="subtitle1" noWrap>
              {auth.displayName || profile.displayName}
            </Typography>
            <Typography variant="body2" color="textSecondary" noWrap>
              {auth.email}
            </Typography>
          </Box>

          <Tooltip title="Log out">
            <IconButton>
              <Icon icon={roundPowerSettingsNew} width={24} height={24} />
            </IconButton>
          </Tooltip>
        </Box>
        <Divider />

        <List>
          <ListItem disableGutters className={classes.listItem}>
            <ListItemIcon>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <BadgeStatus status={status} />
              </Box>
            </ListItemIcon>
            <ListItemText>
              <Select
                native
                fullWidth
                disableUnderline
                size="small"
                value={status}
                onChange={handleChangeStatus}
                className={classes.select}
              >
                {STATUS.map(option => (
                  <option key={option} value={option}>
                    {capitalCase(option)}
                  </option>
                ))}
              </Select>
            </ListItemText>
          </ListItem>

          <ListItem button disableGutters className={classes.listItem}>
            <ListItemIcon>
              <Icon icon={roundAccountBox} width={24} height={24} />
            </ListItemIcon>
            <ListItemText
              primary="Profile"
              primaryTypographyProps={{
                variant: 'body2'
              }}
            />
          </ListItem>

          <ListItem button disableGutters className={classes.listItem}>
            <ListItemIcon>
              <Icon icon={settingsFill} width={24} height={24} />
            </ListItemIcon>
            <ListItemText
              primary="Settings"
              primaryTypographyProps={{
                variant: 'body2'
              }}
            />
          </ListItem>
        </List>
      </Popover>
    </div>
  );
}

export default Account;
