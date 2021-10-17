import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { fDate } from '~/utils/formatTime';
import useBreakpoints from '~/hooks/useBreakpoints';
import shareFill from '@iconify-icons/eva/share-fill';
import twitterFill from '@iconify-icons/eva/twitter-fill';
import linkedinFill from '@iconify-icons/eva/linkedin-fill';
import facebookFill from '@iconify-icons/eva/facebook-fill';
import instagramFilled from '@iconify-icons/ant-design/instagram-filled';
import { alpha, makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Avatar,
  SpeedDial,
  Typography,
  SpeedDialAction
} from '@material-ui/core';

// ----------------------------------------------------------------------

const SOCIALS = [
  {
    name: 'Facebook',
    icon: <Icon icon={facebookFill} width={20} height={20} color="#1877F2" />
  },
  {
    name: 'Instagram',
    icon: <Icon icon={instagramFilled} width={20} height={20} color="#D7336D" />
  },
  {
    name: 'Linkedin',
    icon: <Icon icon={linkedinFill} width={20} height={20} color="#006097" />
  },
  {
    name: 'Twitter',
    icon: <Icon icon={twitterFill} width={20} height={20} color="#1C9CEA" />
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    height: 480,
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    [theme.breakpoints.up('md')]: {
      height: 'auto',
      paddingTop: 'calc(100% * 9 / 16)'
    },
    '&:before': {
      top: 0,
      zIndex: 9,
      content: "''",
      width: '100%',
      height: '100%',
      position: 'absolute',
      backgroundColor: alpha(theme.palette.grey[900], 0.72)
    }
  },
  heroTitle: {
    top: 0,
    zIndex: 10,
    width: '100%',
    color: 'white',
    position: 'absolute',
    padding: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(10)
    }
  },
  heroFooter: {
    bottom: 0,
    zIndex: 10,
    width: '100%',
    display: 'flex',
    position: 'absolute',
    alignItems: 'flex-end',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
      paddingRight: theme.spacing(3)
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(10)
    }
  },
  speedDial: {
    width: 36,
    height: 36
  }
}));

// ----------------------------------------------------------------------

Hero.propTypes = {
  post: PropTypes.object.isRequired,
  className: PropTypes.string
};

function Hero({ post, className }) {
  const classes = useStyles();
  const isMobile = useBreakpoints('down', 'sm');
  const { cover, title, author, createdAt } = post;

  return (
    <Box className={clsx(classes.root, className)}>
      <Box
        component="img"
        alt="post cover"
        src="/static/images/placeholder.svg"
        data-sizes="auto"
        data-src={cover.small}
        data-srcset={`${cover.small} 600w, ${cover.medium} 960w, ${cover.large} 1280w`}
        className="lazyload blur-up"
        sx={{
          top: 0,
          zIndex: 8,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute'
        }}
      />

      <Typography variant="h2" component="h1" className={classes.heroTitle}>
        {title}
      </Typography>

      <div className={classes.heroFooter}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            alt={author.name}
            src={author.avatarUrl}
            sx={{ width: 48, height: 48 }}
          />
          <Box sx={{ ml: 2 }}>
            <Box sx={{ typography: 'subtitle1', color: 'white' }}>
              {author.name}
            </Box>
            <Box sx={{ color: 'text.disabled', typography: 'body2' }}>
              {fDate(createdAt)}
            </Box>
          </Box>
        </Box>

        <SpeedDial
          direction={isMobile ? 'up' : 'left'}
          ariaLabel="Share post"
          icon={<Icon icon={shareFill} />}
          classes={{ fab: classes.speedDial }}
        >
          {SOCIALS.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipPlacement="top"
              classes={{ fab: classes.speedDial }}
            />
          ))}
        </SpeedDial>
      </div>
    </Box>
  );
}

export default Hero;
