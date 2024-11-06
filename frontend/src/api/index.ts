import axios from "axios";

import { loginRequest } from "./msal/authConfig";
import { msalInstance } from "./msal/msalInstance";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

instance.interceptors.request.use(
  async (config) => {
    await msalInstance.initialize();

    const currentAccount = msalInstance.getActiveAccount();
    const userAccount = msalInstance.getAllAccounts()[0];

    const account = currentAccount || userAccount;

    if (!account) {
      msalInstance.loginRedirect(loginRequest);
    }

    if (account) {
      const msalResponse = await msalInstance.acquireTokenSilent({
        ...loginRequest,
        account,
      });
      // TODO: delete
      console.warn("msalResponse", msalResponse);

      const { accessToken, idToken } = msalResponse;

      const newToken = accessToken || idToken;

      config.headers.Authorization = `Bearer ${newToken}`;

      // save token to cookie
      document.cookie = `token=${newToken}`;
    }

    return config;
  },
  async (error) => {
    console.error("request error :>> ", error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    if (import.meta.env.MODE !== "production") {
      const { status, statusText } = response;
      console.warn(
        `API Response ${response.config.url} :>> ${status} ${statusText}`,
      );
    }
    return response;
  },
  async (error) => {
    console.error("response error :>> ", error);
    return Promise.reject(error);
  },
);

export default instance;
