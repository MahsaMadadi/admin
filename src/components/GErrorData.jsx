import React,{useContext,useEffect} from 'react';
import PaymentContext from './../context/Context';
import GETabs from './common/GETabs';



export default function GErrorData() {
  const context = useContext(PaymentContext);
  useEffect(()=>{
    context.handleGetUrls();
  },[])

  return (
    <div>
      <GETabs />
    </div>
  );
}