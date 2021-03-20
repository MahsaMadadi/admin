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
    const [getMenu, setMenu] = useState(true);
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
    const [getAdminUserName, setAdminUserName] = useState("");
    const [getAdminPassword, setAdminPassword] = useState("");
    const [getAdmin, setAdmin] = useState(false);
    const [getUrl, setUrl] = useState("");
    const [getUrlAction, setUrlAction] = useState("");
    const [getStaticAction, setStaticAction] = useState(false);
    const [getnotType, setNotType] = useState("ERROR");
    const [getNotifications, setNotifications] = useState([]);
    const [page, setPage] = useState(1);
    const [getEdit, setEdit] = useState(false);
    const [getAllErrors, setAllErrors] = useState(false);
    const [getButtonDomain, setButtonDomain] = useState(false);
    const [getEditeDomainButton, setEditeDomainButton] = useState(false);
    const [getEditGateway, setEditGateway] = useState([]);
    const [getGatewayName, setGatewayName] = useState("");
    const [getGatewayEnabled, setGatewayEnabled] = useState("");
    const [getGatewayID, setGatewayID] = useState("");
    const [getGatewayDeposit, setGatewayDeposit] = useState("");
    const [getGatewayFailCounter, setGatewayFailCounter] = useState("");
    const [getGatewayPath, setGatewayPath] = useState("");
    const [getGatewayPin, setGatewayPin] = useState("");
    const [getGatewayRegister, setGatewayRegister] = useState("");
    const [getGatewayRegisterDate, setGatewayRegisterDate] = useState("");
    const [getSupportedCards, setSupportedCards] = useState("");
    const [getWithdraw, setWithdraw] = useState("");
    const [getCommission, setCommission] = useState("");
    const [getPaymentMessage, setPaymentMessage] = useState("");


    //handle Admin Login
    const handleLogin = ()=>{
         if(getAdminUserName === "Gorgo" && getAdminPassword === "Esmayl12345"){
             setAdmin(true);
         }else{
             alert("نام کاربری یا رمز عبور اشتباه میباشد");
         }
    }
    
    //handleGatewayEdit
    const handleGatewayEdit = (key) => {
        http.get(`https://api.cinciti.com/payment-gateway/v1/gateways/${key}`).then((e) => {
            setEditGateway(e.data);
            setGatewayID(e.data.id);
            setGatewayName(e.data.name);
            setGatewayDeposit(e.data.deposit);
            setGatewayFailCounter(e.data.failCounter);
            setGatewayPath(e.data.path);
            setGatewayPin(e.data.pin);
            setGatewayRegister(e.data.register);
            setGatewayRegisterDate(e.data.registerDate);
            setSupportedCards(e.data.supportedCards);
            setWithdraw(e.data.withdraw);
            setCommission(e.data.commission);
            setGatewayEnabled(e.data.enabled);
        })
        console.log(key);
        setEdit(!getEdit);
    }

    // PUT GATEWAY EDIT
    const GatewayEdit = () => {
        const gatewayInfo = {
            "commission": getCommission,
            "deposit": getGatewayDeposit,
            "enabled": getGatewayEnabled,
            "failCounter": getGatewayFailCounter,
            "id": getGatewayID,
            "name": getGatewayName,
            "path": getGatewayPath,
            "pin": getGatewayPin,
            "register": getGatewayRegister,
            "registerDate": getGatewayRegisterDate,
            "supportedCards": getSupportedCards,
            "withdraw": getWithdraw
        }
        http.put(`https://api.cinciti.com/payment-gateway/v1/gateways`, JSON.stringify(gatewayInfo)).then(() => {
            alert("اطلاعات درگاه با موفقیت تغییر یافت");
        })
    }
    
    const handleChangePayment = (event, value) => {
        http.get(`https://api.cinciti.com/payment-gateway/v1/payment?page=${value}`).then((e) => {
            setPayments(e.data);
            setPage(value);
        })
    }
    const handleChangeUsers = (event, value) => {
        http.get(`https://api.cinciti.com/payment-gateway/v1/user?page=${value}`).then((e) => {
            setUsers(e.data);
            setPage(value);
        })
    }
    function reverseNumber(n) {
        n = n + "";
        return n.split("-").reverse().join("");
    }
    //Find All Payments
    const handleFindAllPayments = () => {
        http.get(`https://api.cinciti.com/payment-gateway/v1/payment/`).then((e) => {
            setPayments(e.data);
        }).catch(e => console.log(e))

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
            setUrls(e.data);
        })
    }
    // GET ONLY ONE URL
    const handleGetUrl = (domain) => {
        http.get(`https://api.cinciti.com/payment-gateway/v1/url/${domain}`).then((e) => {
            console.log(e.data);
            setUrlAction(e.data.enabled);
            setUrl(e.data.url);
            setID(e.data.id);
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
    const handleDeleteUrl = (url) => {
        const id = url.replace("https://", "");
        http.delete(`https://api.cinciti.com/payment-gateway/v1/url/${id}`).then(() => {
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
    const handleGetNotifications = () => {
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
        getUsers: getUsers,
        getDateFrom: getDateFrom,
        getDateTo: getDateTo,
        getID: getID,
        getUrl: getUrl,
        getUrlAction: getUrlAction,
        getStaticAction: getStaticAction,
        getnotType: getnotType,
        getNotifications: getNotifications,
        page: page,
        getEdit: getEdit,
        getEditGateway: getEditGateway,
        getGatewayID: getGatewayID,
        getGatewayName: getGatewayName,
        getGatewayDeposit: getGatewayDeposit,
        getGatewayFailCounter: getGatewayFailCounter,
        getGatewayPath: getGatewayPath,
        getGatewayPin: getGatewayPin,
        getGatewayRegister: getGatewayRegister,
        getGatewayRegisterDate: getGatewayRegisterDate,
        getSupportedCards: getSupportedCards,
        getWithdraw: getWithdraw,
        getCommission: getCommission,
        getGatewayEnabled: getGatewayEnabled,
        getButtonDomain: getButtonDomain,
        getEditeDomainButton: getEditeDomainButton,
        getMenu: getMenu,
        getAllErrors: getAllErrors,
        getAdminUserName:getAdminUserName,
        getAdminPassword:getAdminPassword,
        getAdmin:getAdmin,
        getPaymentMessage:getPaymentMessage,
        setPaymentMessage,
        setAdmin,
        setAdminPassword,
        setAdminUserName,
        setAllErrors,
        setMenu,
        setEditeDomainButton,
        setButtonDomain,
        setGatewayEnabled,
        setCommission,
        setWithdraw,
        setSupportedCards,
        setGatewayRegisterDate,
        setGatewayRegister,
        setGatewayPin,
        setGatewayPath,
        setGatewayFailCounter,
        setGatewayDeposit,
        setGatewayName,
        setGatewayID,
        setEditGateway,
        setEdit,
        setPage,
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
        handleGetNotifications,
        reverseNumber,
        handleChangePayment,
        handleChangeUsers,
        handleGatewayEdit,
        handleGetUrl,
        GatewayEdit,
        handleLogin

    };

    return (
        <PaymentContext.Provider value={store}>
            {props.children}
        </PaymentContext.Provider>
    );
};

export default GlobalState;

