import React, { useEffect, useContext } from "react";
import Error from "./Error";
import AllErrors from "./AllErrors";
import PaymentContext from './../../context/Context';
// import Pagination from '@material-ui/lab/Pagination';

const Errors = () => {
    const context = useContext(PaymentContext);
    useEffect(() => {
        context.handleGetGateways();
    }, [])
    return (
        <div className="w-90">
            {/* <div className="d-flex bg-light text-light p-2 m-2 justify-content-center">
                <Pagination count={10} page={context.page} color="primary" onChange={context.handleChangePayment} />

            </div> */}
            <div className="d-flex bg-dark text-center text-light p-2 m-2 justify-content-between">
                <span className="w-50">عملیات</span>
                <span className="w-50">نام درگاه</span>
            </div>
            {context.getGateways.map(gateway => (
                <Error
                    key={gateway.id}
                    name={gateway.name}
                    enabled={gateway.enabled}
                    commission={gateway.commission}
                    withdraw={gateway.withdraw}
                />
            ))}
            {context.getAllErrors ? (<AllErrors />) : null}
        </div>
    );
};

export default Errors;
