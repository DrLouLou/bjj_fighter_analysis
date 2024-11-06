import type {
  INumberFilterParams,
  ValueFormatterParams,
} from "@ag-grid-community/core";

/**
 * FILTER_BUTTONS
 * @example
 * const filterParams = {
 *  filter: "agNumberColumnFilter",
 *  filterParams: {
 *  ...FILTER_BUTTONS,
 * } as INumberFilterParams,
 */
export const FILTER_BUTTONS = {
  buttons: ["apply", "reset"],
  closeOnApply: true,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const NUMBER_FILTER: any = {
  filter: "agNumberColumnFilter",
  filterParams: {
    filterOptions: [
      "equals",
      "lessThan",
      "greaterThan",
      "notEqual",
      "notBlank",
    ],
    defaultOption: "lessThan",
    // suppressAndOrCondition: true,
    ...FILTER_BUTTONS,
  } as INumberFilterParams,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SET_FILTER: any = {
  filter: "agSetColumnFilter",
  filterParams: {
    filterOptions: ["contains", "notContains", "startsWith", "endsWith"],
    excelMode: "windows",
    ...FILTER_BUTTONS,
  },
  suppressHeaderMenuButton: false,
};

/**
 * Set filter with upper case filter options
 *
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SET_FILTER_UPPER_CASE: any = {
  filter: "agSetColumnFilter",
  filterParams: {
    ...SET_FILTER.filterParams,
    valueFormatter: (p: ValueFormatterParams) => p.value?.toUpperCase() || "",
  },
};
