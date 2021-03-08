import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import PaymentContext from './context/Context';
import http from "./services/httpService";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));
const GlobalState = props => {
    const [gorgi, setGorgi] = useState(true);
    const [getPayments, setPayments] = useState([]);
    const [getPaymentsByDate, setPaymentsByDate] = useState([]);
    const [getGateways, setGateways] = useState([]);
    const [getCheckPayment, setCheckPayment] = useState([]);
    const [getStaticByDate, setStaticByDate] = useState([]);
    const [getUrls, setUrls] = useState([]);
    const [getUsers, setUsers] = useState([]);
    const [getDateFrom, setDateFrom] = useState("");
    const [getDateTo, setDateTo] = useState("");
    const [getID, setID] = useState("");
    const [getUrl, setUrl] = useState("");
    const [getUrlAction, setUrlAction] = useState("");
    const [getStaticAction, setStaticAction] = useState(false);
    const [getnotType, setNotType] = useState("ERROR");
    const [getNotifications, setNotifications] = useState([]);



    //Find All Payments
    const handleFindAllPayments = () => {
            http.get(`https://api.cinciti.com/payment-gateway/v1/payment/`).then((e) => {
                setPayments(e.data);
            }).catch(e=>console.log(e))

    }
    // Get All Payments By Date
    const handleGetPaymentsByDate = () => {
        http.get(`https://api.cinciti.com/payment-gateway/v1/payment/from/${getDateFrom}/to/${getDateTo}`).then((e) => {
            setPayments(e.data);
        })
    }
    // Check Payment By ID
    const handleCheckPayment = (id) => {
        http.get(`https://api.cinciti.com/payment-gateway/v1/payment/status/${id}`).then((e) => {
            setCheckPayment(e);
        })
    }
    //Get All Gateways
    const handleGetGateways = () => {
        http.get(`https://api.cinciti.com/payment-gateway/v1/gateways`).then((e) => {
            setGateways(e.data);
            console.log(e.data)
        })
    }
    // Get Static By Date
    const handleGetStatic = () => {
        http.get(`https://api.cinciti.com/payment-gateway/v1/statics/from/${getDateFrom}/to/${getDateTo}`).then((e) => {
            setStaticByDate(e.data);
            setStaticAction(true);
            console.log(e.data);
        })
    }
    // GET ALL URLS
    const handleGetUrls = () => {
        http.get(`https://api.cinciti.com/payment-gateway/v1/url`).then((e) => {
            console.log(e.data);
            setUrls(e.data);
        })
    }
    // POST URL
    const handlePostUrl = () => {
        const url = {
            "enabled": `${getUrlAction}`,
            "id": `${getID}`,
            "url": `${getUrl}`
        }
        http.post(`https://api.cinciti.com/payment-gateway/v1/url`, JSON.stringify(url)).then(() => {
            alert("لینک با موفقیت افزوده شد.");
        })
    }
    // PUT URL
    const handlePutUrl = () => {
        const url = {
            "enabled": `${getUrlAction}`,
            "id": `${getID}`,
            "url": `${getUrl}`
        }
        http.put(`https://api.cinciti.com/payment-gateway/v1/url`, JSON.stringify(url)).then(() => {
            alert("لینک با موفقیت تغییر داده شد.");
        })
    }
    // DELETE URL
    const handleDeleteUrl = () => {
        http.delete(`https://api.cinciti.com/payment-gateway/v1/url/${getID}`).then(() => {
            alert("لینک با موفقیت حذف گردید");
        })
    }
    // GET ALL USERS
    const handleGetUsers = () => {
        http.get(`https://api.cinciti.com/payment-gateway/v1/user`).then((e) => {
            setUsers(e.data);
            console.log(e.data)
        })
    }
    const handleGetNotifications = ()=>{
        http.get(`https://api.cinciti.com/notification-service/v1/messages/${getnotType}`).then((e) => {
            setNotifications(e.data);
            console.log(e.data)
        }) 
    }
    
    const store = {
        gorgi: gorgi,
        getPayments: getPayments,
        getPaymentsByDate: getPaymentsByDate,
        getGateways: getGateways,
        getCheckPayment: getCheckPayment,
        getStaticByDate: getStaticByDate,
        getUrls: getUrls,
        getUsers:getUsers,
        getDateFrom:getDateFrom,
        getDateTo:getDateTo,
        getID:getID,
        getUrl:getUrl,
        getUrlAction:getUrlAction,
        getStaticAction:getStaticAction,
        getnotType:getnotType,
        getNotifications:getNotifications,
        setNotifications,
        setNotType,
        setStaticAction,
        setUrlAction,
        setUrl,
        setID,
        setDateTo,
        setDateFrom,
        setUsers,
        setGorgi,
        setPayments,
        setGateways,
        setPaymentsByDate,
        setStaticByDate,
        setUrls,
        setCheckPayment,
        handleFindAllPayments,
        handleGetPaymentsByDate,
        handleGetGateways,
        handleGetUrls,
        handlePostUrl,
        handlePutUrl,
        handleDeleteUrl,
        handleGetStatic,
        handleGetUsers,
        handleGetNotifications

    };

    return (
        <PaymentContext.Provider value={store}>
            {props.children}
        </PaymentContext.Provider>
    );
};

export default GlobalState;

