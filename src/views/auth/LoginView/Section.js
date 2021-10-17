import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2),
    padding: '2rem'
  }
}));

// ----------------------------------------------------------------------

Section.propTypes = {
  className: PropTypes.string
};

function Section({ className }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <Box component="h3" sx={{ px: 5, mt: 10, mb: 5}}>
        <Typography
          color="primary"
          variant="h3"
        >
          Hi, Welcome to Katydid
        </Typography>
      </Box>
      <Box component="h3" sx={{ typography: 'h3', px: 5, mt: 3, mb: 8 }}>
        <img src="/static/illustrations/illustration_login_alternative.svg" alt="login" />
      </Box>
    </Card>
  );
}

export default Section;
