import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Box, Switch, InputBase, Typography } from '@material-ui/core';
import { MLabel } from '~/@material-extend';

// ----------------------------------------------------------------------

const camelPattern = /(^|[A-Z])[a-z]*/g;

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
  row: {
    display: 'flex',
    alignItems: 'center',
    textTransform: 'capitalize',
    justifyContent: 'space-between',
    color: theme.palette.common.white,
    '&:not(:last-child)': { marginBottom: theme.spacing(1) }
  },
  input: {
    width: 48,
    fontSize: 14,
    borderRadius: 4,
    textAlign: 'center',
    padding: theme.spacing(0),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.grey[500_12]
  }
}));

// ----------------------------------------------------------------------

ControlPanel.propTypes = {
  settings: PropTypes.object,
  interactionState: PropTypes.object,
  onChange: PropTypes.func,
  className: PropTypes.string
};

function formatSettingName(name) {
  return name.match(camelPattern).join(' ');
}

function ControlPanel({ settings, interactionState, onChange, className }) {
  const classes = useStyles();

  const renderCheckbox = (name, value) => (
    <div key={name} className={classes.row}>
      <Box variant="body2" component={Typography}>
        {formatSettingName(name)}
      </Box>
      <Switch
        size="small"
        color="primary"
        checked={value}
        onChange={evt => onChange(name, evt.target.checked)}
      />
    </div>
  );

  const renderNumericInput = (name, value) => (
    <div key={name} className={classes.row}>
      <Box variant="body2" component={Typography}>
        {formatSettingName(name)}
      </Box>
      <InputBase
        value={value}
        onChange={evt => onChange(name, Number(evt.target.value))}
        inputProps={{ type: 'number' }}
        classes={{ input: classes.input }}
      />
    </div>
  );

  const renderSetting = (name, value) => {
    switch (typeof value) {
      case 'boolean':
        return renderCheckbox(name, value);
      case 'number':
        return renderNumericInput(name, value);
      default:
        return null;
    }
  };

  const renderInteractionStates = ({
    isDragging,
    isPanning,
    isRotating,
    isZooming,
    inTransition
  }) => {
    return (
      <>
        <div className={classes.row}>
          <Typography variant="body2">Dragging</Typography>
          <MLabel
            title={isDragging ? 'Yes' : 'null'}
            color={isDragging ? 'primary' : 'error'}
            variant="filled"
          />
        </div>

        <div className={classes.row}>
          <Typography variant="body2">Transition</Typography>
          <MLabel
            title={inTransition ? 'Yes' : 'null'}
            color={inTransition ? 'primary' : 'error'}
            variant="filled"
          />
        </div>

        <div className={classes.row}>
          <Typography variant="body2">Panning</Typography>
          <MLabel
            title={isPanning ? 'Yes' : 'null'}
            color={isPanning ? 'primary' : 'error'}
            variant="filled"
          />
        </div>

        <div className={classes.row}>
          <Typography variant="body2">Rotating</Typography>
          <MLabel
            title={isRotating ? 'Yes' : 'null'}
            color={isRotating ? 'primary' : 'error'}
            variant="filled"
          />
        </div>

        <div className={classes.row}>
          <Typography variant="body2">Zooming</Typography>
          <MLabel
            title={isZooming ? 'Yes' : 'null'}
            color={isZooming ? 'primary' : 'error'}
            variant="filled"
          />
        </div>
      </>
    );
  };

  return (
    <div className={clsx(classes.root, className)}>
      {Object.keys(settings).map(name => renderSetting(name, settings[name]))}
      {renderInteractionStates(interactionState)}
    </div>
  );
}

export default ControlPanel;
