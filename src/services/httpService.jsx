import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.headers.get["Content-Type"] = "application/json";
axios.defaults.headers.get["Authorization"] = "Basic cHJvcHVkZ2U6UHVkZ2Vob29rNTY1NlB1ZGdlaG9vazIxMjI=";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "http://localhost:3000";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Authorization"] = "Basic cHJvcHVkZ2U6UHVkZ2Vob29rNTY1NlB1ZGdlaG9vazIxMjI=";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "http://localhost:3000";
axios.defaults.headers.delete["Content-Type"] = "application/json";
axios.defaults.headers.delete["Authorization"] = "Basic cHJvcHVkZ2U6UHVkZ2Vob29rNTY1NlB1ZGdlaG9vazIxMjI=";
axios.defaults.headers.delete["Access-Control-Allow-Origin"] = "http://localhost:3000";
axios.defaults.headers.put["Content-Type"] = "application/json";
axios.defaults.headers.put["Authorization"] = "Basic cHJvcHVkZ2U6UHVkZ2Vob29rNTY1NlB1ZGdlaG9vazIxMjI=";
axios.defaults.headers.put["Access-Control-Allow-Origin"] = "http://localhost:3000";
axios.interceptors.response.use(null, error => {
    const expectedErrors =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedErrors) {
        console.log(error);
        toast.error("مشکلی از سمت سرور رخ داده است.", {
            position: "top-right",
            closeOnClick: true
        });
    }

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};
