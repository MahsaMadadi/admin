import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PaymentContext from '../../context/Context';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import DatePicker from '../common/DatePicker';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "black"
  },
}));

export default function Statics() {
  const classes = useStyles();
  const context = useContext(PaymentContext);
      // The first commit of Material-UI
      const [selectedDate, setSelectedDate] = React.useState(new Date(Date.now()));

      const handleDateChange = (date) => {
          setSelectedDate(date);
      };
  useEffect(() => {
    context.setStaticAction(false);
    context.handleFindAllPayments();
  }, [])
  return (
    <div>
        <Grid container
          direction="row-reverse"
          justify="space-around"
          alignItems="center">
            <div className="m-2 p-2">
            <h5 className="text-right text-warning">لیست تمامی پرداخت ها</h5>
            <p className="text-light text-right">دریافت درآمد براساس تاریخ</p>
            <TextField
                        id="date"
                        label="شروع"
                        type="date"
                        className={classes.textField}
                        defaultValue={selectedDate}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => {
                            context.setDateFrom(context.reverseNumber(e.target.value));
                        }}
                    />
                    <TextField
                        id="date"
                        label="پایان"
                        type="date"
                        defaultValue={selectedDate}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => {
                            context.setDateTo(context.reverseNumber(e.target.value));
                        }}
                    />
            <Button className="mt-2 btn-success btn-block" onClick={context.handleGetStatic}>جستجو</Button>
            </div>
  
          <div className="m-2 p-2">
            {(context.getStaticAction === true) ? (
              <div className="">
                <p className="alert alert-success ml-2">فروش : {context.getStaticByDate.revenue} </p>
                <p className="alert alert-success ml-2">کمیسیون : {context.getStaticByDate.commission} </p>
                <p className="alert alert-success ml-2">فروش های موفق : {context.getStaticByDate.successCount} </p>
              </div>
            ) : null}

          </div>

        </Grid>
    </div>
  );
}
