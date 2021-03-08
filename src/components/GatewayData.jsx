import React,{useContext,useEffect} from 'react';
import PaymentContext from './../context/Context';
import GatewayTabs from './common/GatewayTabs';



export default function GatewayData() {
  const context = useContext(PaymentContext);
  useEffect(()=>{
    context.handleGetGateways();
  },[])

  return (
    <div>
      <GatewayTabs />
    </div>
  );
}