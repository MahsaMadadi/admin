import React from "react";
import Grid from '@material-ui/core/Grid';

const Payment = ({ paymentStatus, userPhoneNumber, amount, gatewayName , addedDate, message }) => {
    let PaymentColor = "PaymentError";
    if (paymentStatus === "SUCCESS") {
        PaymentColor = "PaymentSuccess";
    }else if(paymentStatus === "SYSTEM_ERROR"){
        PaymentColor = "SYSTEMError";
    }else if(paymentStatus === "PENDING"){
        PaymentColor = "PENDING";
    }
    return (
            <div className={`d-flex text-center cursive ${PaymentColor} m-2`}>
                <div className="col-md-1"><p className="text-bold">{amount / 10000},000</p></div>
                <div className="col-md-1"><p>{paymentStatus}</p></div>
                <div className="col-md-2"><p>{gatewayName}</p></div>
                <div className="col-md-2"><p>{userPhoneNumber}</p></div>
                <div className="col-md-3"><p>{addedDate}</p></div>
            <div className="col-md-3"><p>{message}</p></div>
                {/* <span>{addedDate}</span> */}
            </div>
    );
};

export default Payment;
