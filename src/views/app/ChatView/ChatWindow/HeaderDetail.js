import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { capitalCase } from 'change-case';
import { fToNow } from '~/utils/formatTime';
import videoFill from '@iconify-icons/eva/video-fill';
import phoneFill from '@iconify-icons/eva/phone-fill';
import BadgeStatus from '~/components/BadgeStatus';
import moreVerticalFill from '@iconify-icons/eva/more-vertical-fill';
import arrowIosForwardFill from '@iconify-icons/eva/arrow-ios-forward-fill';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Link, Avatar, Typography, AvatarGroup } from '@material-ui/core';
import { MIconButton } from '~/@material-extend';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    minHeight: 92,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 3)
  },
  icon: { width: 20, height: 20 },
  avatarGroup: {
    marginBottom: theme.spacing(0.5),
    '& > *': { width: 32, height: 32 }
  }
}));

// ----------------------------------------------------------------------

function OneAvatar({ participants }) {
  const participant = [...participants][0];

  if (participant === undefined) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ position: 'relative' }}>
        <Avatar src={participant.avatar} alt={participant.name} />
        <BadgeStatus
          status={participant.status}
          sx={{ position: 'absolute', right: 2, bottom: 2 }}
        />
      </Box>
      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2">{participant.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {participant.status !== 'offline'
            ? capitalCase(participant.status)
            : fToNow(participant.lastActivity)}
        </Typography>
      </Box>
    </Box>
  );
}

function GroupAvatar({ participants }) {
  const classes = useStyles();

  return (
    <div>
      <AvatarGroup max={3} className={classes.avatarGroup}>
        {participants.map(participant => (
          <Avatar
            key={participant.id}
            alt={participant.name}
            src={participant.avatar}
          />
        ))}
      </AvatarGroup>
      <Link
        variant="body2"
        underline="none"
        component="button"
        color="textSecondary"
        onClick={() => {}}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {participants.length} persons
          <Icon icon={arrowIosForwardFill} />
        </Box>
      </Link>
    </div>
  );
}

HeaderDetail.propTypes = {
  className: PropTypes.string,
  participants: PropTypes.array
};

function HeaderDetail({ participants, className, ...other }) {
  const classes = useStyles();
  const isGroup = participants.length > 1;

  return (
    <div className={clsx(classes.root, className)} {...other}>
      {isGroup ? (
        <GroupAvatar participants={participants} />
      ) : (
        <OneAvatar participants={participants} />
      )}

      <Box sx={{ flexGrow: 1 }} />
      <MIconButton>
        <Icon icon={phoneFill} className={classes.icon} />
      </MIconButton>
      <MIconButton>
        <Icon icon={videoFill} className={classes.icon} />
      </MIconButton>
      <MIconButton>
        <Icon icon={moreVerticalFill} className={classes.icon} />
      </MIconButton>
    </div>
  );
}

export default HeaderDetail;
