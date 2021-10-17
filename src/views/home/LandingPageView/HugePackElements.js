import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { PATH_HOME } from '~/routes/paths';
import { BASE_IMG } from '~/utils/getImages';
import { Link as RouterLink } from 'react-router-dom';
import useBreakpoints from '~/hooks/useBreakpoints';
import {
  varFadeInUp,
  MotionInView,
  varFadeInRight
} from '~/components/Animate';
import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Box, Grid, Container, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(15, 0),
    backgroundImage:
      theme.palette.mode === 'light'
        ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${
            theme.palette.grey[300]
          } 100%)`
        : 'none'
  },
  content: {
    maxWidth: 520,
    margin: 'auto',
    textAlign: 'center',
    marginBottom: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      height: '100%',
      marginBottom: 0,
      textAlign: 'left',
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingRight: theme.spacing(5)
    }
  },
  screens: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '16% !important'
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '0 !important'
    }
  },
  screen: {
    bottom: 0,
    maxWidth: 460,
    position: 'absolute'
  },
  screenLeft: { zIndex: 3 },
  screenRight: { zIndex: 1 },
  screenCenter: {
    position: 'relative',
    zIndex: 2,
    bottom: 20,
    transform: 'translateX(24%)',
    [theme.breakpoints.up('sm')]: {
      bottom: 40,
      transform: 'translateX(32%)'
    }
  }
}));

const variantScreenLeftMoblie = {
  initial: { x: '22%', y: -10, opacity: 0 },
  enter: { x: 0, y: 0, opacity: 1 }
};
const variantScreenRightMobile = {
  initial: { x: '26%', y: -30, opacity: 0 },
  enter: { x: '48%', y: -40, opacity: 1 }
};
const variantScreenLeft = {
  initial: { x: '30%', y: -30, opacity: 0 },
  enter: { x: 0, y: 0, opacity: 1 }
};
const variantScreenCenter = {
  initial: { opacity: 0 },
  enter: { opacity: 1 }
};
const variantScreenRight = {
  initial: { x: '34%', y: -50, opacity: 0 },
  enter: { x: '64%', y: -80, opacity: 1 }
};
const transition = { duration: 0.5, ease: 'easeOut' };

// ----------------------------------------------------------------------

HugePackElements.propTypes = {
  className: PropTypes.string
};

function HugePackElements({ className }) {
  const classes = useStyles();
  const theme = useTheme();
  const upSm = useBreakpoints('up', 'sm');
  const upMd = useBreakpoints('up', 'md');
  const textAnimate = upMd ? varFadeInRight : varFadeInUp;
  const screenLeftAnimate = upSm ? variantScreenLeft : variantScreenLeftMoblie;
  const screenCenterAnimate = variantScreenCenter;
  const screenRightAnimate = upSm
    ? variantScreenRight
    : variantScreenRightMobile;

  const getImg = (width, index) =>
    `${BASE_IMG}w_${width}/v1611472901/upload_minimal/home/screen_${
      theme.palette.mode === 'light' ? 'light' : 'dark'
    }_${index + 1}.png`;

  return (
    <div className={clsx(classes.root, className)}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={4} lg={5}>
            <div className={classes.content}>
              <MotionInView variants={textAnimate}>
                <Typography
                  display="block"
                  variant="overline"
                  color="textSecondary"
                  gutterBottom
                >
                  Interface Starter Kit
                </Typography>
              </MotionInView>

              <MotionInView variants={textAnimate}>
                <Typography variant="h2" paragraph>
                  Huge Pack of Elements
                </Typography>
              </MotionInView>

              <MotionInView variants={textAnimate}>
                <Typography color="textSecondary">
                  We collected most popular elements. Menu, sliders, buttons,
                  inputs etc. are all here. Just dive in!
                </Typography>
              </MotionInView>

              <MotionInView variants={textAnimate} sx={{ mt: 5 }}>
                <Button
                  size="large"
                  color="inherit"
                  variant="outlined"
                  component={RouterLink}
                  to={PATH_HOME.components}
                >
                  View All Components
                </Button>
              </MotionInView>
            </div>
          </Grid>

          <Grid item xs={12} md={8} lg={7} className={classes.screens}>
            {[...Array(3)].map((screen, index) => (
              <MotionInView
                key={index}
                variants={
                  (index === 0 && screenLeftAnimate) ||
                  (index === 1 && screenCenterAnimate) ||
                  screenRightAnimate
                }
                transition={transition}
                className={clsx(classes.screen, {
                  [classes.screenLeft]: index === 0,
                  [classes.screenCenter]: index === 1,
                  [classes.screenRight]: index === 2
                })}
              >
                <Box
                  component="img"
                  alt={`screen ${index + 1}`}
                  src={getImg(720, index)}
                  variants={varFadeInUp}
                  className="lazyload"
                  sx={{ width: { xs: '80%', sm: '100%' } }}
                />
              </MotionInView>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HugePackElements;
