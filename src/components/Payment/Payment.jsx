import React from "react";
import Grid from '@material-ui/core/Grid';

const Payment = ({ paymentStatus, userPhoneNumber, amount, gatewayName , addedDate, transferMessage }) => {
    let PaymentColor = "PaymentError";
    if (paymentStatus === "SUCCESS") {
        PaymentColor = "PaymentSuccess";
    }else if(paymentStatus === "SYSTEM_ERROR"){
        PaymentColor = "SYSTEMError";
    }
    return (
            <div className={`d-flex text-center cursive ${PaymentColor} m-2`}>
                <div className="col-md-2"><p className="text-bold">{amount}</p></div>
                <div className="col-md-2"><p>{paymentStatus}</p></div>
                <div className="col-md-2"><p>{gatewayName}</p></div>
                <div className="col-md-2"><p>{userPhoneNumber}</p></div>
                <div className="col-md-2"><p>{addedDate}</p></div>
                <div className="col-md-2"><p>{transferMessage}</p></div>
                {/* <span>{addedDate}</span> */}
            </div>
    );
};

export default Payment;
