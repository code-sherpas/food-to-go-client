import clsx from 'clsx';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { IndexArrows } from '~/components/Slider';
import React, { useState, useRef, useEffect } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

const THUMB_SIZE = 64;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  largeImageContainer: {
    width: '100%',
    position: 'relative',
    '& .slick-list': {
      borderRadius: theme.shape.borderRadiusMd
    }
  },
  largeImageItem: {
    paddingTop: '100%',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      paddingTop: '50%'
    }
  },
  thumbList: {
    margin: theme.spacing(3, 0),
    '& .slick-current': {
      '& $thumbItem': {
        border: `solid 2px ${theme.palette.primary.main}`
      },
      '& $thumbItem:before': {
        content: "''",
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: `${alpha(theme.palette.grey[900], 0.48)}`
      }
    }
  },
  thumbItem: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    margin: theme.spacing(0, 1),
    borderRadius: theme.shape.borderRadiusSm
  }
}));

// ----------------------------------------------------------------------

LargeItem.propTypes = {
  item: PropTypes.object
};

function LargeItem({ item }) {
  const classes = useStyles();
  const { image, title } = item;

  return (
    <div className={classes.largeImageItem}>
      <Box
        component="img"
        alt={title}
        src="/static/images/placeholder.svg"
        data-sizes="auto"
        data-src={image.small}
        data-srcset={`${image.small} 600w, ${image.medium} 960w`}
        className="lazyload blur-up"
        sx={{
          top: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute'
        }}
      />
    </div>
  );
}

ThumbnailItem.propTypes = {
  item: PropTypes.object
};

function ThumbnailItem({ item }) {
  const classes = useStyles();
  const { image, title } = item;

  return (
    <div className={classes.thumbItem}>
      <Box
        component="img"
        alt={title}
        src="/static/images/placeholder.svg"
        data-src={image.thumb}
        className="lazyload blur-up"
        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}

CarouselThumbnail.propTypes = {
  carousels: PropTypes.array.isRequired,
  className: PropTypes.string
};

function CarouselThumbnail({ carousels, className, ...other }) {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const settings1 = {
    speed: 500,
    dots: false,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current, next) => setCurrentIndex(next)
  };

  const settings2 = {
    dots: false,
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: true,
    centerMode: carousels.length > 2 ? true : false,
    centerPadding: '0'
  };

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const handlePrevious = () => {
    slider2.current.slickPrev();
  };

  const handleNext = () => {
    slider2.current.slickNext();
  };

  return (
    <div className={clsx(classes.root, className)} {...other}>
      <div className={classes.largeImageContainer}>
        <Slider {...settings1} asNavFor={nav2} ref={slider1}>
          {carousels.map(item => (
            <LargeItem key={item} item={item} />
          ))}
        </Slider>

        <IndexArrows
          index={currentIndex}
          total={carousels.length}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>

      <Box
        sx={{
          maxWidth:
            carousels.length > 5
              ? THUMB_SIZE * 5 + 80
              : THUMB_SIZE * carousels.length + 16 * carousels.length
        }}
        className={classes.thumbList}
      >
        <Slider {...settings2} asNavFor={nav1} ref={slider2}>
          {carousels.map(item => (
            <ThumbnailItem key={item} item={item} />
          ))}
        </Slider>
      </Box>
    </div>
  );
}

export default CarouselThumbnail;
