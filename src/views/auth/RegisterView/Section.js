import clsx from 'clsx';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: theme.spacing(2, 0, 2, 2)
  }
}));

// ----------------------------------------------------------------------

function Section({ className }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <Box component="h3" sx={{ typography: 'h3', px: 5, mt: 5, mb: 15 }}>
        Manage the job more effectively with Minimal
      </Box>
      <img
        alt="register"
        src="/static/illustrations/illustration_register.svg"
      />
    </Card>
  );
}

export default Section;
