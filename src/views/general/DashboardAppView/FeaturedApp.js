import clsx from 'clsx';
import faker from 'faker';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import React, { useState, useRef } from 'react';
import { getImgFeed } from '~/utils/getImages';
import { Link as RouterLink } from 'react-router-dom';
import { BasicArrows1, CustomPaging } from '~/components/Slider';
import { MotionContainer, varFadeInRight } from '~/components/Animate';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Box, Card, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const CAROUSELS = [
  'Harry Potter and the Deathly Hallows - Part 2',
  'Disney Zombies 2',
  'Lightroom mobile - Koloro'
].map((item, index) => {
  const setIndex = index + 3;

  return {
    title: item,
    description: faker.lorem.lines(),
    image: {
      small: getImgFeed(600, setIndex),
      medium: getImgFeed(960, setIndex)
    }
  };
});

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    position: 'relative',
    '&:after': {
      top: 0,
      zIndex: 8,
      width: '100%',
      content: "''",
      height: '100%',
      position: 'absolute',
      backgroundColor: alpha(theme.palette.grey[900], 0.72)
    }
  }
}));

// ----------------------------------------------------------------------

SlideItem.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool
};

function SlideItem({ item, isActive }) {
  const classes = useStyles();
  const { image, title, description } = item;

  return (
    <RouterLink to="#">
      <div className={classes.item}>
        <Box
          component="img"
          alt={title}
          src="/static/images/placeholder.svg"
          srcSet={`${image.small} 600w, ${image.medium} 960w`}
          sx={{
            width: '100%',
            objectFit: 'cover',
            height: { xs: 280, xl: 320 }
          }}
        />
        <Box
          sx={{
            p: 3,
            bottom: 0,
            zIndex: 9,
            width: '100%',
            position: 'absolute'
          }}
        >
          <MotionContainer open={isActive}>
            <Box sx={{ color: 'white', maxWidth: '80%' }}>
              <motion.div variants={varFadeInRight}>
                <Box
                  component="span"
                  sx={{
                    mb: 1,
                    opacity: 0.48,
                    display: 'block',
                    typography: 'overline'
                  }}
                >
                  Featured App
                </Box>
              </motion.div>
              <motion.div variants={varFadeInRight}>
                <Typography variant="h5" gutterBottom noWrap>
                  {title}
                </Typography>
              </motion.div>
              <motion.div variants={varFadeInRight}>
                <Typography variant="body2" noWrap>
                  {description}
                </Typography>
              </motion.div>
            </Box>
          </MotionContainer>
        </Box>
      </div>
    </RouterLink>
  );
}

FeaturedApp.propTypes = {
  className: PropTypes.string
};

function FeaturedApp({ className, ...other }) {
  const classes = useStyles();
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    speed: 800,
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentIndex(next),
    ...CustomPaging({ color: 'primary.main' })
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
        {CAROUSELS.map((item, index) => (
          <SlideItem
            key={item.title}
            item={item}
            isActive={index === currentIndex}
          />
        ))}
      </Slider>

      <BasicArrows1 onNext={handleNext} onPrevious={handlePrevious} />
    </Card>
  );
}

export default FeaturedApp;
