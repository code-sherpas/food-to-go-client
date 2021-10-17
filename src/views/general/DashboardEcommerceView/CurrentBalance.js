import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { fCurrency } from '~/utils/formatNumber';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Card, Typography, CardContent } from '@material-ui/core';
import { MButton } from '~/@material-extend';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2)
  }
}));

// ----------------------------------------------------------------------

CurrentBalance.propTypes = {
  className: PropTypes.string
};

function CurrentBalance({ className, ...other }) {
  const classes = useStyles();

  const currentBalance = 187650;
  const sentAmount = 25500;
  const totalAmount = currentBalance - sentAmount;

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardContent>
        <Typography variant="subtitle2" gutterBottom>
          Your Current Balance
        </Typography>
        <Typography variant="h3">{fCurrency(totalAmount)}</Typography>

        <div className={classes.listItem}>
          <Typography variant="body2" color="textSecondary">
            Your Current Balance
          </Typography>
          <Typography variant="body2">{fCurrency(currentBalance)}</Typography>
        </div>

        <div className={classes.listItem}>
          <Typography variant="body2" color="textSecondary">
            Sent Amount
          </Typography>
          <Typography variant="body2">- {fCurrency(sentAmount)}</Typography>
        </div>

        <div className={classes.listItem}>
          <Typography variant="body2" color="textSecondary">
            Total Amount
          </Typography>
          <Typography variant="subtitle1">{fCurrency(totalAmount)}</Typography>
        </div>

        <Box sx={{ mt: 2, display: 'flex' }}>
          <MButton
            fullWidth
            variant="contained"
            color="warning"
            sx={{ mr: 1.5 }}
          >
            Transfer
          </MButton>

          <Button fullWidth variant="contained">
            Receive
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CurrentBalance;
