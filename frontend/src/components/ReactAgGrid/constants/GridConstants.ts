import type {
  AgGridEvent,
  ColDef,
  GetContextMenuItemsParams,
  GridApi,
  GridOptions,
  MenuItemDef,
} from "@ag-grid-community/core";

import AgGridLoadingComponent from "../AgGridLoading";

/**
 * Auto-sizes all columns in the grid based on their content.
 * @param e - The AgGridEvent object.
 * @param skipHeaders - Optional. Specifies whether to skip resizing the header columns. Default is true.
 */
export const autoSizeAll = (e: AgGridEvent, skipHeaders = true) => {
  const allColumnIds: string[] = [];
  e.api.getColumns()?.forEach((column) => {
    if (!column.getColDef().suppressSizeToFit)
      allColumnIds.push(column.getId());
  });
  e.api.autoSizeColumns(allColumnIds, skipHeaders);
};

export const autoSizeProductColumn = (api: GridApi) => {
  const productColumn = api.getColumnState().find(col => col.colId === "product");
  if (productColumn) {
    api.autoSizeColumns([productColumn.colId]);
  }
};

/**
 * Resizes the columns of the AgGrid to fit the available width.
 * @param e The AgGrid event object.
 */
export const sizeToFit = (e: AgGridEvent) => {
  e.api.sizeColumnsToFit();
};

/**
 * Default column definitions for the grid.
 */
const DEF_COL_DEFS: ColDef = {
  resizable: true,
  sortable: true,
  filterParams: { newRowsAction: "keep", excelMode: "windows" },
  menuTabs: ["filterMenuTab"],
  minWidth: 80,
  suppressHeaderMenuButton: true,
};

/**
 * Default grid options for ReactAgGrid.
 */
export const DEF_GRID_OPTIONS = {
  rowHeight: 20,
  domLayout: "autoHeight",
  defaultColDef: DEF_COL_DEFS,
  rowSelection: "single",
  autoSizeStrategy: {
    type: "fitCellContents",
    skipHeader: true,
  },
  loadingOverlayComponent: AgGridLoadingComponent,
} as GridOptions;

export const GET_DEF_CONTEXT_MENU_ITEMS = (
  params: GetContextMenuItemsParams,
): (string | MenuItemDef)[] => {
  return [
    "autoSizeAll",
    "copy",
    {
      name: "Copy Row",
      action: () => {
        // set row to be selected
        params.node?.setSelected(true);

        setTimeout(() => {
          params.api.copySelectedRowsToClipboard({
            includeHeaders: true,
          });
          params.node?.setSelected(false);
        }, 300);
      },
    },
    {
      // custom item
      name: "Copy Table",
      action: () => {
        // set all rows to be selected
        params.api.selectAll();

        setTimeout(() => {
          params.api.copySelectedRowsToClipboard({
            includeHeaders: true,
          });
          params.api.deselectAll();
        }, 300);
      },
    },
  ];
};
