import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import NewCreditCardForm from './NewCreditCardForm';
import plusFill from '@iconify-icons/eva/plus-fill';
import checkmarkCircle2Fill from '@iconify-icons/eva/checkmark-circle-2-fill';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Radio,
  Hidden,
  Collapse,
  TextField,
  RadioGroup,
  FormControlLabel
} from '@material-ui/core';
import { MButton } from '~/@material-extend';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: 0,
      paddingTop: theme.spacing(5)
    }
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2.5),
    marginBottom: theme.spacing(1),
    justifyContent: 'space-between',
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create('all'),
    border: `solid 1px ${theme.palette.grey[500_32]}`
  },
  label: {
    marginRight: 0,
    padding: theme.spacing(2, 0)
  },
  hasChildren: { flexWrap: 'wrap' },
  isSelected: {
    boxShadow: theme.shadows[25].z8
  }
}));

// ----------------------------------------------------------------------

PaymentMethods.propTypes = {
  paymentOptions: PropTypes.array,
  cardOptions: PropTypes.array,
  formik: PropTypes.object,
  className: PropTypes.string
};

function PaymentMethods({ paymentOptions, cardOptions, formik, className }) {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const { values, getFieldProps } = formik;

  const handleCollapseIn = () => {
    setShow(prev => !prev);
  };

  const handleCollapseOut = () => {
    setShow(false);
  };

  return (
    <div className={clsx(classes.root, className)}>
      <Box component="h6" sx={{ mb: 5, typography: 'subtitle1' }}>
        Payment Method
      </Box>

      <RadioGroup {...getFieldProps('method')}>
        <Grid container spacing={2}>
          {paymentOptions.map(method => {
            const { value, title, icons } = method;
            const hasChildren = value === 'credit_card';

            return (
              <Grid key={title} item xs={12}>
                <div
                  className={clsx(classes.option, {
                    [classes.isSelected]: values.method === value,
                    [classes.hasChildren]: hasChildren
                  })}
                >
                  <FormControlLabel
                    value={value}
                    control={
                      <Radio
                        color="primary"
                        checkedIcon={<Icon icon={checkmarkCircle2Fill} />}
                      />
                    }
                    label={
                      <Box sx={{ ml: 1, typography: 'subtitle2' }}>{title}</Box>
                    }
                    className={classes.label}
                  />

                  <Hidden smDown>
                    <Box
                      sx={{
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {icons.map(icon => (
                        <Box
                          key={icon}
                          component="img"
                          alt="logo card"
                          src={icon}
                          sx={{ '&:last-child': { ml: 1 } }}
                        />
                      ))}
                    </Box>
                  </Hidden>

                  {hasChildren && (
                    <Collapse in={values.method === 'credit_card'}>
                      <TextField
                        select
                        fullWidth
                        label="Card"
                        {...getFieldProps('card')}
                        SelectProps={{ native: true }}
                      >
                        {cardOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                      <Box sx={{ my: 3 }}>
                        <MButton
                          type="button"
                          size="small"
                          startIcon={
                            <Icon icon={plusFill} width={20} height={20} />
                          }
                          onClick={handleCollapseIn}
                        >
                          Add new card
                        </MButton>
                      </Box>
                      <Collapse in={show}>
                        <NewCreditCardForm
                          formik={formik}
                          onCancel={handleCollapseOut}
                        />
                      </Collapse>
                    </Collapse>
                  )}
                </div>
              </Grid>
            );
          })}
        </Grid>
      </RadioGroup>
    </div>
  );
}

export default PaymentMethods;
