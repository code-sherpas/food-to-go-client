import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: { position: 'relative' },
  content: {
    minHeight: 160,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2.5),
    borderRadius: theme.shape.borderRadiusSm,
    border: `solid 1px ${theme.palette.divider}`,
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 100 : 800],
    '& > *': {
      margin: `${theme.spacing(1)} !important`
    }
  }
}));

// ----------------------------------------------------------------------

Block.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

function Block({ children, className, title, ...other }) {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.root, className)} {...other}>
      {title && (
        <Typography gutterBottom variant="subtitle2" color="textSecondary">
          {title}
        </Typography>
      )}
      <div className={classes.content}>{children}</div>
    </Box>
  );
}

export default Block;
