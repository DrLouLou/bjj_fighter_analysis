import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";
import { ClipboardModule } from "@ag-grid-enterprise/clipboard";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import type { IPublicClientApplication } from "@azure/msal-browser";
import {
  AuthenticatedTemplate,
  MsalProvider,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { Provider as ReduxStoreProvider } from "react-redux";

import AppRouter from "./components/AppRouter/AppRouter";
// import LoginPage from "./components/Auth/LoginPage";
import { store } from "./redux/store";

import "./App.scss";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  MasterDetailModule,
  RowGroupingModule,
  ClipboardModule,
  MenuModule,
  ExcelExportModule,
  RangeSelectionModule,
  SetFilterModule,
]);

type Props = {
  pca: IPublicClientApplication;
};

// TODO: move routes to a separate file
const App = ({ pca }: Props) => {
  return (
    <MsalProvider instance={pca}>
      {/* <AuthenticatedTemplate> */}
        <ReduxStoreProvider store={store}>
          <AppRouter />
        </ReduxStoreProvider>
      {/* </AuthenticatedTemplate> */}
      {/* <UnauthenticatedTemplate> */}
        {/* <LoginPage /> */}
      {/* </UnauthenticatedTemplate> */}
    </MsalProvider>
  );
};

export default App;
