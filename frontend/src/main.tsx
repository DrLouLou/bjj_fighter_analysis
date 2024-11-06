import { StrictMode } from "react";

import type { AuthenticationResult } from "@azure/msal-browser";
import { EventType } from "@azure/msal-browser";
import ReactDOM from "react-dom/client";

import { msalInstance } from "./api/msal/msalInstance";
import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

msalInstance.initialize().then(() => {
  // Default to using the first account if no account is active on page load
  const accounts = msalInstance.getAllAccounts();

  if (accounts && accounts.length > 0) {
    console.log("Existing accounts:", accounts);
    msalInstance.setActiveAccount(accounts[0]);
  }

  // Optional - This will update account state if a user signs in from another tab or window
  msalInstance.enableAccountStorageEvents();

  msalInstance.addEventCallback((event) => {
    console.log("MSAL Event received:", event);

    if (
      event.eventType === EventType.LOGIN_SUCCESS ||
      event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS ||
      event.eventType === EventType.SSO_SILENT_SUCCESS
    ) {
      const { account } = event.payload as AuthenticationResult;
      console.log("Successful login event. Active account:", account);
      msalInstance.setActiveAccount(account);
    }
  });

  root.render(
    <StrictMode>
      <App pca={msalInstance} />
    </StrictMode>,
  );
}).catch((error) => {
  console.error("MSAL initialization error:", error);
});
