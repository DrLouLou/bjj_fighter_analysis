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
import Adcc88kgPieChart from "./Adcc88kgPieChart";
import Adcc88kgSubFreqChart from "./Adcc88kgSubFreqChart";
import Adcc88kgTakedownFreqChart from "./Adcc88kgTakedownFreqChart";
import Adcc88kgSweepsFreqChart from "./Adcc88kgSweepsFreqChart";
import Adcc88kgPassesFreqChart from "./Adcc88kgPassesFreqChart";
import PodiumDisplay88kg from "./PodiumDisplay77kg";


const Adcc88kg = () => {

  return (
    <div className="h-full flex flex-col gap-4">
      <PageTitle label="ADCC 2024 Men's -88kg" />

      <PodiumDisplay88kg  />


      <div style={{ width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
        <img
          src={`https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvUzoLQOMfstqn2_NfrXL1Ji01gWohisWrpV_vds8QbhurAlTkiP-eYYhOxe3a8d41yPDO4UEssPJMcvNZL5V07henxxO5hj3UH7sNMh1kfZJdeQ0pnHu0RUGuLpQJCsgNJq0Xjl82g0qr48uoKMlYIXM75z0yg92WWhB8Y_x8RJ_z4r18jYpkVKMfep7y/s16000/chrome-capture-2024-7-22.png`}
          alt="adcc-88kg-bracket"
          style={{ maxWidth: '700px', height: 'auto' }} 
        />
      </div>
      
      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Submissions by Body Part"
      >
        <Adcc88kgPieChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Submission Frequencies"
      >
        <Adcc88kgSubFreqChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Takedown Frequencies"
      >
        <Adcc88kgTakedownFreqChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Sweep Frequencies"
      >
        <Adcc88kgSweepsFreqChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Pass Frequencies"
      >
        <Adcc88kgPassesFreqChart />
      </AntdCard>

      
    </div>
  );
};

export default Adcc88kg;
