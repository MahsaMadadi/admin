import React, { useContext, useEffect,Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from '@material-ui/core';
import { Form, Row, Col, InputGroup, FormControl, Button,Spinner } from "react-bootstrap";
import http from "../services/httpService";
import NumberFormat from 'react-number-format';
import PaymentContext from './../context/Context';
import { makeStyles } from '@material-ui/core/styles';
import {Sugar} from "react-preloaders";
import Loading from 'react-loading-spinkit';



export const UserInformation = () => {
  const context = useContext(PaymentContext);
  const {useStyle  , phoneNumber , ShomareCart, setShomareCart, cardNumber , setcardNumber, setphoneNumber , classes , validator} = context;
  useEffect(()=>{
    
    try {
      http.get(`https://api.cinciti.com/payment-gateway/v1/user/status/${context.phone}/gateway/${context.gateway}`).then((e) => {
        context.setUser(true);
        context.setGorgi(false);

      }).catch(() => {
          const u1 = {
            activationCode: "",
            client: true,
            phoneNumber: `${context.phone}`
          }
          http.post(`https://api.cinciti.com/payment-gateway/v1/user/register/${context.gateway}`, JSON.stringify(u1)).then(()=>{
            context.setGorgi(false);

          context.setActiveStep(1);
          }).catch(e => console.log(e));
      });
    } catch (ex) {
      console.log(ex);
    }
  },[context.phone])
  const handleSend = () =>{
 if(context.user === true){
  context.setActiveStep(2);
 } else {
  context.setMessage("اطلاعات صحیح نمیباشد");
 }
}

  return (
    <Fragment>
 <Grid
        container
        direction="column"
        justify="center"
        alignItems="center" spacing={2}
      >
        <Card  variant="outlined" style={{width:"100%"}}>
          <CardContent>
            {(context.message !== "") ? (
                           <div className="d-flex flex-row justify-content-around alert-success p-3" style={{ direction: "rtl",fontFamily:"Yekan" }}>
                           <div className="text-danger">{context.message}</div>
                         </div> 
            ) : null}
            {context.gorgi ? (
                <Spinner animation="grow" variant="primary" />
            ) : (
              <div>
                              <p style={{ fontSize: "40px", fontFamily: "SOGAND", color: "white" }}>cinciti درگاه پرداخت </p>
              <Form onSubmit={e => e.preventDefault()}>
                <Form.Group controlId="shomareCart">
                  <p className="text-center">شماره کارت</p>
                  <NumberFormat disabled className="form-control text-center" placeholder="شماره کارت خود را وارد کنید" format="#### #### #### ####" mask="_" value={context.card} name="card" onChange={n => { setShomareCart(n.target.value); validator.current.showMessageFor("card"); }} />
                  {validator.current.message(
                    "card",
                    ShomareCart,
                    "required|min:19"
                  )}              </Form.Group>
                <Form.Group controlId="card">
                  <p className="text-center">شماره موبایل</p>
                  <input className="form-control text-center" name="mobile" value={context.phone} onChange={e => {
                    context.setPhone(e.target.value); validator.current.showMessageFor("mobile");
                    validator.current.showMessageFor("mobile");
                  }} type="mobile"/>
                  {validator.current.message(
                    "mobile",
                    phoneNumber,
                    "required|min:5"
                  )}
                </Form.Group>
              </Form>
              <hr />
              <div className="d-flex flex-row justify-content-around alert-success p-3" style={{ direction: "rtl",fontFamily:"Yekan" }}>
                <div>مبلغ قابل پرداخت : </div>
                <div className="text-success">{context.amount} ریال</div>
              </div>
              <hr />
              <button className="btn btn-gorges" onClick={handleSend}>
  مرحله ی بعد
  </button>
              </div>

            )}
          </CardContent>
        </Card>
      </Grid>

    </Fragment>
  );
}
export default function FormPardakht() {
  const context = useContext(PaymentContext);

  const {setActiveSteps ,phoneNumber , card , ShomareCart, setShomareCart, cardNumber , setcardNumber, setphoneNumber , classes , validator} = context;
  const handleToTp = ()=>{
    try {
      const Tap = {
        amount: "10000",
        destination: `${context.cardTo}`,
        phoneNumber: `${context.phone}`,
        source: `${context.card}`
      };
      http.post(`https://api.cinciti.com/payment-gateway/v1/payment/totp`, JSON.stringify(Tap)).then((e) => {
      }).catch((e) => console.log(e));
    } catch (ex) {
      console.log(ex);
    } 
  }
  const handlePay = ()=>{
    try {
      context.setGorgi(true);
      const payInfo = {
        cvv2: `${context.cvv2}`,
        exM: `${context.exM}`,
        exY: `${context.exY}`,
        pin: `${context.pin}`
      };
      http.post(`https://api.cinciti.com/payment-gateway/v1/payment/id/${context.payment}`, JSON.stringify(payInfo)).then((e) => {
        context.setActiveStep(3);
        context.setGorgi(true);
      }).catch((e) => console.log(e));
    } catch (ex) {
      console.log(ex);
    } 
  }

  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center" spacing={2}
      >
        <Card variant="outlined">
          {context.gorgi ? (
                            <Spinner animation="grow" variant="success" />

          ) : (
            <div>
                        <p style={{ fontSize: "40px", fontFamily: "SOGAND", color: "white" }}>فرم پرداخت</p>
          <CardContent>
            <Form style={{ direction: "rtl" }} onSubmit={(e)=>e.preventDefault()}>
              <Form.Group controlId="CardNumber">
                <Form.Label className="text-right">شماره کارت : </Form.Label>
                <Form.Control className="text-center" type="CardNumber" value={context.card} placeholder="شماره کارت خود را وارد کنید" />
              </Form.Group>
              <Form.Group controlId="CardNumber">
                <Form.Label className="text-right">شماره شناسایی دوم (CVV2):</Form.Label>
                <NumberFormat onChange={(e)=>{context.setCvv2(e.target.value)}} type="CardNumber" className="w-25 form-control text-center" style={{ marginRight: "38%" }}  mask="" placeholder="****" />
              </Form.Group>
              <Form.Label className="text-center">تاریخ انقضا : </Form.Label>
              <Row>
                <Col>
                  <NumberFormat onChange={(e)=>{context.setExM(e.target.value)}} format="##" mask="*" className="form-control text-center" placeholder="ماه" />
                </Col>
                <Col>
                  <NumberFormat onChange={(e)=>{context.setExY(e.target.value)}} format="##" mask="*" className="form-control text-center" placeholder="سال" />
                </Col>
              </Row>

              <p className="text-center mt-3">رمز دوم : </p>
              <InputGroup className="mb-3" style={{ width: "100%", padding: "5px" }}>
                <InputGroup.Prepend>
                  <Button variant="outline-secondary" style={{ borderRadius: "0px 25px 25px 0px" }} className="text-light bg-success" onClick={handleToTp}>دریافت رمز پویا</Button>
                </InputGroup.Prepend>
                <NumberFormat onChange={(e)=>{context.setPin(e.target.value)}} type="password"  className="form-control"aria-describedby="basic-addon1" />
              </InputGroup>

            </Form>
            <hr />
            <div className="d-flex flex-row justify-content-around alert-success p-3" style={{ direction: "rtl" }}>
              <div>مبلغ قابل پرداخت : </div>
              <div className="text-success">{context.amount} ریال</div>
            </div>
            <hr />
            <Button className="btn btn-gorges" onClick={handlePay}>
پرداخت
</Button>

            {/* <span className="alert alert-dark">مبلغ قابل پرداخت : 50000تومان</span> */}
          </CardContent>
            </div>
          )}
        </Card>
      </Grid>
    </div>
  );
}
export function TayidShomareMob() {
  const context = useContext(PaymentContext);
  const handleActiveUser = ()=>{
    try {
      const Active = {
        activationCode: `${context.smsCode}`,
        client: true,
        phoneNumber: `${context.phone}`
      }
      http.post(`https://api.cinciti.com/payment-gateway/v1/user/activate/${context.gateway}`, JSON.stringify(Active)).then((e) => {
        console.log(e);
        context.setActiveStep(2);
      }).catch(e => console.log(e));
    } catch (ex) {
      console.log(ex);
    }
  }
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center" spacing={2}
      >
        <Card variant="outlined">
          <p style={{ fontSize: "40px", fontFamily: "SOGAND", color: "white" }}>تایید شماره تماس</p>
          <CardContent>
            <Form style={{ direction: "rtl" }}>
              <Form.Group controlId="CardNumber">
                <p>کد ارسال شده به : {context.phone} (تغییر شماره)</p>
                <Form.Label className="text-right">تایید ورود به حساب 02:59</Form.Label>
                <Form.Control className="text-center" type="CardNumber" placeholder="کد تایید" onChange={(e)=>{
                  context.setSmsCode(e.target.value);
                }} />
              </Form.Group>
            </Form>
            <Button className="btn btn-gorges" onClick={handleActiveUser}>
تایید شماره موبایل
</Button>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
export function LastStep() {
  const context = useContext(PaymentContext);
  const {payed} = context;
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center" spacing={2}
      >
        <Card variant="outlined">
          <p style={{ fontSize: "40px", fontFamily: "SOGAND", color: "white" }}>نتیجه ی تراکنش</p>
          <CardContent>
          {(payed != "") ? (
          <div className="d-flex flex-row justify-content-around alert-success p-3" style={{ direction: "rtl",fontFamily:"Yekan" }}>
          <div className="text-success">{payed}</div>
        </div>
      ) : (
        <div className="d-flex flex-row justify-content-around alert-success p-3" style={{ direction: "rtl",fontFamily:"Yekan" }}>
        <div className="text-danger">در پرداخت شما مشکلی پیش آماده است</div>
      </div> 
      )}
      <hr />
            <Button href={context.url} className="btn btn-gorges" >
بازگشت به سایت پذیرنده
</Button>
            {/* <span className="alert alert-dark">مبلغ قابل پرداخت : 50000تومان</span> */}
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}