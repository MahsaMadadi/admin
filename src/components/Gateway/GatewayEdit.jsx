import { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import PaymentContext from './../../context/Context';
import Switch from '@material-ui/core/Switch';


const GatewayEdit = () => {
    const context = useContext(PaymentContext);
    const { getGatewayName, setGatewayName, getGatewayID, setGatewayID, getGatewayDeposit, setGatewayDeposit, getCommission, setCommission, getGatewayEnabled, setGatewayEnabled, getGatewayFailCounter, setGatewayFailCounter, getGatewayPath, setGatewayPath, getGatewayPin, setGatewayPin, getGatewayRegister, setGatewayRegister, getGatewayRegisterDate, setGatewayRegisterDate, getSupportedCards, setSupportedCards, getWithdraw, setWithdraw } = context;
    return (<div>
        <form className="p-3 text-center text-light" onSubmit={(e)=>e.preventDefault()}>
            <h5 className="text-right text-light">{`${getGatewayName} بروزرسانی درگاه `}</h5>
            <hr />
            <Row className="mb-2">
                <Col>
                    <p>آیدی درگاه</p>
                    <input className="form-control" value={`${getGatewayID}`} onChange={(e) => {
                        setGatewayID(e.target.value);
                    }} />
                </Col>
                <Col>
                    <p>تاریخ ثبت درگاه</p>
                    <input className="form-control" value={`${getGatewayRegisterDate}`} onChange={(e) => {
                        setGatewayRegisterDate(e.target.value);
                    }} placeholder="Enter registerDate" />
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>
                    <p>مسیر درگاه</p>
                    <input className="form-control" value={`${getGatewayPath}`} onChange={(e) => {
                        setGatewayPath(e.target.value);
                    }} />
                </Col>
                <Col>
                    <p>کارت های ساپورت شده</p>
                    <input className="form-control" value={`${getSupportedCards}`} onChange={(e) => {
                        setSupportedCards(e.target.value);
                    }} placeholder="Enter supportedCards" />
                </Col>

            </Row>
            <Row className="mb-2">
                <Col>
                    <p>کمیسیون</p>
                    <input className="form-control" value={`${getCommission}`} onChange={(e) => {
                        setCommission(e.target.value);
                    }} />
                </Col>
                <Col>
                    <p>نام درگاه</p>
                    <input className="form-control" value={`${getGatewayName}`} onChange={(e) => {
                        setGatewayName(e.target.value);
                    }} />
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>
                    <p>failCounter</p>
                    <Switch
                        color="secondary"
                        checked={getGatewayFailCounter}
                        onChange={(e)=>{
                            setGatewayFailCounter(!getGatewayFailCounter);
                        }}
                    />
                    {/* <input className="form-control" value={`${getGatewayFailCounter}`} onChange={(e) => {
                        setGatewayFailCounter(e.target.value);
                    }} /> */}
                </Col>
                <Col>
                    <p>پین درگاه</p>
                    <Switch
                        color="secondary"
                        checked={getGatewayPin}
                        onChange={(e)=>{
                            setGatewayPin(!getGatewayPin);
                        }}
                    />
                    {/* <input className="form-control" value={`${getGatewayPin}`} onChange={(e) => {
                        setGatewayPin(e.target.value);
                    }} /> */}
                </Col>
                <Col>
                    <p>ریجیستر درگاه</p>
                    <Switch
                        color="secondary"
                        checked={getGatewayRegister}
                        onChange={(e)=>{
                            setGatewayRegister(!getGatewayRegister);
                        }}
                    />
                    {/* <input className="form-control" value={`${getGatewayRegister}`} onChange={(e) => {
                        setGatewayRegister(e.target.value);
                    }} placeholder="Enter register" /> */}
                </Col>
                <Col>
                    <p>دیپوزیت</p>
                    <Switch
                        color="secondary"
                        checked={getGatewayDeposit}
                        onChange={(e)=>{
                            setGatewayDeposit(!getGatewayDeposit);
                        }}
                    />
                    {/* <input className="form-control" value={`${getGatewayDeposit}`} onChange={(e) => {
                        setGatewayDeposit(e.target.value);
                    }} /> */}
                </Col>
                <Col>
                    <p>وضعیت درگاه</p>
                    <Switch
                        color="secondary"
                        checked={getGatewayEnabled}
                        onChange={(e)=>{
                            setGatewayEnabled(!getGatewayEnabled);
                        }}
                    />
                    {/* <input className="form-control" value={`${getGatewayEnabled}`} onChange={(e) => {
                        setGatewayEnabled(e.target.value);
                    }} /> */}
                </Col>
                <Col>
                    <p> برداشت</p>
                    <Switch
                        color="secondary"
                        checked={getWithdraw}
                        onChange={(e)=>{
                            setWithdraw(!getWithdraw);
                        }}
                    />
                    {/* <input className="form-control" value={`${getWithdraw}`} onChange={(e) => {
                        setWithdraw(e.target.value);
                    }} placeholder="Enter supportedCards" /> */}
                </Col>
            </Row>
            <button onClick={context.GatewayEdit} className="btn btn-warning btn-block">بروزرسانی</button>

        </form>
    </div>);
}

export default GatewayEdit;