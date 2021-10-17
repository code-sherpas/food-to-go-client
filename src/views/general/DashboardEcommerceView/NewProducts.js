import clsx from 'clsx';
import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { getImgProduct } from '~/utils/getImages';
import { CustomPaging } from '~/components/Slider';
import { Link as RouterLink } from 'react-router-dom';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Box, Card, Button } from '@material-ui/core';

// ----------------------------------------------------------------------

const PRODUCTS = [
  'Nike Air Max 97',
  'Nike Zoom Gravity',
  'Nike DBreak-Type',
  'Kyrie Flytrap 3 EP Basketball Shoe',
  'Nike Air Max Fusion Men'
].map((product, index) => {
  const setIndex = index + 1;
  return {
    name: product,
    image: {
      small: getImgProduct(600, setIndex),
      medium: getImgProduct(960, setIndex)
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

function SlideItem({ item }) {
  const classes = useStyles();
  const { image, name } = item;

  return (
    <div className={classes.item}>
      <Box
        component="img"
        alt={name}
        src="/static/images/placeholder.svg"
        data-sizes="auto"
        data-src={image.small}
        data-srcset={`${image.small} 600w, ${image.medium} 960w`}
        className="lazyload blur-up"
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
        <Box sx={{ color: 'white', maxWidth: '80%' }}>
          <Box
            component="span"
            sx={{
              mb: 1,
              opacity: 0.48,
              display: 'block',
              typography: 'overline'
            }}
          >
            New
          </Box>
          <Box component="h5" sx={{ mb: 3, typography: 'h5', nowrap: true }}>
            {name}
          </Box>
          <Button to="#" variant="contained" component={RouterLink}>
            Buy Now
          </Button>
        </Box>
      </Box>
    </div>
  );
}

NewProducts.propTypes = {
  className: PropTypes.string
};

function NewProducts({ className, ...other }) {
  const classes = useStyles();

  const settings = {
    fade: true,
    speed: 1000,
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...CustomPaging({ color: 'primary.main' })
  };

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <Slider {...settings}>
        {PRODUCTS.map(item => (
          <SlideItem key={item.name} item={item} />
        ))}
      </Slider>
    </Card>
  );
}

export default NewProducts;
