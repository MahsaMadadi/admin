import { createContext } from "react";

const PaymentContext = createContext({
    gorgi: false,
    getPayments: [],
    setPayments: [],
    getPaymentsByDate: [],
    setPaymentsByDate: [],
    getGateways: [],
    setGateways: [],
    getCheckPayment: [],
    setCheckPayment: [],
    getStaticByDate: [],
    setStaticByDate: [],
    getUrls: [],
    setUrls: [],
    getUsers: [],
    setUsers: [],
    handleFindAllPayments : ()=>{}
});

export default PaymentContext;
