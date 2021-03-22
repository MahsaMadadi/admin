import React, { useState } from "react";
import PaymentContext from './context/Context';
import axios from "axios";
import ReactSession from 'react-client-session';




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
    const [getAdmin, setAdmin] = useState(getCookie("isAdmin"));
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
    const [getAllMessages, setAllMessages] = useState([]);
    const [getAdminToken, setAdminToken] = useState("");

    axios.defaults.headers.get["Content-Type"] = "application/json";
    axios.defaults.headers.get["Authorization"] = getCookie("adminToken") ? (`Basic ${getCookie("adminToken")}`) : ("Fuck");
    axios.defaults.headers.get["Access-Control-Allow-Origin"] = "http://localhost:3000";
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.headers.post["Authorization"] = getCookie("adminToken") ? (`Basic ${getCookie("adminToken")}`) : ("Fuck");
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "http://localhost:3000";
    axios.defaults.headers.delete["Content-Type"] = "application/json";
    axios.defaults.headers.delete["Authorization"] = getCookie("adminToken") ? (`Basic ${getCookie("adminToken")}`) : ("Fuck");
    axios.defaults.headers.delete["Access-Control-Allow-Origin"] = "http://localhost:3000";
    axios.defaults.headers.put["Content-Type"] = "application/json";
    axios.defaults.headers.put["Authorization"] = getCookie("adminToken") ? (`Basic ${getCookie("adminToken")}`) : ("Fuck");
    axios.defaults.headers.put["Access-Control-Allow-Origin"] = "http://localhost:3000";
    //handle Admin Login
    //handle Admin Login
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    const handeLogOut = () => {
        document.cookie = "isAdmin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "adminToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.reload();
    }
    const handleLoginTest = () => {
        axios.get(`https://api.cinciti.com/payment-gateway/v1/payment/`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${btoa(`${getAdminUserName}:${getAdminPassword}`)}`,
                "Access-Control-Allow-Origin": "http://localhost:3000",
            }
        })
            .then(() => {
                setAdmin(setCookie("isAdmin", true, 365));
            })
            .catch(() => {
                alert("نام کاربری یا کلمه ی عبور اشتباه میباشد");
                document.cookie = "isAdmin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                document.cookie = "adminToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            });
    }
    const handleLogin = async () => {
        try {
            setCookie("username", getAdminUserName, 1);
            setCookie("password", getAdminPassword, 1);
            setCookie("adminToken", btoa(`${getAdminUserName}:${getAdminPassword}`), 30);
            await handleLoginTest();
        } catch (ex) {
            console.log(ex)
        }
    }

    //handleGatewayEdit
    const handleGatewayEdit = (key) => {
        axios.get(`https://api.cinciti.com/payment-method-service/v1/gateways/${key}`).then((e) => {
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
    // SET
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
        axios.put(`https://api.cinciti.com/payment-method-service/v1/gateways`, JSON.stringify(gatewayInfo)).then(() => {
            alert("اطلاعات درگاه با موفقیت تغییر یافت");
        })
    }

    const handleChangePayment = (event, value) => {
        axios.get(`https://api.cinciti.com/payment-gateway/v1/payment?page=${value}`).then((e) => {
            setPayments(e.data);
            setPage(value);
        })
    }
    const handleChangeUsers = (event, value) => {
        axios.get(`https://api.cinciti.com/user-service/v1/user?page=${value}`).then((e) => {
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
        axios.get(`https://api.cinciti.com/payment-gateway/v1/payment/`).then((e) => {
            setPayments(e.data);
        }).catch(e => console.log(e))

    }
    // Get All Payments By Date
    const handleGetPaymentsByDate = () => {
        axios.get(`https://api.cinciti.com/payment-gateway/v1/payment/from/${getDateFrom}/to/${getDateTo}`).then((e) => {
            setPayments(e.data);
        })
    }
    // Check Payment By ID
    const handleCheckPayment = (id) => {
        axios.get(`https://api.cinciti.com/payment-gateway/v1/payment/status/${id}`).then((e) => {
            setCheckPayment(e);
        })
    }
    //Get All Gateways
    const handleGetGateways = () => {
        axios.get(`https://api.cinciti.com/payment-method-service/v1/gateways`).then((e) => {
            setGateways(e.data);
        })
    }
    // Get Static By Date
    const handleGetStatic = () => {
        axios.get(`https://api.cinciti.com/payment-gateway/v1/statics/from/${getDateFrom}/to/${getDateTo}`).then((e) => {
            setStaticByDate(e.data);
            setStaticAction(true);
        })
    }
    // GET ALL URLS
    const handleGetUrls = () => {
        axios.get(`https://api.cinciti.com/url-service/v1/url`).then((e) => {
            setUrls(e.data);
        })
    }
    // GET ONLY ONE URL
    const handleGetUrl = (domain) => {
        axios.get(`https://api.cinciti.com/url-service/v1/url/${domain}`).then((e) => {
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
        axios.post(`https://api.cinciti.com/url-service/v1/url`, JSON.stringify(url)).then(() => {
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
        axios.put(`https://api.cinciti.com/url-service/v1/url`, JSON.stringify(url)).then(() => {
            alert("لینک با موفقیت تغییر داده شد.");
        })
    }
    // DELETE URL
    const handleDeleteUrl = (url) => {
        const id = url.replace("https://", "");
        axios.delete(`https://api.cinciti.com/url-service/v1/url/${id}`).then(() => {
            alert("لینک با موفقیت حذف گردید");
        })
    }
    // GET ALL USERS
    const handleGetUsers = () => {
        axios.get(`https://api.cinciti.com/user-service/v1/user`).then((e) => {
            setUsers(e.data);
        })
    }
    const handleGetNotifications = () => {
        axios.get(`https://api.cinciti.com/notification-service/v1/messages/${getnotType}`).then((e) => {
            setNotifications(e.data);
        })
    }
    //GET ALL MESSAGES
    const handlegetAllMessages = () => {
        axios.get(`https://api.cinciti.com/notification-service/v1/messages`).then((e) => {
            setAllMessages(e.data);
            setAllErrors(true);
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
        getAdminUserName: getAdminUserName,
        getAdminPassword: getAdminPassword,
        getAdmin: getAdmin,
        getPaymentMessage: getPaymentMessage,
        getAllMessages: getAllMessages,
        setAllMessages,
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
        handleLogin, getCookie
        , setCookie,
        handleLoginTest,
        handeLogOut,
        handlegetAllMessages 

    };

    return (
        <PaymentContext.Provider value={store}>
            {props.children}
        </PaymentContext.Provider>
    );
};

export default GlobalState;

