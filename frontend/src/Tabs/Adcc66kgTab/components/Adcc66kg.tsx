import { useMemo } from "react";
import type { ColDef } from "@ag-grid-community/core";
import api from "@/api";
import AntdCard from "@/components/Antd/AntdCard";
import PageTitle from "@/components/AppLayout/PageTitle";
import AgGridWrapper from "@/components/ReactAgGrid/AgGridWrapper";
import {
  NUMBER_COLUMN,
  TEXT_COLUMN,
} from "@/components/ReactAgGrid/constants/ColDefConstants";
import Adcc66kgPieChart from "./Adcc66kgPieChart";
import Adcc66kgSubFreqChart from "./Adcc66kgSubFreqChart";
import Adcc66kgTakedownFreqChart from "./Adcc66kgTakedownFreqChart";
import Adcc66kgSweepsFreqChart from "./Adcc66kgSweepsFreqChart";
import Adcc66kgPassesFreqChart from "./Adcc66kgPassesFreqChart";
import PodiumDisplay66kg from "./PodiumDisplay66kg";


const Adcc66kg = () => {

  return (
    <div className="h-full flex flex-col gap-4">
      <PageTitle label="ADCC 2024 Men's -66kg" />

      <PodiumDisplay66kg  />


      <div style={{ width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
        <img
          src={`https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfGV6Vgh2xCsp5kTMPGbBsZgQ1Zu5WKkQDSGihVGNW4vIYYnCW5GwfRRnGWKZcFHuKBJD7gssXUDHxQkWcHEz02_u2E5_Z3PDAsy5LwOrpVvYN-ZOjYQB-epunGzlhpXSbQGjh520Q0svbPcJi0SMXVZ05YPBPQP_6eFmkKXTxD135VPJn6ct1JV2Dykpx/s16000/ADCC-Worlds-2024-Day-1-results-66.jpg`}
          alt="adcc-66kg-bracket"
          style={{ maxWidth: '700px', height: 'auto' }} 
        />
      </div>
      
      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Submissions by Body Part"
      >
        <Adcc66kgPieChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Submission Frequencies"
      >
        <Adcc66kgSubFreqChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Takedown Frequencies"
      >
        <Adcc66kgTakedownFreqChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Sweep Frequencies"
      >
        <Adcc66kgSweepsFreqChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Pass Frequencies"
      >
        <Adcc66kgPassesFreqChart />
      </AntdCard>

      
    </div>
  );
};

export default Adcc66kg;
