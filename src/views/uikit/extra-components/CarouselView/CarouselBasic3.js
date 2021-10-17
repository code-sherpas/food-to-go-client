import clsx from 'clsx';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { BasicArrows2, CustomPaging2 } from '~/components/Slider';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    '& .slick-list': {
      boxShadow: theme.shadows[25].z16,
      borderRadius: theme.shape.borderRadiusMd
    }
  }
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
      data-sizes="auto"
      src="/static/images/placeholder.svg"
      data-src={image.small}
      data-srcset={`${image.small} 600w, ${image.medium} 960w`}
      className="lazyload blur-up"
      sx={{ width: '100%', height: 480, objectFit: 'cover' }}
    />
  );
}

CarouselBasic3.propTypes = {
  carousels: PropTypes.array.isRequired,
  className: PropTypes.string
};

function CarouselBasic3({ carousels, className, ...other }) {
  const classes = useStyles();
  const carouselRef = useRef();

  const settings = {
    speed: 500,
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...CustomPaging2({ sx: { pt: 3 } })
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

export default CarouselBasic3;
