import clsx from 'clsx';
import MapGL from 'react-map-gl';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ControlPanel from './ControlPanel';
import {
  ControlScale,
  ControlGeolocate,
  ControlNavigation,
  ControlFullscreen
} from '../controls';
import { makeStyles } from '@material-ui/core/styles';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

GLDynamicStyling.propTypes = {
  className: PropTypes.string
};

function GLDynamicStyling({ className, ...other }) {
  const classes = useStyles();
  const [mapStyle, setMapStyle] = useState('');
  const [viewport, setViewport] = useState({
    latitude: 37.805,
    longitude: -122.447,
    zoom: 15.5,
    bearing: 0,
    pitch: 0
  });

  return (
    <div className={clsx(classes.root, className)}>
      <MapGL
        {...viewport}
        mapStyle={mapStyle}
        onViewportChange={viewport => setViewport(viewport)}
        {...other}
      >
        <ControlScale />
        <ControlNavigation />
        <ControlFullscreen />
        <ControlGeolocate />
      </MapGL>

      <ControlPanel onChange={mapStyle => setMapStyle(mapStyle)} />
    </div>
  );
}

export default GLDynamicStyling;
