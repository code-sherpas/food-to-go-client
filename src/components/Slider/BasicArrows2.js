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

const SIZE = 40;

const useStyles = makeStyles(theme => ({
  root: {
    top: 0,
    bottom: 0,
    zIndex: 9,
    height: SIZE,
    width: '100%',
    margin: 'auto',
    display: 'flex',
    position: 'absolute',
    justifyContent: 'space-between'
  },
  arrow: {
    width: SIZE,
    height: SIZE,
    opacity: 0.48,
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
    background: theme.palette.grey[900],
    borderRadius: theme.shape.borderRadiusSm,
    '&:hover': { opacity: 1, background: theme.palette.grey[900] }
  },
  left: { left: theme.spacing(2) },
  right: { right: theme.spacing(2) }
}));

// ----------------------------------------------------------------------

BasicArrows2.propTypes = {
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  className: PropTypes.string
};

function BasicArrows2({ onNext, onPrevious, className, ...other }) {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.root, className)} {...other}>
      <MIconButton
        size="small"
        color="white"
        onClick={onPrevious}
        className={clsx(classes.arrow, classes.left)}
      >
        <Icon icon={arrowLeftFill} width={20} height={20} />
      </MIconButton>

      <MIconButton
        size="small"
        color="white"
        onClick={onNext}
        className={clsx(classes.arrow, classes.right)}
      >
        <Icon icon={arrowRightFill} width={20} height={20} />
      </MIconButton>
    </Box>
  );
}

export default BasicArrows2;
