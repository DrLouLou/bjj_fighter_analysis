import { useMemo, useEffect, useState, useRef, LegacyRef, RefObject } from "react";
import { green } from "@ant-design/colors";
import { Button } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import type { AgGridReactProps } from "@ag-grid-community/react";
import { AgGridReact } from "@ag-grid-community/react";
import clsx from "clsx";
import { useAppSelector } from "@/hooks/redux";
import { themeSelector } from "@/redux/theme/themeSelectors";
import "@/styles/AgGridWrapper.scss";

// import AgGridLoadingComponent from "./AgGridLoading";
import { GridApi } from '@ag-grid-community/core';

interface Props<T> extends AgGridReactProps<T> {
  rootClassName?: string;
  gridRef?: RefObject<AgGridReact>;
  testid?: string;
  clientName?: string | undefined;
  onGridReady?: (params: any) => void;
}

/**
 * Wrapper component for AgGridReact.
 * Here we can add common props, styles, and other configurations for all AgGridReact components in the app.
 * @template T - The type of data in the grid.
 * @param {Props<T>} props - The component props object - AgGridReactProps and additional props.
 * @returns {JSX.Element} - The rendered AgGridWrapper component.
 */
function AgGridWrapper<T>(props: Props<T>): JSX.Element {
  const {
    rootClassName,
    columnDefs,
    testid,
    gridRef,
    rowHeight = 30,
    onCellValueChanged,
    ...restProps
  } = props;
  const currentTheme = useAppSelector(themeSelector);
  const [gridApi, setGridApi] = useState<GridApi | null>(null);


  const gridTheme = useMemo(
    () =>
      currentTheme === "dark" ? "ag-theme-balham-dark" : "ag-theme-balham",
    [currentTheme]
  );


  const hasColumn = (field: string) => {
    return (columnDefs as { field: string }[])?.some((col) => col.field === field);
  };

  const showButtons = hasColumn("gross_mv") && hasColumn("net_mv");

  return (
    <div className={clsx(gridTheme, rootClassName, "ag-grid-common")} data-testid={testid}>
      <div style={{ marginLeft: "10px", marginBottom: "10px" }}>
        {showButtons && (
          <div>
            {/* <Button style={{ marginRight: "10px", backgroundColor: green[5], borderColor: green[5] }} 
              type="primary" icon={<FilterOutlined />} onClick={() => applyTop10Filter("gross_mv")}>
              Find Top 10 Gross MV
            </Button>
            <Button style={{ marginRight: "10px", borderColor: green[5], color: green[5] }} 
              onClick={() => clearFilter("gross_mv")}>
              Clear Gross MV Filter
            </Button>
            <Button style={{ marginRight: "10px", backgroundColor: green[5], borderColor: green[5] }} 
              type="primary" icon={<FilterOutlined />} onClick={() => applyTop10Filter("net_mv")}>
              Find Top 10 Net MV
            </Button>
            <Button style={{ marginRight: "10px", borderColor: green[5], color: green[5] }} 
              onClick={() => clearFilter("net_mv")}>
              Clear Net MV Filter
            </Button> */}
          </div>
        )}
      </div>
      <AgGridReact<T>
        ref={gridRef}
        rowHeight={rowHeight}
        headerHeight={40}
        // loadingCellRenderer={AgGridLoadingComponent}
        rowSelection="single"
        columnDefs={columnDefs}
        onCellValueChanged={onCellValueChanged}
        onGridReady={() => console.log('Grid is ready')}
        {...restProps}
        // onGridReady={(params) => setGridApi(params.api)}
      />
    </div>
  );
}

export default AgGridWrapper;
