import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MapGL, { Layer, Source } from 'react-map-gl';
import {
  ControlPopup,
  ControlScale,
  ControlGeolocate,
  ControlNavigation,
  ControlFullscreen
} from './controls';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

GLHighlightByFilter.propTypes = {
  className: PropTypes.string
};

function GLHighlightByFilter({ data, className, ...other }) {
  const classes = useStyles();
  const theme = useTheme();
  const [filter, setFilter] = useState(['in', 'COUNTY', '']);
  const [hoverInfo, setHoverInfo] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 38.88,
    longitude: -98,
    zoom: 3,
    minZoom: 2,
    bearing: 0,
    pitch: 0
  });

  const countiesLayer = {
    id: 'counties',
    type: 'fill',
    source: 'counties',
    'source-layer': 'original',
    paint: {
      'fill-outline-color': theme.palette.grey[900],
      'fill-color': theme.palette.grey[900],
      'fill-opacity': 0.12
    }
  };

  const highlightLayer = {
    id: 'counties-highlighted',
    type: 'fill',
    source: 'counties',
    'source-layer': 'original',
    paint: {
      'fill-outline-color': theme.palette.error.main,
      'fill-color': theme.palette.error.main,
      'fill-opacity': 0.48
    }
  };

  const onHover = event => {
    let countyName = '';
    let hoverInfo = null;
    const county = event.features && event.features[0];
    if (county) {
      hoverInfo = {
        lngLat: event.lngLat,
        county: county.properties
      };
      countyName = county.properties.COUNTY;
    }
    setFilter(['in', 'COUNTY', countyName]);
    setHoverInfo(hoverInfo);
  };

  return (
    <div className={clsx(classes.root, className)}>
      <MapGL
        {...viewport}
        onViewportChange={viewport => setViewport(viewport)}
        onHover={onHover}
        interactiveLayerIds={['counties']}
        {...other}
      >
        <ControlScale />
        <ControlNavigation />
        <ControlFullscreen />
        <ControlGeolocate />

        <Source type="vector" url="mapbox://mapbox.82pkq93d">
          <Layer beforeId="waterway-label" {...countiesLayer} />
          <Layer
            beforeId="waterway-label"
            {...highlightLayer}
            filter={filter}
          />
        </Source>

        {hoverInfo ? (
          <ControlPopup
            longitude={hoverInfo.lngLat[0]}
            latitude={hoverInfo.lngLat[1]}
            closeButton={false}
          >
            <Box component={Typography} variant="body2" sx={{ color: 'white' }}>
              {hoverInfo.county.COUNTY}
            </Box>
          </ControlPopup>
        ) : null}
      </MapGL>
    </div>
  );
}

export default GLHighlightByFilter;
