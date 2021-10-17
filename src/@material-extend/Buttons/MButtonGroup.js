import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { capitalize } from '@material-ui/core/utils';
import { ButtonGroup } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => {
  const styleContained = color => {
    return {
      '& button': {
        boxShadow: theme.shadows[25][color],
        backgroundColor: theme.palette[color].main,
        color: theme.palette[color].contrastText,
        '&:hover': {
          backgroundColor: theme.palette[color].dark
        },
        '&:not(:last-child)': {
          borderColor: theme.palette[color].dark
        }
      }
    };
  };

  const styleOutlined = color => {
    return {
      '& button': {
        color: theme.palette[color].main,
        border: `1px solid ${alpha(theme.palette[color].main, 0.48)}`,
        '&:hover': {
          border: `1px solid ${theme.palette[color].main}`,
          backgroundColor: alpha(
            theme.palette[color].main,
            theme.palette.action.hoverOpacity
          )
        }
      }
    };
  };

  const textOutlined = color => {
    return {
      '& button': {
        color: theme.palette[color].main,
        '&:hover': {
          backgroundColor: alpha(
            theme.palette[color].main,
            theme.palette.action.hoverOpacity
          )
        },
        '&:not(:last-child)': {
          borderColor: theme.palette[color].main
        }
      }
    };
  };
  return {
    // Contained
    containedInfo: styleContained('info'),
    containedSuccess: styleContained('success'),
    containedWarning: styleContained('warning'),
    containedError: styleContained('error'),
    // Outlined
    outlinedInfo: styleOutlined('info'),
    outlinedWarning: styleOutlined('success'),
    outlinedSuccess: styleOutlined('warning'),
    outlinedError: styleOutlined('error'),
    // Text
    textInfo: textOutlined('info'),
    textSuccess: textOutlined('success'),
    textWarning: textOutlined('warning'),
    textError: textOutlined('error')
  };
});

// ----------------------------------------------------------------------

function MButtonGroup({
  color = 'primary',
  variant = 'outlined',
  children,
  className,
  ...other
}) {
  const classes = useStyles();

  if (color === 'inherit' || color === 'primary' || color === 'secondary') {
    return (
      <ButtonGroup
        color={color}
        variant={variant}
        className={className}
        {...other}
      >
        {children}
      </ButtonGroup>
    );
  }

  return (
    <ButtonGroup
      variant={variant}
      className={clsx(
        classes[variant],
        {
          [classes[`${variant}${capitalize(color)}`]]: color
        },
        className
      )}
      {...other}
    >
      {children}
    </ButtonGroup>
  );
}

MButtonGroup.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error'
  ]),
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(['contained', 'outlined', 'text']),
    PropTypes.string
  ])
};

export default MButtonGroup;
