import { useContext,useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import PaymentContext from './../../context/Context';
import Switch from '@material-ui/core/Switch';


const GatewayEdit = () => {
    const context = useContext(PaymentContext);
    useEffect(()=>{

    },[])
    const { getGatewayName, setGatewayName, getGatewayID, setGatewayID, getGatewayDeposit, setGatewayDeposit, getCommission, setCommission, getGatewayEnabled, setGatewayEnabled, getGatewayFailCounter, setGatewayFailCounter, getGatewayPath, setGatewayPath, getGatewayPin, setGatewayPin, getGatewayRegister, setGatewayRegister, getGatewayRegisterDate, setGatewayRegisterDate, getSupportedCards, setSupportedCards, getWithdraw, setWithdraw } = context;
    return (<div>
        <form className="p-3 text-center text-light" style={{backgroundColor:"rgb(40 167 69)"}}>
<p>sdsdf</p>
        </form>
    </div>);
}

export default GatewayEdit;