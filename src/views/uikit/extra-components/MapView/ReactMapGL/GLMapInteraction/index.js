import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ControlPanel from './ControlPanel';
import MapGL, { Marker } from 'react-map-gl';
import {
  ControlScale,
  ControlGeolocate,
  ControlNavigation,
  ControlFullscreen
} from '../controls';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  station: {
    width: 12,
    height: 12,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.error.main,
    '& > *': { display: 'none' },
    '&:hover': {
      width: 'auto',
      height: 'auto',
      padding: theme.spacing(0.5, 1),
      backgroundColor: theme.palette.grey[800],
      '& > *': { display: 'block' }
    },
    '& .label': {
      borderRadius: 8,
      width: theme.spacing(1),
      height: theme.spacing(1),
      marginRight: theme.spacing(1),
      backgroundColor: theme.palette.error.main
    }
  }
}));

// ----------------------------------------------------------------------

ControlPanel.propTypes = {
  className: PropTypes.string
};

function GLMapInteraction({ data, className, ...other }) {
  const classes = useStyles();
  const [interactionState, setInteractionState] = useState({});
  const [settings, setSettings] = useState({
    dragPan: true,
    dragRotate: true,
    scrollZoom: true,
    touchZoom: true,
    touchRotate: true,
    keyboard: true,
    doubleClickZoom: true,
    minZoom: 0,
    maxZoom: 20,
    minPitch: 0,
    maxPitch: 85
  });
  const [viewport, setViewport] = useState({
    latitude: 37.729,
    longitude: -122.36,
    zoom: 11,
    bearing: 0,
    pitch: 50
  });

  const handleChangeSetting = (name, value) => {
    setSettings({
      ...settings,
      [name]: value
    });
  };

  return (
    <div className={clsx(classes.root, className)}>
      <MapGL
        {...viewport}
        {...settings}
        onViewportChange={viewport => setViewport(viewport)}
        onInteractionStateChange={interactionState =>
          setInteractionState(interactionState)
        }
        {...other}
      >
        <ControlScale />
        <ControlNavigation />
        <ControlFullscreen />
        <ControlGeolocate />

        {data.map(station => (
          <Marker
            key={station.name}
            longitude={station.coordinates[0]}
            latitude={station.coordinates[1]}
            captureDrag={false}
            captureDoubleClick={false}
          >
            <div className={classes.station}>
              <div className="label" />
              <Box
                variant="caption"
                component={Typography}
                sx={{ color: 'white' }}
              >
                {station.name}
              </Box>
            </div>
          </Marker>
        ))}

        <ControlPanel
          settings={settings}
          interactionState={{ ...interactionState }}
          onChange={handleChangeSetting}
        />
      </MapGL>
    </div>
  );
}

export default GLMapInteraction;
