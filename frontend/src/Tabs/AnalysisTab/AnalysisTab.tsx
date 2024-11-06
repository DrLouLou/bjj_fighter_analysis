import { useMemo, useState, useEffect } from "react";
import type { ColDef } from "@ag-grid-community/core";
import api from "@/api";
import AntdCard from "@/components/Antd/AntdCard";
import PageTitle from "@/components/AppLayout/PageTitle";
import AgGridWrapper from "@/components/ReactAgGrid/AgGridWrapper";
import {
  NUMBER_COLUMN,
  SET_COLUMN,
} from "@/components/ReactAgGrid/constants/ColDefConstants";
import { useAppSelector } from "@/hooks/redux";
import { generalFilterFiltersSelector } from "@/redux/generalFilter/generalFilterSelector";

const AnalysisTab = () => {


  const colDef = useMemo<ColDef[]>(() => {
    return [
      { headerName: "Client ID", field: "client_id", hide: true },
    ];
  }, []);

  return (
    <div className="h-full flex flex-col gap-4">
      <PageTitle label="Analysis View" />
      <AntdCard
        className="h-[45vh]"
        styles={{ body: { height: "calc(100% - 56px)", padding: 0 } }}
        title="Something"
      >
        {/* <AgGridWrapper
          rootClassName="h-full"
          columnDefs={colDef}
          suppressAggFuncInHeader
          autoSizeStrategy={{ type: "fitCellContents", skipHeader: false }}
          defaultColDef={{
            width: 120,
            minWidth: 90,
            filter: "agTextColumnFilter",
            menuTabs: ["filterMenuTab"],
          }}
          autoGroupColumnDef={{
            width: 200,
            minWidth: 200,
            headerName: "Client Name",
          }}
          rowSelection="single"
        /> */}
      </AntdCard>

      
    </div>
  );
};

export default AnalysisTab;
