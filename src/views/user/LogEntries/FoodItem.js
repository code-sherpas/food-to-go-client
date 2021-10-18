import clsx from 'clsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Switch,
  Box
} from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  cardMediaWrap: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    paddingTop: 'calc(100% * 5 / 16)',
    '&:before': {
      top: 0,
      zIndex: 9,
      content: "''",
      width: '100%',
      height: '100%',
      position: 'absolute',
      backdropFilter: 'blur(3px)',
      borderTopLeftRadius: theme.shape.borderRadiusMd,
      borderTopRightRadius: theme.shape.borderRadiusMd
    }
  },
  cardContent: {
    paddingBottom: 0,
    marginTop: theme.spacing(3)
  }
}));

// ----------------------------------------------------------------------

FoodItem.propTypes = {
  user: PropTypes.object.isRequired,
  className: PropTypes.string
};

function FoodItem({ items, className }) {
  const classes = useStyles();
  const { name, description, amount } = items;

  console.log(items);

  return (
    <CardActionArea>
      <Card className={clsx(classes.root, className)}>
        <div className={classes.cardMediaWrap}>
          <Avatar
            alt={name}
            // src={image}
            sx={{
              width: 88,
              height: 88,
              zIndex: 11,
              position: 'absolute',
              transform: 'translateY(-50%)'
            }}
          />
        </div>

        <CardContent className={classes.cardContent}>
          <Typography sx={{ marginTop: 1.7 }} variant="h4" align="center">
            {name}
          </Typography>
          <Typography align="center" variant="body1">
            {description}
          </Typography>
        </CardContent>
        <Box display="flex" justifyContent="space-around" width={1} padding={2}>
          <p>Amount: {amount}</p>
        </Box>
      </Card>
    </CardActionArea>
  );
}

export default FoodItem;
