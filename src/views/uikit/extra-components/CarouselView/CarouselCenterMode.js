import clsx from 'clsx';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import { BasicArrows2 } from '~/components/Slider';
import { Link as RouterLink } from 'react-router-dom';
import arrowForwardFill from '@iconify-icons/eva/arrow-forward-fill';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography, CardContent } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    position: 'relative',
    '&:before, &:after': {
      top: 0,
      left: 0,
      zIndex: 8,
      width: 48,
      content: "''",
      height: '100%',
      display: 'none',
      position: 'absolute',
      backgroundImage:
        'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
      [theme.breakpoints.up('480')]: {
        display: 'block'
      }
    },
    '&:after': {
      right: 0,
      left: 'auto',
      transform: 'scaleX(-1)'
    }
  },
  item: {
    height: 480,
    overflow: 'hidden',
    position: 'relative',
    margin: theme.spacing(0, 1),
    borderRadius: theme.shape.borderRadiusMd,
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: theme.transitions.create('all')
    },
    '&:hover': {
      '& img': { width: '120%', height: '120%' }
    }
  },
  cardContent: {
    bottom: 0,
    zIndex: 9,
    width: '100%',
    position: 'absolute',
    color: theme.palette.common.white,
    backgroundImage:
      'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
  },
  itemLink: {
    opacity: 0.72,
    alignItems: 'center',
    display: 'inline-flex',
    marginTop: theme.spacing(2),
    transition: theme.transitions.create('opacity'),
    '& svg': { marginLeft: theme.spacing(1) },
    '&:hover': { opacity: 1 }
  }
}));

// ----------------------------------------------------------------------

SlideItem.propTypes = {
  item: PropTypes.object
};

function SlideItem({ item }) {
  const classes = useStyles();
  const { image, title } = item;

  return (
    <div className={classes.item}>
      <img
        alt={title}
        src="/static/images/placeholder.svg"
        data-src={image.small}
        className="lazyload blur-up"
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Link
          to="#"
          color="inherit"
          variant="overline"
          component={RouterLink}
          className={classes.itemLink}
        >
          learn More
          <Icon icon={arrowForwardFill} width={16} height={16} />
        </Link>
      </CardContent>
    </div>
  );
}

CarouselCenterMode.propTypes = {
  carousels: PropTypes.array.isRequired,
  className: PropTypes.string
};

function CarouselCenterMode({ carousels, className, ...other }) {
  const classes = useStyles();
  const carouselRef = useRef();

  const settings = {
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: '0' }
      }
    ]
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <div className={clsx(classes.root, className)} {...other}>
      <Slider ref={carouselRef} {...settings}>
        {carousels.map(item => (
          <SlideItem key={item.title} item={item} />
        ))}
      </Slider>

      <BasicArrows2 onNext={handleNext} onPrevious={handlePrevious} />
    </div>
  );
}

export default CarouselCenterMode;
