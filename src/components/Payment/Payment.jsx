import React from "react";
import Grid from '@material-ui/core/Grid';

const Payment = ({ paymentStatus, userPhoneNumber, amount, addedDate }) => {
    let PaymentColor = "PaymentError";
    if (paymentStatus === "SUCCESS") {
        PaymentColor = "PaymentSuccess";
    }
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            item
            xs={12}>
            <div className={`d-flex cursive flex-fill justify-content-between ${PaymentColor} m-2`}>
                <span style={{width:'40%'}}>{amount}</span>
                <span style={{width:'40%'}} className="text-left">{userPhoneNumber}</span>
                {/* <span>{addedDate}</span> */}
                <span style={{width:'20%'}} className="text-right">_{paymentStatus}_</span>
            </div>
        </Grid>
    );
};

export default Payment;
