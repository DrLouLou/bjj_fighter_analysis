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
import AdccPlus99kgPieChart from "./AdccPlus99kgPieChart";
import AdccPlus99kgSubFreqChart from "./AdccPlus99kgSubFreqChart";
import AdccPlus99kgTakedownFreqChart from "./AdccPlus99kgTakedownFreqChart";
import AdccPlus99kgSweepsFreqChart from "./AdccPlus99kgSweepsFreqChart";
import AdccPlus99kgPassesFreqChart from "./AdccPlus99kgPassesFreqChart";
import PodiumDisplayPlus99kg from "./PodiumDisplayPlus99kg";


const AdccPlus99kg = () => {

  return (
    <div className="h-full flex flex-col gap-4">
      <PageTitle label="ADCC 2024 Men's -99kg" />

      <PodiumDisplayPlus99kg  />


      <div style={{ width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
        <img
          src={`https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_-cpvZmOeZSln8wTnA6hjivVPNfpaNLNIHMZxzP-V62DQj8t-_VNWUOSVcBOU7UMVDxKjNJTmIOxO2o46i3OvVXTQUz_X_OnS-O8AJyZpjBzsJTkGzYfMVsqPK7uRDVQ7HexqsjuVqt3Og1FEuzXHZnb9n29CJxG9wbyWF3zL2CkeNdt5ixQoV3ynBCc5/s16000/ADCC-Worlds-2024-Day-1-results-99-1.jpg`}
          alt="adcc-plus-99kg-bracket"
          style={{ maxWidth: '700px', height: 'auto' }} 
        />
      </div>
      
      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Submissions by Body Part"
      >
        <AdccPlus99kgPieChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Submission Frequencies"
      >
        <AdccPlus99kgSubFreqChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Takedown Frequencies"
      >
        <AdccPlus99kgTakedownFreqChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Sweep Frequencies"
      >
        <AdccPlus99kgSweepsFreqChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Pass Frequencies"
      >
        <AdccPlus99kgPassesFreqChart />
      </AntdCard>

      
    </div>
  );
};

export default AdccPlus99kg;
