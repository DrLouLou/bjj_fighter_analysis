import type { ColDef, ValueFormatterParams } from "@ag-grid-community/core";

import { redNegatives } from "@/utils/AgGridUtils/cellStyles";
import {
  fiveDecPlaces,
  formatAgGridNumbers,
  formatNumbers,
  numberToPercentGrid,
  numberToPercentGridTwoDp,
} from "@/utils/AgGridUtils/valueFormatters";
import { formatDateAsDDMMMYYYY } from "@/utils/dateFormatters";

import { NUMBER_FILTER, SET_FILTER } from "./FilterConstants";

/**
 * Number column definition without filter
 * @example
 * const columnDefs = [
 *  { ...NUMBER_COLUMN_WITHOUT_FILTER, field: "field1" },
 *  { ...NUMBER_COLUMN_WITHOUT_FILTER, field: "field2" },
 * ];
 */
const NUMBER_COL: ColDef = {
  type: "numericColumn",
  cellStyle: redNegatives,
  valueFormatter: formatAgGridNumbers,
};

export const NUMBER_COLUMN_WITHOUT_FILTER: ColDef = {
  suppressHeaderMenuButton: true,
  ...NUMBER_COL,
};

/**
 * Number column definition with filter
 * @example
 * const columnDefs = [
 *  { ...NUMBER_COLUMN, field: "field1" },
 *  { ...NUMBER_COLUMN, field: "field2" },
 * ];
 */
export const NUMBER_COLUMN: ColDef = {
  ...NUMBER_FILTER,
  ...NUMBER_COL,
  suppressHeaderMenuButton: false,
  minWidth: 70,
};

/**
 * Number column definition with filter and zero value
 * @example
 * const columnDefs = [
 *  { ...NUMBER_COLUMN, field: "field1" },
 *  { ...NUMBER_COLUMN, field: "field2" },
 * ];
 */
export const NUMBER_COLUMN_WITH_ZERO: ColDef = {
  ...NUMBER_FILTER,
  ...NUMBER_COLUMN_WITHOUT_FILTER,
  suppressHeaderMenuButton: false,
  valueFormatter: (p) => formatNumbers(p.value) || 0,
};

/**
 * Number column definition with filter and 5 decimal places
 * @example
 * const columnDefs = [
 *  { ...NUMBER_COLUMN, field: "field1" },
 *  { ...NUMBER_COLUMN, field: "field2" },
 * ];
 */
export const NUMBER_COLUMN_WITH_5_DEC: ColDef = {
  ...NUMBER_FILTER,
  ...NUMBER_COLUMN_WITHOUT_FILTER,
  suppressHeaderMenuButton: false,
  valueFormatter: fiveDecPlaces,
  minWidth: 70,
};

export const NUMBER_COLUMN_WITHOUT_NULL: ColDef = {
  ...NUMBER_COLUMN,
  valueFormatter: ({ value }: ValueFormatterParams) => {
    const res = formatAgGridNumbers({ value });
    return res === "0" ? "" : res;
  },
};

/**
 * Percent column definition with filter
 * @example
 * const columnDefs = [
 * { ...PERCENT_COLUMN, field: "field1" },
 * { ...PERCENT_COLUMN, field: "field2" },
 * ];
 * */
export const PERCENT_COLUMN: ColDef = {
  ...NUMBER_COLUMN,
  valueFormatter: numberToPercentGrid,
};


export const PERCENT_COLUMN_2DP: ColDef = {
  ...NUMBER_COLUMN,
  valueFormatter: numberToPercentGridTwoDp,
};

/**
 * Percent column definition without filter
 * @example
 * const columnDefs = [
 * { ...PERCENT_COLUMN_WITHOUT_FILTER, field: "field1" },
 * { ...PERCENT_COLUMN_WITHOUT_FILTER, field: "field2" },
 * ];
 * */
export const PERCENT_COLUMN_WITHOUT_FILTER: ColDef = {
  ...NUMBER_COLUMN_WITHOUT_FILTER,
  valueFormatter: numberToPercentGrid,
};

/**
 * Text column definition with filter
 * @example
 * const columnDefs = [
 * { ...TEXT_COLUMN, field: "field1" },
 * { ...TEXT_COLUMN, field: "field2" },
 * ];
 * */
export const TEXT_COLUMN: ColDef = {
  filter: "agTextColumnFilter",
  filterParams: {
    buttons: ["apply", "reset"],
    filterOptions: ["equals", "notEqual", "contains"],
    maxNumConditions: 1,
  },
};

/**
 * Date column definition with filter
 * @example
 * const columnDefs = [
 * { ...DATE_COLUMN, field: "field1" },
 * { ...DATE_COLUMN, field: "field2" },
 * ];
 * */
export const DATE_COLUMN: ColDef = {
  filter: "agDateColumnFilter",
  valueFormatter: ({ value }) => {
    if (!value) return "";
    const date = new Date(value as string);
    return formatDateAsDDMMMYYYY(date);
  },
  suppressHeaderMenuButton: false,
};

/**
 * Date column definition without filter
 * @example
 * const columnDefs = [
 * { ...DATE_COLUMN_WITHOUT_FILTER, field: "field1" },
 * { ...DATE_COLUMN_WITHOUT_FILTER, field: "field2" },
 * ];
 * */
export const DATE_COLUMN_WITHOUT_FILTER: ColDef = {
  ...DATE_COLUMN,
  filter: false,
  suppressHeaderMenuButton: true,
};

/**
 * Set column definition with filter
 * @example
 * const columnDefs = [
 * { ...SET_COLUMN, field: "field1" },
 * { ...SET_COLUMN, field: "field2" },
 * ];
 * */
export const SET_COLUMN: ColDef = {
  ...SET_FILTER,
};

export const ID_COLUMN: ColDef = {
  width: 60,
  minWidth: 40,
  field: "ID",
  headerName: "ID",
  cellClass: "ag-blue-column",
  suppressHeaderMenuButton: true,
  valueFormatter: ({ value, node }) =>
    node?.isRowPinned() ? "" : value ?? (node?.rowIndex ?? 0) + 1,
  suppressAutoSize: true,
};
