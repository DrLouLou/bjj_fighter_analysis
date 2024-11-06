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
import Adcc77kgPieChart from "./Adcc77kgPieChart";
import Adcc77kgSubFreqChart from "./Adcc77kgSubFreqChart";
import Adcc77kgTakedownFreqChart from "./Adcc77kgTakedownFreqChart";
import Adcc77kgSweepsFreqChart from "./Adcc77kgSweepsFreqChart";
import Adcc77kgPassesFreqChart from "./Adcc77kgPassesFreqChart";
import PodiumDisplay77kg from "./PodiumDisplay77kg";

const Adcc77kg = () => {
  return (
    <div className="h-full flex flex-col gap-4">
      <PageTitle label="ADCC 2024 Men's -77kg" />
      <PodiumDisplay77kg  />
      <div style={{ width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
        <img
          src={`https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihVQP1mdthuE8fEpojfphm2D_x_kFYqPuEiceJEbu2A1nT5QDxBqlmywsbCb3mEOFy2LG4c5pdui-XNDaDK6DGh_NpQaMvpX0Mxbj06xYYEe9ZXEW79a2bSoKPIRPGV0EDvC1v4CYkVN7w9kdzDLA1_htq7knPF94ewKN_fblKLBcN-sQUmZ6QAE3mVWnX/s16000/ADCC-Worlds-2024-Day-1-results-77.jpg`}
          alt="adcc-77kg-bracket"
          style={{ maxWidth: '700px', height: 'auto' }} 
        />
      </div>
      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Submissions by Body Part"
      >
        <Adcc77kgPieChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Submission Frequencies"
      >
        <Adcc77kgSubFreqChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Takedown Frequencies"
      >
        <Adcc77kgTakedownFreqChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Sweep Frequencies"
      >
        <Adcc77kgSweepsFreqChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Pass Frequencies"
      >
        <Adcc77kgPassesFreqChart />
      </AntdCard>
    </div>
  );
};

export default Adcc77kg;
