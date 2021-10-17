import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { Form, FormikProvider } from 'formik';
import plusFill from '@iconify-icons/eva/plus-fill';
import moreVerticalFill from '@iconify-icons/eva/more-vertical-fill';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  Button,
  Collapse,
  TextField,
  IconButton,
  Typography
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  payOptions: {
    position: 'relative',
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    border: `solid 1px ${theme.palette.grey[500_32]}`
  },
  payButtonMore: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1)
  },
  form: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
    borderRadius: theme.shape.borderRadiusMd,
    backgroundColor: theme.palette.background.neutral
  },
  input: { marginTop: theme.spacing(1) }
}));

// ----------------------------------------------------------------------

function renderIcon(cardType) {
  if (cardType === 'master_card') {
    return '/static/icons/ic_mastercard.svg';
  } else if (cardType === 'visa') {
    return '/static/icons/ic_visa.svg';
  }
}

PaymentMethod.propTypes = {
  formik: PropTypes.object,
  cards: PropTypes.array,
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onCancel: PropTypes.func,
  className: PropTypes.string
};

function PaymentMethod({ formik, cards, isOpen, onOpen, onCancel, className }) {
  const classes = useStyles();
  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <Card className={clsx(classes.root, className)}>
      <Box sx={{ mb: 3, typography: 'overline', color: 'text.secondary' }}>
        Payment Method
      </Box>

      <Grid container spacing={2}>
        {cards.map(card => (
          <Grid key={card.id} item xs={12} md={6}>
            <div className={classes.payOptions}>
              <Box
                component="img"
                alt="icon"
                src={renderIcon(card.cardType)}
                sx={{ mb: 1 }}
              />
              <Typography variant="subtitle2">{card.cardNumber}</Typography>
              <IconButton className={classes.payButtonMore}>
                <Icon icon={moreVerticalFill} width={20} height={20} />
              </IconButton>
            </div>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Button
          size="small"
          startIcon={<Icon icon={plusFill} />}
          onClick={onOpen}
        >
          Add new card
        </Button>
      </Box>

      <Collapse in={isOpen}>
        <div className={classes.form}>
          <FormikProvider value={formik}>
            <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <Typography variant="subtitle1" paragraph>
                Add new card
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Name on card"
                    {...getFieldProps('cardName')}
                    error={Boolean(touched.cardName && errors.cardName)}
                    helperText={touched.cardName && errors.cardName}
                    className={classes.input}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Card number"
                    {...getFieldProps('cardNumber')}
                    error={Boolean(touched.cardNumber && errors.cardNumber)}
                    helperText={touched.cardNumber && errors.cardNumber}
                    className={classes.input}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Expiration date"
                    placeholder="MM/YY"
                    {...getFieldProps('cardExpired')}
                    error={Boolean(touched.cardExpired && errors.cardExpired)}
                    helperText={touched.cardExpired && errors.cardExpired}
                    className={classes.input}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Cvv"
                    {...getFieldProps('cardCvv')}
                    error={Boolean(touched.cardCvv && errors.cardCvv)}
                    helperText={touched.cardCvv && errors.cardCvv}
                    className={classes.input}
                  />
                </Grid>
              </Grid>

              <Box
                sx={{
                  mt: 3,
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}
              >
                <Button
                  type="button"
                  color="inherit"
                  variant="outlined"
                  onClick={onCancel}
                  sx={{ mr: 1.5 }}
                >
                  Cancel
                </Button>
                <LoadingButton
                  type="submit"
                  variant="contained"
                  pending={isSubmitting}
                >
                  Save Change
                </LoadingButton>
              </Box>
            </Form>
          </FormikProvider>
        </div>
      </Collapse>
    </Card>
  );
}

export default PaymentMethod;
