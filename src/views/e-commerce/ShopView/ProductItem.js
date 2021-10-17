import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { paramCase } from 'change-case';
import { PATH_APP } from '~/routes/paths';
import { fCurrency } from '~/utils/formatNumber';
import { Link as RouterLink } from 'react-router-dom';
import { PreviewColor } from '~/components/ColorUtility';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Card,
  Link,
  CardMedia,
  Typography,
  CardContent
} from '@material-ui/core';
import { MLabel } from '~/@material-extend';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative'
  },
  cardMediaWrap: {
    paddingTop: '100%',
    position: 'relative'
  },
  cardMedia: {
    top: 0,
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
}));

// ----------------------------------------------------------------------

ProductItem.propTypes = {
  product: PropTypes.object,
  className: PropTypes.string
};

function ProductItem({ product, className, ...other }) {
  const classes = useStyles();
  const { name, cover, price, colors, status, priceSale } = product;
  const linkTo =
    PATH_APP.management.eCommerce.root + '/product/' + paramCase(name);

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <div className={classes.cardMediaWrap}>
        {status && (
          <MLabel
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase'
            }}
          >
            {status}
          </MLabel>
        )}
        <CardMedia
          component="img"
          title={name}
          src="/static/images/placeholder.svg"
          data-sizes="auto"
          data-src={cover.small}
          data-srcset={`${cover.small} 600w, ${cover.medium} 960w`}
          className={clsx(classes.cardMedia, 'lazyload blur-up')}
        />
      </div>

      <CardContent>
        <Link to={linkTo} color="inherit" component={RouterLink}>
          <Typography variant="body2" noWrap>
            {name}
          </Typography>
        </Link>

        <Box
          sx={{
            mt: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <PreviewColor colors={colors} />

          <Typography color="textPrimary" variant="subtitle1">
            <Box
              component="span"
              sx={{
                typography: 'body1',
                color: 'text.disabled',
                textDecoration: 'line-through'
              }}
            >
              {priceSale && fCurrency(priceSale)}
            </Box>
            &nbsp;
            {fCurrency(price)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductItem;
