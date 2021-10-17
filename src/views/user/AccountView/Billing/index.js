import clsx from 'clsx';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import AddressBook from './AddressBook';
import { useSnackbar } from 'notistack';
import PaymentMethod from './PaymentMethod';
import fakeRequest from '~/utils/fakeRequest';
import InvoiceHistory from './InvoiceHistory';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Card, Button, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    position: 'relative',
    padding: theme.spacing(3),
    '&:not(:last-child)': {
      marginBottom: theme.spacing(3)
    }
  },
  btnPlan: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      marginTop: 0,
      top: theme.spacing(3),
      right: theme.spacing(3)
    }
  }
}));

// ----------------------------------------------------------------------

Billing.propTypes = {
  cards: PropTypes.array,
  invoices: PropTypes.array,
  addressBook: PropTypes.array
};

function Billing({ cards, addressBook, invoices }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const NewCardSchema = Yup.object().shape({
    cardName: Yup.string().required('Name is required'),
    cardNumber: Yup.string().required('Card number is required'),
    cardExpired: Yup.string().required('Card expired is required'),
    cardCvv: Yup.string().required('Cvv is required')
  });

  const formik = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cardExpired: '',
      cardCvv: ''
    },
    validationSchema: NewCardSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      await fakeRequest(500);
      handleCancel();
      resetForm();
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
      enqueueSnackbar('Add card success', { variant: 'success' });
    }
  });

  const handleOpenAddCard = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleCancel = () => {
    setOpen(false);
    formik.resetForm();
  };

  return (
    <div className={clsx(classes.root)}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
          <Card className={classes.card}>
            <Box
              sx={{ mb: 3, typography: 'overline', color: 'text.secondary' }}
            >
              Your Plan
            </Box>
            <Typography variant="h4">Premium</Typography>
            <div className={classes.btnPlan}>
              <Button size="small" color="inherit" variant="outlined">
                Cancel plan
              </Button>
              <Box component="span" sx={{ mx: 0.5 }} />
              <Button size="small" variant="outlined">
                Upgrade plan
              </Button>
            </div>
          </Card>

          <PaymentMethod
            cards={cards}
            formik={formik}
            isOpen={open}
            onOpen={handleOpenAddCard}
            onCancel={handleCancel}
            className={classes.card}
          />

          <AddressBook addressBook={addressBook} className={classes.card} />
        </Grid>

        <Grid item xs={12} md={4}>
          <InvoiceHistory invoices={invoices} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Billing;
