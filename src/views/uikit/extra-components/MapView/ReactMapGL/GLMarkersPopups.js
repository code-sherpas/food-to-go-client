import clsx from 'clsx';
import MapGL from 'react-map-gl';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  ControlPopup,
  ControlMarker,
  ControlScale,
  ControlGeolocate,
  ControlNavigation,
  ControlFullscreen
} from './controls';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  tooltip: {},
  row: {
    ...theme.typography.caption,
    color: theme.palette.common.white
  },
  photo: {
    width: 160,
    height: 90,
    display: 'block',
    objectFit: 'cover',
    marginTop: theme.spacing(1),
    borderRadius: theme.shape.borderRadius
  }
}));

// ----------------------------------------------------------------------

GLMarkersPopups.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string
};

function GLMarkersPopups({ data, className, ...other }) {
  const classes = useStyles();
  const [tooltip, setTooltip] = useState(null);
  const [viewport, setViewport] = useState({ zoom: 2 });

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

        {data.map(country => (
          <ControlMarker
            key={country.name}
            latitude={country.latlng[0]}
            longitude={country.latlng[1]}
            onClick={() => setTooltip(country)}
          />
        ))}

        {tooltip && (
          <ControlPopup
            longitude={tooltip.latlng[1]}
            latitude={tooltip.latlng[0]}
            onClose={() => setTooltip(false)}
          >
            <div className={classes.tooltip}>
              <Box
                sx={{
                  mb: 1,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Box
                  sx={{
                    height: '18px',
                    minWidth: '28px',
                    marginRight: '8px',
                    borderRadius: '4px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url(https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/${tooltip.country_code.toLowerCase()}.svg)`
                  }}
                />
                <Typography variant="subtitle2">{tooltip.name}</Typography>
              </Box>
              <div className={classes.row}>Timezones: {tooltip.timezones}</div>
              <div className={classes.row}>Lat: {tooltip.latlng[0]}</div>
              <div className={classes.row}>Long: {tooltip.latlng[1]}</div>
              <img
                src={tooltip.photo}
                alt={tooltip.name}
                className={classes.photo}
              />
            </div>
          </ControlPopup>
        )}
      </MapGL>
    </div>
  );
}

export default GLMarkersPopups;
