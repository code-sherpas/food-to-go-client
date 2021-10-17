import clsx from 'clsx';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import { BasicArrows2 } from '~/components/Slider';
import moreHorizontalFill from '@iconify-icons/eva/more-horizontal-fill';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Box, Card, Typography, CardContent } from '@material-ui/core';
import { MIconButton } from '~/@material-extend';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  itemContent: {
    zIndex: 9,
    bottom: 0,
    width: '100%',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    backdropFilter: 'blur(8px)',
    justifyContent: 'space-between',
    color: theme.palette.common.white,
    borderBottomLeftRadius: theme.shape.borderRadiusMd,
    borderBottomRightRadius: theme.shape.borderRadiusMd,
    backgroundColor: alpha(theme.palette.grey[900], 0.72)
  }
}));

// ----------------------------------------------------------------------

CarouselBasic4.propTypes = {
  carousels: PropTypes.array.isRequired,
  className: PropTypes.string
};

function SlideItem({ item }) {
  const classes = useStyles();
  const { image, title } = item;

  return (
    <>
      <Box
        component="img"
        alt={title}
        src="/static/images/placeholder.svg"
        data-sizes="auto"
        data-src={image.small}
        data-srcset={`${image.small} 600w, ${image.medium} 960w`}
        className="lazyload blur-up"
        sx={{ width: '100%', height: 480, objectFit: 'cover' }}
      />

      <CardContent className={classes.itemContent}>
        <Typography variant="h6">{item.title}</Typography>
        <MIconButton color="white">
          <Icon icon={moreHorizontalFill} />
        </MIconButton>
      </CardContent>
    </>
  );
}

function CarouselBasic4({ carousels, className, ...other }) {
  const classes = useStyles();
  const carouselRef = useRef();

  const settings = {
    speed: 500,
    fade: true,
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <Slider ref={carouselRef} {...settings}>
        {carousels.map(item => (
          <SlideItem key={item.title} item={item} />
        ))}
      </Slider>
      <BasicArrows2 onNext={handleNext} onPrevious={handlePrevious} />
    </Card>
  );
}

export default CarouselBasic4;
