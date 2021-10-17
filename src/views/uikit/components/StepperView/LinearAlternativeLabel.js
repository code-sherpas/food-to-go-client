import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Step,
  Button,
  Stepper,
  StepLabel,
  Typography
} from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  backButton: { marginRight: theme.spacing(1) },
  instructions: { marginTop: theme.spacing(1), marginBottom: theme.spacing(1) }
}));

function getSteps() {
  return [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad'
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

function LinearAlternativeLabel() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <>
            <Box
              sx={{
                p: 3,
                mb: 3,
                minHeight: 120,
                bgcolor: 'background.neutral'
              }}
            >
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
            </Box>
            <Button onClick={handleReset}>Reset</Button>
          </>
        ) : (
          <div>
            <Box
              sx={{
                p: 3,
                mb: 3,
                minHeight: 120,
                bgcolor: 'background.neutral'
              }}
            >
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </div>
        )}
      </div>
    </div>
  );
}
export default LinearAlternativeLabel;
