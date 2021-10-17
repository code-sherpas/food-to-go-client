import clsx from 'clsx';
import MapGL from 'react-map-gl';
import ControlPanel from './ControlPanel';
import { makeStyles } from '@material-ui/core/styles';
import {
  ControlScale,
  ControlGeolocate,
  ControlNavigation,
  ControlFullscreen
} from '../controls';
import React, { useState } from 'react';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

function GLChangeTheme({ themes, className, ...other }) {
  const classes = useStyles();
  const [selectTheme, setSelectTheme] = useState('outdoors');
  const [viewport, setViewport] = useState({
    latitude: 37.785164,
    longitude: -100,
    zoom: 3.5,
    bearing: 0,
    pitch: 0
  });

  const handleChangeTheme = event => {
    setSelectTheme(event.target.value);
  };

  return (
    <div className={clsx(classes.root, className)}>
      <MapGL
        {...viewport}
        onViewportChange={viewport => setViewport(viewport)}
        mapStyle={themes[selectTheme]}
        {...other}
      >
        <ControlScale />
        <ControlNavigation />
        <ControlFullscreen />
        <ControlGeolocate />
      </MapGL>

      <ControlPanel
        themes={themes}
        selectTheme={selectTheme}
        onChangeTheme={handleChangeTheme}
      />
    </div>
  );
}

export default GLChangeTheme;
