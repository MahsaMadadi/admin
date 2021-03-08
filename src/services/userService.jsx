import http from "./httpService";

import config from "./config.json";

export const registerUser = mobile => {
    return http.get(
        `${config.phoneStatus}/`,
        JSON.stringify(mobile)
    );
};

export const createPayment = object => {
    return http.post(
        `${config.createPayment}/`,
        JSON.stringify(object)
    );
};



export const checkPayment = id => {
    return http.get(
        `${config.checkPayment}/`,
        JSON.stringify(id)
    );
};

export const Register = object => {
    return http.post(
        `https://api.cinciti.com/payment-gateway/v1/user/register/`,
        JSON.stringify(object)
    );
};