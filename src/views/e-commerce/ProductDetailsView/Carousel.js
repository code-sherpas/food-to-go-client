import clsx from 'clsx';
import Slider from 'react-slick';
import { findIndex } from 'lodash';
import PropTypes from 'prop-types';
import { IndexArrows } from '~/components/Slider';
import Lightbox from '~/components/ModalLightbox';
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
    padding: theme.spacing(1),
    '& .slick-list': {
      borderRadius: theme.shape.borderRadiusMd
    }
  },
  largeImageItem: {
    cursor: 'zoom-in',
    paddingTop: '100%',
    position: 'relative'
  },
  thumbList: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
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
  thumbListStyle: {
    position: 'relative',
    '&:before, &:after': {
      top: 0,
      zIndex: 9,
      content: "''",
      height: '100%',
      position: 'absolute',
      width: (THUMB_SIZE * 2) / 3,
      backgroundImage: `linear-gradient(to left, ${alpha(
        theme.palette.background.paper,
        0
      )} 0%, ${theme.palette.background.paper} 100%)`
    },
    '&:after': {
      right: 0,
      transform: 'scaleX(-1)'
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
  item: PropTypes.object,
  onOpenLightbox: PropTypes.func
};

function LargeItem({ item, onOpenLightbox }) {
  const classes = useStyles();
  return (
    <div className={classes.largeImageItem}>
      <Box
        component="img"
        alt={item}
        src="/static/images/placeholder.svg"
        data-sizes="auto"
        data-src={item.small}
        data-srcset={`${item.small} 600w, ${item.medium} 960w`}
        className="lazyload blur-up"
        onClick={() => onOpenLightbox(item.large)}
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
  return (
    <div className={classes.thumbItem}>
      <Box
        component="img"
        alt={item}
        src="/static/images/placeholder.svg"
        data-src={item.thumb}
        className="lazyload blur-up"
        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}

Carousel.propTypes = {
  product: PropTypes.object.isRequired,
  className: PropTypes.string
};

function Carousel({ product, className, ...other }) {
  const classes = useStyles();
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const { images } = product;
  const imagesLightbox = images.map(img => img.large);

  const handleOpenLightbox = url => {
    const selectedImage = findIndex(imagesLightbox, index => {
      return index === url;
    });
    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };

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
    centerMode: images.length > 2 ? true : false,
    centerPadding: '0'
  };

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, [currentIndex]);

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
          {images.map(item => (
            <LargeItem
              key={item}
              item={item}
              onOpenLightbox={handleOpenLightbox}
            />
          ))}
        </Slider>
        <IndexArrows
          index={currentIndex}
          total={images.length}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>

      <Box
        sx={{
          maxWidth:
            images.length > 5
              ? THUMB_SIZE * 5 + 80
              : THUMB_SIZE * images.length + 16 * images.length
        }}
        className={clsx(classes.thumbList, {
          [classes.thumbListStyle]: images.length > 2
        })}
      >
        <Slider {...settings2} asNavFor={nav1} ref={slider2}>
          {images.map(item => (
            <ThumbnailItem key={item} item={item} />
          ))}
        </Slider>
      </Box>

      <Lightbox
        images={imagesLightbox}
        photoIndex={selectedImage}
        setPhotoIndex={setSelectedImage}
        isOpen={openLightbox}
        onClose={() => setOpenLightbox(false)}
      />
    </div>
  );
}

export default Carousel;
