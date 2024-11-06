import { createSlice } from "@reduxjs/toolkit";

import type { UserState } from "./_models";
import { getUser } from "./userActions";

const initialState: UserState = {
  loading: false,
  user: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to fetch user";
    });
  },
});

export default userSlice.reducer;
