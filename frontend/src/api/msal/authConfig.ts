import type { Configuration, PopupRequest } from "@azure/msal-browser";
import { LogLevel } from "@azure/msal-browser";

const {
  VITE_APP_AUTH_POLICY_NAME,
  VITE_APP_B2C_AUTH_DOMAIN,
  VITE_APP_APP_CLIENT_ID,
  VITE_APP_LOGIN_SCOPES,
} = import.meta.env;

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
  auth: {
    clientId: VITE_APP_APP_CLIENT_ID as string,
    authority: VITE_APP_B2C_AUTH_DOMAIN + VITE_APP_AUTH_POLICY_NAME,
    knownAuthorities: [VITE_APP_B2C_AUTH_DOMAIN],
    redirectUri: "/",
    postLogoutRedirectUri: "/",
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: true,
  },
  system: {
    allowNativeBroker: false, // Disables WAM Broker
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
  scopes: ["openid", VITE_APP_LOGIN_SCOPES],
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
