import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import shieldFill from '@iconify-icons/eva/shield-fill';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Switch, Divider, Typography } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import { MLabel } from '~/@material-extend';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 16px)',
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(5),
      borderRadius: theme.shape.borderRadiusMd,
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 700]
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5)
    }
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2.5)
  },
  divider: {
    borderStyle: 'dashed',
    marginBottom: theme.spacing(1)
  }
}));

// ----------------------------------------------------------------------

PaymentSummary.propTypes = {
  formik: PropTypes.object,
  className: PropTypes.string
};

function PaymentSummary({ formik, className }) {
  const classes = useStyles();
  const { getFieldProps, isSubmitting } = formik;

  return (
    <div className={clsx(classes.root, className)}>
      <Box component="h6" sx={{ mb: 5, typography: 'subtitle1' }}>
        Summary
      </Box>

      <div className={classes.row}>
        <Typography variant="subtitle2" color="textSecondary" component="p">
          Subscription
        </Typography>
        <MLabel color="error" variant="filled">
          PREMIUM
        </MLabel>
      </div>

      <div className={classes.row}>
        <Typography variant="subtitle2" color="textSecondary" component="p">
          Billed Monthly
        </Typography>
        <Switch color="primary" {...getFieldProps('isMonthly')} />
      </div>

      <Box sx={{ mb: 2.5, display: 'flex', justifyContent: 'flex-end' }}>
        <Typography color="textSecondary">$</Typography>
        <Box sx={{ mx: 1, typography: 'h2' }}>9.99</Box>
        <Box
          component="span"
          sx={{
            pb: 1,
            alignSelf: 'flex-end',
            typography: 'body2',
            color: 'text.secondary'
          }}
        >
          /mo
        </Box>
      </Box>

      <Divider className={classes.divider} />
      <Box
        sx={{
          pt: 1.5,
          pb: 2.5,
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="h6" component="p">
          Total Billed
        </Typography>
        <Typography variant="h6" component="p">
          $9.99*
        </Typography>
      </Box>
      <Divider className={classes.divider} />

      <Typography variant="caption" color="textSecondary">
        * Plus applicable taxes
      </Typography>

      <Box sx={{ mt: 5, mb: 3 }}>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          pending={isSubmitting}
        >
          Upgrade My Plan
        </LoadingButton>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            mb: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            component={Icon}
            icon={shieldFill}
            sx={{ width: 20, height: 20, mr: 1, color: 'primary.main' }}
          />
          <Typography variant="subtitle2" component="p">
            Secure credit card payment
          </Typography>
        </Box>
        <Typography variant="caption" color="textSecondary">
          This is a secure 128-bit SSL encrypted payment
        </Typography>
      </Box>
    </div>
  );
}

export default PaymentSummary;
