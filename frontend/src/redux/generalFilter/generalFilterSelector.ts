import type { RootState } from "../store";

export const generalFilterSelector = (state: RootState) => state.generalFilter;
export const generalFilterFiltersSelector = (state: RootState) =>
  state.generalFilter.filters;
