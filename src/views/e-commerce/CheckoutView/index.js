import clsx from 'clsx';
import Cart from './Cart';
import Payment from './Payment';
import { Icon } from '@iconify/react';
import Page from '~/components/Page';
import React, { useEffect } from 'react';
import OrderComplete from './OrderComplete';
import { PATH_APP } from '~/routes/paths';
import BillingAddress from './BillingAddress';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useIsMountedRef from '~/hooks/useIsMountedRef';
import HeaderDashboard from '~/components/HeaderDashboard';
import checkmarkFill from '@iconify-icons/eva/checkmark-fill';
import {
  getCart,
  resetCart,
  onGotoStep,
  deleteCart,
  onBackStep,
  onNextStep,
  applyDiscount,
  applyShipping,
  createBilling,
  increaseQuantity,
  decreaseQuantity
} from '~/redux/slices/product';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Step,
  Stepper,
  Container,
  StepLabel,
  StepConnector
} from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  stepper: {
    marginBottom: theme.spacing(5)
  },
  icon: {
    zIndex: 9,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.divider,
    backgroundColor: theme.palette.background.default
  },
  iconCircle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor'
  },
  iconActive: {
    color: theme.palette.primary.main
  },
  iconCompleted: {
    zIndex: 1,
    color: theme.palette.primary.main
  },
  label: {
    ...theme.typography.subtitle2,
    color: theme.palette.text.disabled
  }
}));

// ----------------------------------------------------------------------

const STEPS = ['Cart', 'Billing & address', 'Payment'];

const QontoConnector = withStyles(theme => ({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 20px)',
    right: 'calc(50% + 20px)'
  },
  active: { '& $line': { borderColor: theme.palette.primary.main } },
  completed: { '& $line': { borderColor: theme.palette.primary.main } },
  line: { borderTopWidth: 2, borderColor: theme.palette.divider }
}))(StepConnector);

function QontoStepIcon({ active, completed }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.icon, {
        [classes.iconActive]: active
      })}
    >
      {completed ? (
        <Icon
          icon={checkmarkFill}
          width={20}
          height={20}
          className={classes.iconCompleted}
        />
      ) : (
        <div className={classes.iconCircle} />
      )}
    </div>
  );
}

function Checkout() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isMountedRef = useIsMountedRef();
  const history = useHistory();
  const { checkout } = useSelector(state => state.product);
  const {
    cart,
    total,
    billing,
    discount,
    subtotal,
    shipping,
    activeStep
  } = checkout;
  const isComplete = activeStep === STEPS.length;

  useEffect(() => {
    if (isMountedRef.current) {
      dispatch(getCart(cart));
    }
  }, [dispatch, isMountedRef, cart]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeStep === 3) {
        handleResetStep();
      }
    }, 5000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep]);

  const handleNextStep = () => {
    dispatch(onNextStep());
  };

  const handleBackStep = () => {
    dispatch(onBackStep());
  };

  const handleGotoStep = step => {
    dispatch(onGotoStep(step));
  };

  const handleResetStep = () => {
    dispatch(resetCart());
    history.push(PATH_APP.management.eCommerce.products);
  };

  const handleDeleteCart = productId => {
    dispatch(deleteCart(productId));
  };

  const handleIncreaseQuantity = productId => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = productId => {
    dispatch(decreaseQuantity(productId));
  };

  const handleApplyDiscount = value => {
    dispatch(applyDiscount(value));
  };

  const handleApplyShipping = value => {
    dispatch(applyShipping(value));
  };

  const handleCreateBilling = value => {
    dispatch(createBilling(value));
  };

  const renderContent = () => {
    if (activeStep === 0) {
      return (
        <Cart
          cart={cart}
          total={total}
          subtotal={subtotal}
          discount={discount}
          onNextStep={handleNextStep}
          onDelete={handleDeleteCart}
          onApplyDiscount={handleApplyDiscount}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
        />
      );
    }
    if (activeStep === 1) {
      return (
        <BillingAddress
          cart={cart}
          total={total}
          subtotal={subtotal}
          discount={discount}
          onBackStep={handleBackStep}
          onNextStep={handleNextStep}
          onCreateBilling={handleCreateBilling}
        />
      );
    }
    if (activeStep === 2) {
      return (
        <Payment
          total={total}
          billing={billing}
          subtotal={subtotal}
          discount={discount}
          shipping={shipping}
          onBackStep={handleBackStep}
          onComplete={handleNextStep}
          onGotoStep={handleGotoStep}
          onApplyShipping={handleApplyShipping}
        />
      );
    }
    return;
  };

  return (
    <Page title="Management | Checkout" className={classes.root}>
      <Container>
        <HeaderDashboard
          heading="Checkout"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Management', href: PATH_APP.management.root },
            { name: 'E-Commerce', href: PATH_APP.management.eCommerce.root },
            { name: 'Checkout' }
          ]}
        />

        <Grid container justifyContent={isComplete ? 'center' : 'flex-start'}>
          <Grid item xs={12} md={8}>
            <Stepper
              alternativeLabel
              activeStep={activeStep}
              connector={<QontoConnector />}
              className={classes.stepper}
            >
              {STEPS.map(label => (
                <Step key={label} className={classes.step}>
                  <StepLabel
                    StepIconComponent={QontoStepIcon}
                    classes={{
                      label: classes.label,
                      active: classes.labelActive,
                      completed: classes.labelCompleted
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>

        {isComplete ? (
          <OrderComplete onReset={handleResetStep} />
        ) : (
          renderContent()
        )}
      </Container>
    </Page>
  );
}

export default Checkout;
