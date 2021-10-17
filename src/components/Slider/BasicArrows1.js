import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import arrowLeftFill from '@iconify-icons/eva/arrow-left-fill';
import arrowRightFill from '@iconify-icons/eva/arrow-right-fill';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { MIconButton } from '~/@material-extend';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 9,
    display: 'flex',
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2)
  },
  arrow: {
    padding: 6,
    opacity: 0.48,
    color: theme.palette.common.white,
    '&:not(:first-child)': { marginLeft: theme.spacing(1) },
    '&:hover': { opacity: 1 }
  }
}));

// ----------------------------------------------------------------------

BasicArrows1.propTypes = {
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  className: PropTypes.string
};

function BasicArrows1({ onNext, onPrevious, className, ...other }) {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.root, className)} {...other}>
      <MIconButton
        size="small"
        color="white"
        onClick={onPrevious}
        className={classes.arrow}
      >
        <Icon icon={arrowLeftFill} width={20} height={20} />
      </MIconButton>
      <MIconButton
        size="small"
        color="white"
        onClick={onNext}
        className={classes.arrow}
      >
        <Icon icon={arrowRightFill} width={20} height={20} />
      </MIconButton>
    </Box>
  );
}

export default BasicArrows1;
