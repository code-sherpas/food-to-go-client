import clsx from 'clsx';
import { findIndex } from 'lodash';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { fDate } from '~/utils/formatTime';
import Lightbox from '~/components/ModalLightbox';
import moreVerticalFill from '@iconify-icons/eva/more-vertical-fill';
import { alpha, makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  IconButton,
  Typography,
  CardContent
} from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5)
  },
  cardItem: {
    position: 'relative',
    paddingTop: '100%',
    overflow: 'hidden'
  },
  cardMedia: {
    top: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: theme.shape.borderRadiusMd
  },
  cardContent: {
    bottom: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    backdropFilter: 'blur(3px)',
    justifyContent: 'space-between',
    color: theme.palette.common.white,
    backgroundColor: alpha(theme.palette.grey[900], 0.72)
  }
}));

// ----------------------------------------------------------------------

GalleryCards.propTypes = {
  image: PropTypes.object,
  onOpenLightbox: PropTypes.func,
  className: PropTypes.string
};

function GalleryItem({ image, onOpenLightbox }) {
  const classes = useStyles();
  const { imageUrl, title, postAt } = image;
  return (
    <Card className={classes.cardItem}>
      <CardMedia
        component="img"
        title="gallery image"
        data-sizes="auto"
        src="/static/images/placeholder.svg"
        data-src={imageUrl.small}
        data-srcset={`${imageUrl.small} 600w, ${imageUrl.medium} 960w`}
        onClick={() => onOpenLightbox(imageUrl.large)}
        className={clsx(classes.cardMedia, 'lazyload blur-up')}
      />

      <CardContent className={classes.cardContent}>
        <div>
          <Typography variant="subtitle1">{title}</Typography>
          <Box sx={{ typography: 'body2', opacity: 0.72 }}>{fDate(postAt)}</Box>
        </div>
        <IconButton color="inherit">
          <Icon icon={moreVerticalFill} width={20} height={20} />
        </IconButton>
      </CardContent>
    </Card>
  );
}

GalleryCards.propTypes = {
  gallery: PropTypes.array.isRequired,
  className: PropTypes.string
};

function GalleryCards({ gallery, className }) {
  const classes = useStyles();
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const imagesLightbox = gallery.map(img => img.imageUrl.large);

  const handleOpenLightbox = url => {
    const selectedImage = findIndex(imagesLightbox, index => {
      return index === url;
    });
    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };

  return (
    <div className={clsx(classes.root, className)}>
      <Box component="h4" sx={{ typography: 'h4', mb: 3 }}>
        Gallery
      </Box>

      <Card>
        <CardContent>
          <Grid container spacing={3}>
            {gallery.map(image => (
              <Grid key={image.id} item xs={12} sm={6} lg={4}>
                <GalleryItem
                  image={image}
                  onOpenLightbox={handleOpenLightbox}
                />
              </Grid>
            ))}
          </Grid>

          <Lightbox
            images={imagesLightbox}
            photoIndex={selectedImage}
            setPhotoIndex={setSelectedImage}
            isOpen={openLightbox}
            onClose={() => setOpenLightbox(false)}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default GalleryCards;
