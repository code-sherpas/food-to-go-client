import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { fCurrency } from '~/utils/formatNumber';
import editFill from '@iconify-icons/eva/edit-fill';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Card,
  Button,
  Divider,
  TextField,
  CardHeader,
  Typography,
  CardContent,
  InputAdornment
} from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: { marginBottom: theme.spacing(3) },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    '&:not(:last-child)': {
      marginBottom: theme.spacing(2)
    }
  },
  divider: {
    marginBottom: theme.spacing(2)
  },
  discount: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    marginTop: theme.spacing(3),
    '& button': { position: 'absolute', right: theme.spacing(1) }
  }
}));

// ----------------------------------------------------------------------

Summary.propTypes = {
  total: PropTypes.number,
  discount: PropTypes.number,
  subtotal: PropTypes.number,
  shipping: PropTypes.number,
  onEdit: PropTypes.func,
  enableEdit: PropTypes.bool,
  onApplyDiscount: PropTypes.func,
  enableDiscount: PropTypes.bool,
  className: PropTypes.string
};

function Summary({
  total,
  onEdit,
  discount,
  subtotal,
  shipping = null,
  onApplyDiscount,
  enableEdit = false,
  enableDiscount = false,
  className
}) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <CardHeader
        title="Order Summary"
        action={
          enableEdit && (
            <Button
              size="small"
              type="button"
              onClick={onEdit}
              startIcon={<Icon icon={editFill} />}
            >
              Edit
            </Button>
          )
        }
      />

      <CardContent>
        <div className={classes.row}>
          <Typography variant="body2" color="textSecondary">
            Sub Total
          </Typography>
          <Typography variant="subtitle2">{fCurrency(subtotal)}</Typography>
        </div>

        <div className={classes.row}>
          <Typography variant="body2" color="textSecondary">
            Discount
          </Typography>
          <Typography variant="subtitle2">
            {discount ? fCurrency(-discount) : '-'}
          </Typography>
        </div>

        <div className={classes.row}>
          <Typography variant="body2" color="textSecondary">
            Shipping
          </Typography>
          <Typography variant="subtitle2">
            {shipping ? fCurrency(shipping) : shipping !== null ? 'Free' : '-'}
          </Typography>
        </div>

        <Box sx={{ mb: 2 }}>
          <Divider />
        </Box>

        <div className={classes.row}>
          <Typography variant="subtitle1">Total</Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="subtitle1" gutterBottom color="error">
              {fCurrency(total)}
            </Typography>
            <Box sx={{ typography: 'caption', fontStyle: 'italic' }}>
              VAT included if applicable)
            </Box>
          </Box>
        </div>

        {enableDiscount && (
          <div className={classes.discount}>
            <TextField
              fullWidth
              placeholder="Discount codes / Gifts"
              value="DISCOUNT5"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button type="button" onClick={() => onApplyDiscount(5)}>
                      Apply
                    </Button>
                  </InputAdornment>
                )
              }}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default Summary;
