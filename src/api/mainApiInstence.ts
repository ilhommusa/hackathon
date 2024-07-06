import axios from "axios";
import { getToken } from "../context/AuthContext";
import { removeToken } from "../context/AuthContext";
import { api_uri, main_api_path } from "../configs/mainConfigs";

export const mainUrl = () => "https://api.qayiq.uz";

const mainApiInstence = axios.create({
  baseURL: mainUrl() + "/v1/api",
  headers: {
    Accept: "application/json",
  },
});
// mainApiInstence.interceptors.
mainApiInstence.interceptors.request.use(function (config) {
  // Do something before request is sent

  config.headers ?? {};

  config.headers.Authorization = "Bearer " + getToken();

  return config;
});

mainApiInstence.interceptors.response.use(
  (config) => config,
  function (err) {
    // Do something with request error
    if (err.message === "Network error") {
      err.message =
        "Internet bilan bog'liq muammo. Internetni tekshiring yoki dasturchiga bog'laning";
    } else if (err?.response?.status === 401 || err?.response?.status === 403) {
      removeToken();
      if (typeof window !== "undefined") {
        window.location.href = `/auth/login?redirect=${window.location.pathname}`;
      }
    }

    return Promise.reject(err);
  }
);

export default mainApiInstence;
