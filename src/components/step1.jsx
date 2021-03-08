import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { createPayment, checkPayment } from '../services/userService';
import http from '../services/httpService';
import { propTypes } from 'react-bootstrap/esm/Image';
import PaymentContext from './../context/Context';
import FormPardakht, { UserInformation,TayidShomareMob ,LastStep } from './userInformation';


const useStyles = makeStyles({
  root: {
    width: "97%",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    fontFamily: "Yekan"
  },
  pos: {
    marginBottom: 12,
  },
});


export default function Step1() {
  useEffect(() => {
    context.hanldeCreatePayment();
  },[]);
    const context = useContext(PaymentContext);
    const steps = context.getSteps();
    const classes = useStyles();

    return (
      
        <div className={context.classes.root}>
        <Stepper activeStep={context.activeStep}>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {context.activeStep === steps.length ? (
            <div>
              <Typography className={context.classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={context.handleReset} className={context.classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={context.classes.instructions}>{context.getStepContent(context.activeStep)}</Typography>
            </div>
          )}
        </div>
      </div>
    );
  }
