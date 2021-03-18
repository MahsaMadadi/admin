import React, { useEffect, useContext } from "react";
import Payment from "./Payment";
import PaymentContext from './../../context/Context';
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';
import { Button } from 'react-bootstrap';
import PaymentsDatePicker from './../common/PaymentsDatePicker';

const Payments = () => {
    const context = useContext(PaymentContext);
    useEffect(() => {
        context.handleFindAllPayments();
    }, [])
    return (
        <div className="w-90">
            <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  item xs={12} sm={12}
>
                <Grid container item xs={10} sm={4}>
                    <div>
                    <p className="text-warning text-center">فیلتر بر اساس وضعیت</p>
                    <input
                        className="form-control mb-2"
                        placeholder="وضعیت سفارش را وارد کنید"
                        onChange={(e) => { context.setDateTo(e.target.value) }}
                    />
                    <Button className="btn-primary btn-block" onClick={context.handleGetPaymentsByDate}>جستجو</Button>
               
                    </div>
 </Grid>
                <Grid  item xs={10} sm={2}>
                    <PaymentsDatePicker />
                </Grid>
            </Grid>
            <div className="d-flex bg-light text-light p-2 m-2 justify-content-center">
                <Pagination count={10} page={context.page} color="primary" onChange={context.handleChangePayment} />
            </div>
            <div className="d-flex bg-dark text-light p-2 m-2 justify-content-between">  
            <span style={{width:'40%'}} className="text-left">قیمت</span>
            <span style={{width:'40%'}}>شماره موبایل</span>
            {/* <span>تاریخ فاکتور</span> */}
            <span style={{width:'20%'}} className="text-right">وضعیت پرداخت</span>
            </div>
            {context.getPayments.map(payment => (
                <Payment
                    key={payment.id}
                    paymentStatus={payment.paymentStatus}
                    userPhoneNumber={payment.userPhoneNumber}
                    amount={payment.amount}
                    // addedDate={payment.addedDate}
                />
            ))}
        </div>
    );
};

export default Payments;
