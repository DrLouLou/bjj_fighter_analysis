import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";

import api from "@/api";

import type { IUser } from "./_models";

export const getUser = createAsyncThunk<IUser, void, { rejectValue: string }>(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/user");
      return response.data;
    } catch (error: unknown) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  },
);
