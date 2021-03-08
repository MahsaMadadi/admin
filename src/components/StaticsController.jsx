import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PaymentContext from './../context/Context';
import DataTable from './DataTable';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import DatePicker from './common/DatePicker';

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

export default function StaticsController() {
  const classes = useStyles();
  const context = useContext(PaymentContext);
  useEffect(()=>{
    context.setStaticAction(false); 
    context.handleFindAllPayments();
  },[])
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid                     container
                    direction="row-reverse"
                    justify="space-around"
                    alignItems="center" xs={12}>
        <Grid item xs={12} sm={5} style={{textAlign:"center"}}>
                    <h4 className="text-right text-success">لیست تمامی پرداخت ها</h4>
                    <br />

                            <span className="text-muted">دریافت درآمد براساس تاریخ</span>
                            <input
                                className="form-control mb-2"
                                placeholder="شروع"
                                onChange={(e) => { context.setDateFrom(e.target.value); console.log(context.getDateFrom) }}
                            />
                            <input
                                className="form-control mb-2"
                                placeholder="پایان"
                                onChange={(e) => { context.setDateTo(e.target.value) }}
                            />
                            <Button className="btn-success btn-block" onClick={context.handleGetStatic}>جستجو</Button>
                            <hr/>

                    </Grid>
                    <Grid item xs={12} sm={5} style={{textAlign:"center"}}>
                    {(context.getStaticAction === true) ? (
    <div className="">
        <span className="alert alert-success ml-2">فروش : {context.getStaticByDate.revenue} </span>
        <span className="alert alert-success ml-2">کمیسیون : {context.getStaticByDate.commission} </span>
        <span className="alert alert-success ml-2">فروش های موفق : {context.getStaticByDate.successCount} </span>
    </div>
) : null}

                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="center"
                        xs={12}>
                    </Grid>

        </Grid>
      </Grid>
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