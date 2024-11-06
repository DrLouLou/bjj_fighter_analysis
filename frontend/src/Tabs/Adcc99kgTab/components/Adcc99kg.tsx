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
import Adcc99kgPieChart from "./Adcc99kgPieChart";
import Adcc99kgSubFreqChart from "./Adcc99kgSubFreqChart";
import Adcc99kgTakedownFreqChart from "./Adcc99kgTakedownFreqChart";
import Adcc99kgSweepsFreqChart from "./Adcc99kgSweepsFreqChart";
import Adcc99kgPassesFreqChart from "./Adcc99kgPassesFreqChart";
import PodiumDisplay99kg from "./PodiumDisplay99kg";


const Adcc99kg = () => {

  return (
    <div className="h-full flex flex-col gap-4">
      <PageTitle label="ADCC 2024 Men's -99kg" />

      <PodiumDisplay99kg  />


      <div style={{ width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
        <img
          src={`https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiy2cp9gb6QYmGqPeiO305RYyOl00E_VHQK6Tn5wScdNGLg4Cjc7WnBHFSeO_88MpRCildyif75BG9ZZ-pCHtgOzXy9-iAjTnkhgsYPD1WNgq-WeLl2OUn50rzIqKO44r2XNtRNdDMZyFVNNC7f39xk2kRSJB8xMbauVglIrH5HoJjdw-qgxpHxZ58sziNg/s16000/ADCC-Worlds-2024-Day-1-results-99.jpg`}
          alt="adcc-99kg-bracket"
          style={{ maxWidth: '700px', height: 'auto' }} 
        />
      </div>
      
      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Submissions by Body Part"
      >
        <Adcc99kgPieChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Submission Frequencies"
      >
        <Adcc99kgSubFreqChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Takedown Frequencies"
      >
        <Adcc99kgTakedownFreqChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Sweep Frequencies"
      >
        <Adcc99kgSweepsFreqChart />
      </AntdCard>

      <AntdCard
        className="h-[68vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Pass Frequencies"
      >
        <Adcc99kgPassesFreqChart />
      </AntdCard>

      
    </div>
  );
};

export default Adcc99kg;
