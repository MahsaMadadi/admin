import { useContext, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import PaymentContext from './../../context/Context';
import Switch from '@material-ui/core/Switch';


const GatewayEdit = () => {
    const context = useContext(PaymentContext);
    useEffect(() => {
    }, [])
    const { getGatewayName, setGatewayName, getGatewayID, setGatewayID, getGatewayDeposit, setGatewayDeposit, getCommission, setCommission, getGatewayEnabled, setGatewayEnabled, getGatewayFailCounter, setGatewayFailCounter, getGatewayPath, setGatewayPath, getGatewayPin, setGatewayPin, getGatewayRegister, setGatewayRegister, getGatewayRegisterDate, setGatewayRegisterDate, getSupportedCards, setSupportedCards, getWithdraw, setWithdraw } = context;
    return (<div>

        {/* <div className="m-2 p-2">
            <p className="text-warning text-center">فیلتر بر اساس وضعیت</p>
            <input
                className="form-control "
                placeholder="وضعیت پیام"
                onChange={(e) => { context.setDateTo(e.target.value) }}
            />
            <button className="btn-primary btn-block" onClick={context.handleGetPaymentsByDate}>جستجو</button>

        </div> */}
        {context.getAllMessages.map(message => (
            <div className={`d-flex text-center cursive bg-light m-2 p-2`}>
                <div className="col-md-2">{message.from}</div>
                <div className="col-md-2">{message.reportType}</div>
                <div className="col-md-4">{message.text}</div>
                <div className="col-md-4">{message.userId}</div>
                {/* <div className="col-md-2"><p>{transferMessage}</p></div> */}
                {/* <span>{addedDate}</span> */}
            </div>
        ))}
    </div>);
}

export default GatewayEdit;