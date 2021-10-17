import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { differenceInDays } from 'date-fns';
import { fDate } from '~/utils/formatTime';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Box, Slider, Switch, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

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
  },
  switch: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}));

// ----------------------------------------------------------------------

ControlPanel.propTypes = {
  isAllDay: PropTypes.bool,
  endTime: PropTypes.number,
  startTime: PropTypes.number,
  onChangeDay: PropTypes.func,
  selectedTime: PropTypes.number,
  onChangeAllDay: PropTypes.func,
  className: PropTypes.string
};

function ControlPanel({
  isAllDay,
  endTime,
  startTime,
  onChangeDay,
  selectedTime,
  onChangeAllDay,
  className
}) {
  const classes = useStyles();
  const day = 24 * 60 * 60 * 1000;
  const maxDays = differenceInDays(new Date(endTime), new Date(startTime));

  const handleChange = evt => {
    const daysToAdd = evt.target.value;
    const newTime = startTime + daysToAdd * day;
    onChangeDay(newTime);
  };

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.switch}>
        <Box variant="subtitle2" component={Typography} sx={{ color: 'white' }}>
          All Days
        </Box>
        <Switch
          size="small"
          color="primary"
          checked={isAllDay}
          onChange={evt => onChangeAllDay(evt.target.checked)}
        />
      </div>
      <br />
      <Box
        variant="body2"
        component={Typography}
        sx={{ color: isAllDay ? 'text.disabled' : 'white', mb: 1 }}
      >
        Each Day: {fDate(selectedTime)}
      </Box>
      <Slider
        disabled={isAllDay}
        min={1}
        step={1}
        max={maxDays}
        defaultValue={12}
        onChange={handleChange}
      />
    </div>
  );
}

export default ControlPanel;
