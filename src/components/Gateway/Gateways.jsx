import React, { useEffect, useContext } from "react";
import Gateway from "./Gateway";
import GatewayEdit from "./GatewayEdit";
import PaymentContext from './../../context/Context';
import Pagination from '@material-ui/lab/Pagination';
import { Row, Col } from 'react-bootstrap';

const Payments = () => {
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
                <span style={{width:'25%'}}>عملیات</span>
                <span style={{width:'25%'}}>وضعیت درگاه</span>
                <span style={{width:'25%'}}>کمیسیون</span>
                <span style={{width:'25%'}}>نام درگاه</span>
            </div>
            {context.getGateways.map(gateway => (
                <Gateway
                    key={gateway.id}
                    name={gateway.name}
                    enabled={gateway.enabled}
                    commission={gateway.commission}
                    withdraw={gateway.withdraw}
                />
            ))}
            {context.getEdit ? (<GatewayEdit />) : null}
        </div>
    );
};

export default Payments;
