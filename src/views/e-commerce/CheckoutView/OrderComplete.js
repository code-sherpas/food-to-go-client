import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import filePdfFilled from '@iconify-icons/ant-design/file-pdf-filled';
import arrowIosBackFill from '@iconify-icons/eva/arrow-ios-back-fill';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Link,
  Card,
  Button,
  Divider,
  Typography
} from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 480,
    margin: 'auto',
    borderRadius: theme.shape.borderRadiusMd
  }
}));

// ----------------------------------------------------------------------

OrderComplete.propTypes = {
  onReset: PropTypes.func,
  className: PropTypes.string
};

function OrderComplete({ onReset, className }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <Box sx={{ p: 5, textAlign: 'center' }}>
        <Typography variant="h4" paragraph>
          Thank you for your purchase!
        </Typography>

        <Box
          component="img"
          alt="successful purchase"
          src="/static/illustrations/illustration_order_complete.svg"
          sx={{ height: 240, my: 10, mx: 'auto' }}
        />

        <Typography align="left" paragraph>
          Thanks for placing order &nbsp;
          <Link href="#">01dc1370-3df6-11eb-b378-0242ac130002</Link>
        </Typography>

        <Typography color="textSecondary" align="left">
          We will send you a notification within 5 days when it ships.
          <br /> <br /> If you have any question or queries then fell to get in
          contact us. <br /> <br /> All the best,
        </Typography>
      </Box>

      <Divider />
      <Box
        sx={{
          p: 3,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Button
          color="inherit"
          onClick={onReset}
          startIcon={<Icon icon={arrowIosBackFill} />}
        >
          Continue Shopping
        </Button>
        <Button startIcon={<Icon icon={filePdfFilled} />} variant="contained">
          Download as PDF
        </Button>
      </Box>
    </Card>
  );
}

export default OrderComplete;
