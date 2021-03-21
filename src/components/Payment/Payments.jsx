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
                <Grid item xs={10} sm={2}>
                    <PaymentsDatePicker />
                </Grid>
            </Grid>
            <div className="d-flex bg-light text-light p-2 m-2 justify-content-center">
                <Pagination count={10} page={context.page} color="primary" onChange={context.handleChangePayment} />
            </div>
            <div className={`d-flex text-center cursive bg-light m-2 p-2`}>
                <div className="col-md-2 text-bold text-success"><p className="h5">Price</p></div>
                <div className="col-md-2 text-bold text-success"><p className="h5">Status</p></div>
                <div className="col-md-2 text-bold text-success"><p className="h5">GatewayName</p></div>
                <div className="col-md-2 text-bold text-success"><p className="h5">Phone</p></div>
                <div className="col-md-2 text-bold text-success"><p className="h6">Date</p></div>
                {/* <div className="col-md-2 text-bold text-success"><p>Message</p></div> */}
                {/* <span>{addedDate}</span> */}
            </div>
            {context.getPayments.map(payment => {
                        context.setPaymentMessage(payment.transferMessage.message);

                // if(message === null){
                //     context.setPaymentMessage(null);
                //     console.log(context.getPaymentMessage)

                // }else{
                //     context.setPaymentMessage(message);
                //     console.log(context.getPaymentMessage)

                // }
                return (<Payment
                    key={payment.id}
                    paymentStatus={payment.paymentStatus}
                    userPhoneNumber={payment.userPhoneNumber}
                    amount={payment.amount}
                    gatewayName={payment.gatewayName}
                    addedDate={payment.addedDate}
                    message={context.getPaymentMessage}
                />);
            })}
        </div>
    );
};

export default Payments;
