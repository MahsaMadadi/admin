import React,{useContext,useEffect} from 'react';
import PaymentContext from './../context/Context';
import UrlTabs from './common/UrlTabs';



export default function UrlData() {
  const context = useContext(PaymentContext);
  useEffect(()=>{
    context.handleGetUrls();
  },[])

  return (
    <div>
      <UrlTabs />
    </div>
  );
}