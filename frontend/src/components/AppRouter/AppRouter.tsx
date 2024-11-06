import { lazy } from "react";

import { Route, Routes } from "react-router-dom";
import { HistoryRouter } from "redux-first-history/rr6";

import { history } from "@/redux/store";

import AppLayout from "../AppLayout/AppLayout";

const FighterTab = lazy(() => import("@/Tabs/FighterTab/FighterTab"),);
const AnalysisTab = lazy(() => import("@/Tabs/AnalysisTab/AnalysisTab"));
const Adcc66kgTab = lazy(() => import("@/Tabs/Adcc66kgTab/components/Adcc66kg"));
const Adcc77kgTab = lazy(() => import("@/Tabs/Adcc77kgTab/components/Adcc77kg"));
const Adcc88kgTab = lazy(() => import("@/Tabs/Adcc88kgTab/components/Adcc88kg"));
const Adcc99kgTab = lazy(() => import("@/Tabs/Adcc99kgTab/components/Adcc99kg"));
const AdccPlus99kgTab = lazy(() => import("@/Tabs/AdccPlus99kgTab/components/AdccPlus99kg"));



const AppRouter = () => {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<FighterTab />} />
          <Route path="/analysis-view" element={<AnalysisTab />} />
          <Route path="/adcc/66kg" element={<Adcc66kgTab />} />
          <Route path="/adcc/77kg" element={<Adcc77kgTab />} />
          <Route path="/adcc/88kg" element={<Adcc88kgTab />} />
          <Route path="/adcc/99kg" element={<Adcc99kgTab />} />
          <Route path="/adcc/+99kg" element={<AdccPlus99kgTab />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
};

export default AppRouter;
