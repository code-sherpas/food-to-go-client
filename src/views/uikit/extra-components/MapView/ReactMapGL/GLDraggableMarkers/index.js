import clsx from 'clsx';
import MapGL from 'react-map-gl';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ControlPanel from './ControlPanel';
import {
  ControlMarker,
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

GLDraggableMarkers.propTypes = {
  className: PropTypes.string
};

function GLDraggableMarkers({ className, ...other }) {
  const classes = useStyles();
  const [events, setEvents] = useState({});
  const [marker, setMarker] = useState({
    latitude: 37.785164,
    longitude: -100
  });
  const [viewport, setViewport] = useState({
    latitude: 37.785164,
    longitude: -100,
    zoom: 3.5,
    bearing: 0,
    pitch: 0
  });

  const logDragEvent = (name, event) => {
    setEvents({
      ...events,
      [name]: event.lngLat
    });
  };

  const onMarkerDragStart = event => {
    logDragEvent('onDragStart', event);
  };

  const onMarkerDrag = event => {
    logDragEvent('onDrag', event);
  };

  const onMarkerDragEnd = event => {
    logDragEvent('onDragEnd', event);
    setMarker({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1]
    });
  };

  return (
    <div className={clsx(classes.root, className)}>
      <MapGL
        {...viewport}
        onViewportChange={viewport => setViewport(viewport)}
        {...other}
      >
        <ControlScale />
        <ControlNavigation />
        <ControlFullscreen />
        <ControlGeolocate />

        <ControlMarker
          longitude={marker.longitude}
          latitude={marker.latitude}
          offsetTop={-20}
          offsetLeft={-10}
          draggable
          onDragStart={onMarkerDragStart}
          onDrag={onMarkerDrag}
          onDragEnd={onMarkerDragEnd}
        />
      </MapGL>

      <ControlPanel events={events} />
    </div>
  );
}

export default GLDraggableMarkers;
