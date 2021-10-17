import clsx from 'clsx';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Card,
  CardActionArea,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Collapse,
  Rating,
  TextField,
  List
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SendIcon from '@material-ui/icons/Send';
import Editable from '~/components/Editable/editable';
import checkIfEmpty from '~/utils/validation';
import convertAmountToIndicator from '~/utils/convertAmountToIndicator';
import convertTimeStampToHrMin from '~/utils/convertTimeStampToHrMin';
// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  cardMediaWrap: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    paddingTop: 'calc(100% * 3 / 16)',
    '&:before': {
      top: 0,
      zIndex: 9,
      content: "''",
      width: '100%',
      height: '100%',
      position: 'absolute',
      backdropFilter: 'blur(3px)',
      borderTopLeftRadius: theme.shape.borderRadiusMd,
      borderTopRightRadius: theme.shape.borderRadiusMd
    }
  },
  cardContent: {
    paddingBottom: 0,
    marginTop: theme.spacing(3)
  },
  imageSizing: {
    width: '5%',
    height: '5%',
    padding: '0.25rem'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  errorText: {
    color: 'red',
    opacity: 0.7
  }
}));

// ----------------------------------------------------------------------

LogEntry.propTypes = {
  //   log: PropTypes.object.isRequired,
  className: PropTypes.string
};

function LogEntry({ className, logEntryKind }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [newLog, setNewLog] = React.useState('');
  const [logEntries, setLogEntries] = React.useState([]);
  const [showError, setShowError] = React.useState(false);

  const handleExpandClick = () => {
    // setExpanded(!expanded);
  };

  const handleSubmit = () => {
    if (checkIfEmpty(newLog)) {
      setShowError(true);
    } else {
      setLogEntries(logEntries.concat(newLog));
      setNewLog('');
      setShowError(false);
    }
  };

  const amount = logEntryKind.attributes.amount
    ? convertAmountToIndicator(logEntryKind.attributes.amount)
    : convertAmountToIndicator(logEntryKind.attributes.duration);
  const time = logEntryKind.attributes.time
    ? convertTimeStampToHrMin(logEntryKind.attributes.time)
    : '';
  return (
    <CardActionArea>
      <Card
        className={clsx(classes.root, className)}
        display="flex"
        justifyContent="between"
      >
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
        />
        <div className={classes.cardMediaWrap}>
          <Avatar
            variant="square"
            alt={'log-entry'}
            src={logEntryKind.links.iconURL}
            sx={{
              width: 50,
              height: 50,
              zIndex: 11,
              position: 'absolute',
              transform: 'translateY(-50%)'
            }}
          />
        </div>
        <CardContent className={classes.cardContent}>
          <Box display="flex" mb={3} justifyContent="center" width={1}>
            <Rating
              readOnly={true}
              defaultValue={amount}
              max={4}
              emptyIcon={
                <img
                  src={logEntryKind.links.dataRepresentationIcons.emptyIcon}
                />
              }
              icon={
                <img
                  src={logEntryKind.links.dataRepresentationIcons.filledIcon}
                />
              }
            />
          </Box>
          <Typography
            variant="subtitle1"
             align="center">
            {time}
          </Typography>
          <Box textAlign="center">
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {logEntries.map(logEntry => (
                <List width={1} sx={{ p: 0 }}>
                  <Editable logEntry={logEntry} />
                </List>
              ))}
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width={1}
            >
              <TextField
                placeholder="Enter your comment here."
                fullWidth={true}
                value={newLog}
                onChange={e => setNewLog(e.target.value)}
              />
              <IconButton onClick={handleSubmit}>
                <SendIcon sx={{ ml: 2 }} />
              </IconButton>
            </Box>
            {showError ? (
              <Typography
                align="center"
                sx={{ mt: 2 }}
                className={classes.errorText}
              >
                Field cannot be empty
              </Typography>
            ) : (
              <></>
            )}
          </CardContent>
        </Collapse>
      </Card>
    </CardActionArea>
  );
}

export default LogEntry;
