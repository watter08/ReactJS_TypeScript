import axios from "axios";
import { toast } from "react-toastify";
import SentryService from "./logService";
import { sentryDns } from "config/config";

const { CaptureSentryExceptionError, CaptureSentryMessageError, Sentry } =
  SentryService({ dns: sentryDns });

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error?.response?.status >= 400 && error?.response?.status < 500;
  if (!expectedError) {
    toast.error("Error de conexión con el servidor", {
      toastId: "ErrorServer",
    });
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export default {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
  setJwt,
};
