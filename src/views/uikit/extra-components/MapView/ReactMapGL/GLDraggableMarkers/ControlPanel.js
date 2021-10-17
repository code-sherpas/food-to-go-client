import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

// ----------------------------------------------------------------------

const EVENT_NAMES = ['onDragStart', 'onDrag', 'onDragEnd'];

function round5(value) {
  return (Math.round(value * 1e5) / 1e5).toFixed(5);
}

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 99,
    minWidth: 200,
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    padding: theme.spacing(2),
    backdropFilter: 'blur(8px)',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.grey[900], 0.8)
  }
}));

// ----------------------------------------------------------------------

ControlPanel.propTypes = {
  events: PropTypes.object,
  className: PropTypes.string
};

function ControlPanel({ events = {}, className }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      {EVENT_NAMES.map(event => {
        const lngLat = events[event];
        return (
          <div key={event}>
            <Box
              variant="subtitle2"
              component={Typography}
              sx={{ color: 'white' }}
            >
              {event}:
            </Box>
            {lngLat ? (
              <Box
                variant="subtitle2"
                component={Typography}
                sx={{ color: 'primary.main' }}
              >
                {lngLat.map(round5).join(', ')}
              </Box>
            ) : (
              <Box
                variant="subtitle2"
                component={Typography}
                sx={{ color: 'error.main' }}
              >
                <em>null</em>
              </Box>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ControlPanel;
