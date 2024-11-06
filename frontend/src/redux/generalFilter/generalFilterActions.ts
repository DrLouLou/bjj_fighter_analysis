import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";

import api from "@/api";

import type { GeneralFilterState } from "./_models";

export const getDataForFilters = createAsyncThunk<
  GeneralFilterState["dataForFilters"],
  void,
  { rejectValue: string }
>("generalFilter/getDataForFilters", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get("/general");
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    return rejectWithValue(err.message);
  }
});
