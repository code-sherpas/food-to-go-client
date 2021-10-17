import clsx from 'clsx';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { IndexArrows } from '~/components/Slider';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

SlideItem.propTypes = {
  item: PropTypes.object
};

function SlideItem({ item }) {
  const { image, title } = item;

  return (
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
  );
}

CarouselBasic1.propTypes = {
  carousels: PropTypes.array.isRequired,
  className: PropTypes.string
};

function CarouselBasic1({ carousels, className, ...other }) {
  const classes = useStyles();
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    speed: 500,
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentIndex(next)
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

      <IndexArrows
        index={currentIndex}
        total={carousels.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </Card>
  );
}

export default CarouselBasic1;
