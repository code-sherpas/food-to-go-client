import clsx from 'clsx';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import React, { useCallback } from 'react';
import { BASE_IMG } from '~/utils/getImages';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '~/redux/slices/dark-mode';
import {
  MotionInView,
  varFadeInUp,
  varZoomInOut,
  varFadeInRight
} from '~/components/Animate';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(20, 0),
    backgroundColor: theme.palette.grey[900]
  },
  content: {
    textAlign: 'center',
    position: 'relative',
    marginBottom: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      height: '100%',
      marginBottom: 0,
      textAlign: 'left',
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }
  },
  image: {
    WebkitPerspective: 1000,
    WebkitTransform: 'translateZ(0)',
    WebkitBackfaceVisibility: 'hidden',
    filter: 'drop-shadow(-80px 80px 120px #000000)',
    [theme.breakpoints.up('md')]: {
      maxWidth: 'calc(100% - 48px)'
    }
  },
  switch: {
    width: 56,
    height: 24,
    cursor: 'pointer',
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'flex-start',
    padding: theme.spacing(0, 0.5),
    borderRadius: theme.shape.borderRadiusSm,
    backgroundColor: theme.palette.grey[500_12]
  },
  switchOn: {
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.primary.main
  },
  handle: {
    width: 16,
    height: 16,
    boxShadow: theme.shadows[25].primary,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white
  },
  handleOn: { width: 20 }
}));

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30
};

// ----------------------------------------------------------------------

const getImgLight = width =>
  `${BASE_IMG}w_${width}/v1611474139/upload_minimal/home/lightmode.png`;

const getImgDark = width =>
  `${BASE_IMG}w_${width}/v1611474139/upload_minimal/home/darkmode.png`;

function ToggleSwitch({ darkMode, onToggleTheme }) {
  const classes = useStyles();
  return (
    <div
      onClick={onToggleTheme}
      className={clsx(classes.switch, { [classes.switchOn]: darkMode })}
    >
      <motion.div
        layout
        transition={spring}
        className={clsx(classes.handle, { [classes.handleOn]: darkMode })}
      />
    </div>
  );
}

DarkMode.propTypes = {
  className: PropTypes.string
};

function DarkMode({ className }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { darkMode } = useSelector(state => state.theme);
  const onToggleTheme = useCallback(() => dispatch(toggleTheme()), [dispatch]);

  return (
    <div className={clsx(classes.root, className)}>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box
          component="img"
          alt="image shape"
          src="/static/images/shape.svg"
          sx={{
            top: 0,
            right: 0,
            bottom: 0,
            my: 'auto',
            position: 'absolute',
            filter: 'grayscale(1) opacity(48%)',
            display: { xs: 'none', md: 'block' }
          }}
        />

        <Grid container spacing={5} direction="row-reverse">
          <Grid item xs={12} md={4}>
            <div className={classes.content}>
              <MotionInView
                variants={varFadeInUp}
                sx={{ color: 'text.disabled' }}
              >
                <Typography display="block" variant="overline" gutterBottom>
                  Easy switch between styles.
                </Typography>
              </MotionInView>

              <MotionInView
                variants={varFadeInUp}
                sx={{ color: 'common.white' }}
              >
                <Typography variant="h2" paragraph>
                  Dark Mode
                </Typography>
              </MotionInView>

              <MotionInView
                variants={varFadeInUp}
                sx={{ color: 'common.white', mb: 5 }}
              >
                <Typography>
                  A dark theme that feels easier on the eyes.
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInRight}>
                <ToggleSwitch
                  darkMode={darkMode}
                  onToggleTheme={onToggleTheme}
                />
              </MotionInView>
            </div>
          </Grid>

          <Grid item xs={12} md={8}>
            <MotionInView variants={varZoomInOut}>
              <img
                alt="theme mode"
                data-src={darkMode ? getImgDark(720) : getImgLight(720)}
                data-srcset={
                  darkMode
                    ? `${getImgDark(600)} 600w, ${getImgDark(1200)} 960w`
                    : `${getImgLight(600)} 600w, ${getImgLight(1200)} 960w`
                }
                className={clsx(classes.image, 'lazyload')}
              />
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default DarkMode;
