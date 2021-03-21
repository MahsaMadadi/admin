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
            <Grid>
                {/* <Grid   direction="row"
  justify="flex-start"
  alignItems="center" item xs={12} sm={12}>
                    <div>
                        <p className="text-warning text-center">فیلتر بر اساس وضعیت</p>
                        <input
                            className="form-control mb-2"
                            placeholder="وضعیت سفارش را وارد کنید"
                            onChange={(e) => { context.setDateTo(e.target.value) }}
                        />
                        <Button className="btn-primary btn-block" onClick={context.handleGetPaymentsByDate}>جستجو</Button>

                    </div>
                </Grid> */}
                <Grid item xs={12} sm={12}>
                    <PaymentsDatePicker />
                </Grid>
            </Grid>
            <div className="d-flex bg-light text-light p-2 m-2 justify-content-center">
                <Pagination count={10} page={context.page} color="primary" onChange={context.handleChangePayment} />
            </div>
            <div className={`d-flex text-center cursive bg-light m-2 p-2`}>
                <div className="col-md-1 text-success"><p>Price</p></div>
                <div className="col-md-1 text-success"><p>Status</p></div>
                <div className="col-md-2 text-success"><p>GatewayName</p></div>
                <div className="col-md-2 text-success"><p>Phone</p></div>
                <div className="col-md-3 text-success"><p>Date</p></div>
                <div className="col-md-3 text-success"><p>Message</p></div>
                {/* <span>{addedDate}</span> */}
            </div>
            {context.getPayments.map(payment => {
                let message = payment.transferMessage;
                switch (payment.transferMessage) {
                    case null:
                        message = null;
                        break;
                    default:
                        message = payment.transferMessage.message;
                }
                return (<Payment
                    key={payment.id}
                    paymentStatus={payment.paymentStatus}
                    userPhoneNumber={payment.userPhoneNumber}
                    amount={payment.amount}
                    gatewayName={payment.gatewayName}
                    addedDate={payment.addedDate}
                    message={message}
                />);
            })}
        </div>
    );
};

export default Payments;
