import clsx from 'clsx';
import { range } from 'd3-array';
import PropTypes from 'prop-types';
import { scaleQuantile } from 'd3-scale';
import ControlPanel from './ControlPanel';
import { json as requestJson } from 'd3-request';
import React, { useState, useEffect } from 'react';
import MapGL, { Layer, Source } from 'react-map-gl';
import {
  ControlScale,
  ControlGeolocate,
  ControlNavigation,
  ControlFullscreen
} from '../controls';
import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  tooltip: {
    ...theme.typography.caption,
    zIndex: 99,
    position: 'absolute',
    pointerEvents: 'none',
    padding: theme.spacing(1),
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.grey[900], 0.8)
  }
}));

// ----------------------------------------------------------------------

function updatePercentiles(featureCollection, accessor) {
  const { features } = featureCollection;
  const scale = scaleQuantile()
    .domain(features.map(accessor))
    .range(range(9));
  return {
    type: 'FeatureCollection',
    features: features.map(f => {
      const value = accessor(f);
      const properties = {
        ...f.properties,
        value,
        percentile: scale(value)
      };
      return { ...f, properties };
    })
  };
}

GLGeojson.propTypes = {
  className: PropTypes.string
};

function GLGeojson({ className, ...other }) {
  const classes = useStyles();
  const theme = useTheme();
  const [year, setYear] = useState(2010);
  const [data, setData] = useState(null);
  const [pos, setPos] = useState({ x: null, y: null });
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 3,
    bearing: 0,
    pitch: 0
  });

  const dataLayer = {
    id: 'data',
    type: 'fill',
    paint: {
      'fill-color': {
        property: 'percentile',
        stops: [
          [0, theme.palette.primary.light],
          [1, theme.palette.primary.main],
          [2, theme.palette.info.light],
          [3, theme.palette.info.main],
          [4, theme.palette.warning.light],
          [5, theme.palette.warning.main],
          [6, theme.palette.error.light],
          [7, theme.palette.error.light],
          [8, theme.palette.primary.dark]
        ]
      },
      'fill-opacity': 0.64
    }
  };

  useEffect(() => {
    requestJson(
      'https://raw.githubusercontent.com/uber/react-map-gl/master/examples/.data/us-income.geojson',
      (error, response) => {
        if (!error) {
          setData(updatePercentiles(response, f => f.properties.income[year]));
        }
      }
    );
  }, [year]);

  const updateSettings = (name, value) => {
    if (name === 'year') {
      setYear(value);
      if (data) {
        setData(updatePercentiles(data, f => f.properties.income[value]));
      }
    }
  };

  const onHover = event => {
    const {
      features,
      srcEvent: { offsetX, offsetY }
    } = event;
    const hoveredFeature =
      features && features.find(f => f.layer.id === 'data');
    setHoveredFeature(hoveredFeature);
    setPos({ x: offsetX, y: offsetY });
  };

  return (
    <div className={clsx(classes.root, className)}>
      <MapGL
        {...viewport}
        onViewportChange={viewport => setViewport(viewport)}
        onHover={onHover}
        {...other}
      >
        <ControlScale />
        <ControlNavigation />
        <ControlFullscreen />
        <ControlGeolocate />

        <Source type="geojson" data={data}>
          <Layer {...dataLayer} />
        </Source>

        {hoveredFeature && (
          <div
            className={classes.tooltip}
            style={{
              left: pos.x,
              top: pos.y
            }}
          >
            <div>State: {hoveredFeature.properties.name}</div>
            <div>
              Median Household Income: {hoveredFeature.properties.value}
            </div>
            <div>
              Percentile: {(hoveredFeature.properties.percentile / 8) * 100}
            </div>
          </div>
        )}
      </MapGL>

      <ControlPanel
        year={year}
        onChange={e => updateSettings('year', e.target.value)}
      />
    </div>
  );
}

export default GLGeojson;
