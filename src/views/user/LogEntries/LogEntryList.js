import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Skeleton } from '@material-ui/core';
import LogEntry from './LogEntry';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

const SkeletonLoad = (
  <Grid container spacing={3}>
    {[...Array(8)].map((item, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Skeleton
          component={Box}
          variant="rectangular"
          sx={{ width: '100%', paddingTop: '115%', borderRadius: 2 }}
        />
      </Grid>
    ))}
  </Grid>
);

LogEntryList.propTypes = {
  logEntry: PropTypes.array.isRequired,
  className: PropTypes.string
};

function LogEntryList({ logEntry, className }) {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={clsx(classes.root, className)}>
      {logEntry.map(log => (
        <Grid key={log.id} item xs={12} sm={6} md={4}>
          <LogEntry logEntryKind={log} />
        </Grid>
      ))}
      {!logEntry.length && SkeletonLoad}
    </Grid>
  );
}

export default LogEntryList;
