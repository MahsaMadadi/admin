import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PaymentContext from './../context/Context';
import DataTable from './DataTable';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import DatePicker from './common/DatePicker';
import Payments from './Payment/Payments';
import PaymentsDatePicker from './common/PaymentsDatePicker';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: "white",
    color: "black"
  },
}));

export default function PaymentController() {
  const classes = useStyles();
  const context = useContext(PaymentContext);
  useEffect(() => {
    context.handleFindAllPayments();
  }, [])
  return (
    <div className={classes.root}>
    <h4 className="text-right text-warning">لیست تمامی پرداخت ها</h4>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        item
        xs={12}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          item
          xs={12} sm={6}>
            <div className="p-2">
            <p className="text-muted  text-right">فیلتر بر اساس وضعیت سفارش</p>
            <input
              className="form-control mb-2"
              placeholder="وضعیت سفارش را وارد کنید"
              onChange={(e) => { context.setDateTo(e.target.value) }}
            />
            <Button className="btn-primary btn-block" onClick={context.handleGetPaymentsByDate}>جستجو</Button>
            </div>
          </Grid>
          <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          item
          xs={12} sm={6}>
<div>
<PaymentsDatePicker />
        {/* <input
          className="form-control mb-2"
          placeholder="شروع"
          onChange={(e) => { context.setDateFrom(e.target.value); console.log(context.getDateFrom) }}
        />
        <input
          className="form-control mb-2"
          placeholder="پایان"
          onChange={(e) => { context.setDateTo(e.target.value) }}
        /> */}        
</div>
</Grid>
      </Grid>
      <hr />
          <Payments />
    </div>
  );
}
{/* <Grid item xs={6}>
<Paper className={classes.paper}>xs=6</Paper>
</Grid>
<Grid item xs={6}>
<Paper className={classes.paper}>xs=6</Paper>
</Grid>
<Grid item xs={3}>
<Paper className={classes.paper}>xs=3</Paper>
</Grid>
<Grid item xs={3}>
<Paper className={classes.paper}>xs=3</Paper>
</Grid>
<Grid item xs={3}>
<Paper className={classes.paper}>xs=3</Paper>
</Grid>
<Grid item xs={3}>
<Paper className={classes.paper}>xs=3</Paper>
</Grid> */}