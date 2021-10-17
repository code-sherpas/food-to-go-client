import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import googleFill from '@iconify-icons/eva/google-fill';
import twitterFill from '@iconify-icons/eva/twitter-fill';
import facebookFill from '@iconify-icons/eva/facebook-fill';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

SocialLogin.propTypes = {
  firebase: PropTypes.object,
  className: PropTypes.string
};

function SocialLogin({ firebase, className }) {
  const classes = useStyles();

  const handleLoginGoogle = async () => {
    try {
      await firebase.login({ provider: 'google', type: 'popup' });
    } catch (err) {
      console.error(err);
    }
  };

  const handleLoginFaceBook = async () => {
    try {
      await firebase.login({ provider: 'facebook', type: 'popup' });
    } catch (err) {
      console.error(err);
    }
  };

  const handleLoginTwitter = async () => {
    try {
      await firebase.login({ provider: 'twitter', type: 'popup' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Grid container spacing={2} className={clsx(classes.root, className)}>
      <Grid item xs>
        <Button
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          onClick={handleLoginGoogle}
        >
          <Icon icon={googleFill} color="#DF3E30" height={24} />
        </Button>
      </Grid>
      <Grid item xs>
        <Button
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          onClick={handleLoginFaceBook}
        >
          <Icon icon={facebookFill} color="#1877F2" height={24} />
        </Button>
      </Grid>
      <Grid item xs>
        <Button
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          onClick={handleLoginTwitter}
        >
          <Icon icon={twitterFill} color="#1C9CEA" height={24} />
        </Button>
      </Grid>
    </Grid>
  );
}

export default SocialLogin;
