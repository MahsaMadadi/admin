import 'date-fns';
import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import PaymentContext from './../../context/Context';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        fontFamily: "IranSans !important",
        color: "rgb(255 255 255)",
        width: 250,

    },
}));
export default function PaymentsDatePicker() {
    const context = useContext(PaymentContext);
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date(Date.now()));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const classes = useStyles();

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <Grid >
                <Grid  container
  direction="row-reverse"
  justify="center"
  alignItems="center" className="text-warning mt-3">
                    <p className="text-center text-warning">فیلتر بر اساس تاریخ </p>
                    <TextField
                        id="date"
                        label="شروع"
                        type="date"
                        className={classes.textField}
                        defaultValue={selectedDate}
                        format="yyyy-MM-dd"
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
                        format="yyyy-MM-dd"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => {
                            context.setDateTo(context.reverseNumber(e.target.value));
                        }}
                    />
                    <button className="mt-2 btn btn-success" onClick={context.handleGetPaymentsByDate}>جستجو</button>

                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>
    );
}