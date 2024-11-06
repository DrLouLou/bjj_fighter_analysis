import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from '@/redux/store';
import type { GeneralFilterState } from "./_models";
import { getDataForFilters } from "./generalFilterActions";

const initialState: GeneralFilterState = {
  loading: false,
  filters: {
    currency: "USD",
    client: 0,
  },
  dataForFilters: {
    clients: [],
    clientForSelect: [],
    position_dates: [],
  },
};

const generalFilterSlice = createSlice({
  name: "generalFilter",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<GeneralFilterState["filters"]>,
    ) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    clearFilter: (state) => {
      state.filters = {};
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getDataForFilters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDataForFilters.fulfilled, (state, action) => {
      state.loading = false;
      state.dataForFilters = action.payload;

      if (action.payload.clients?.length > 0) {
        const sortedClients = action.payload.clients.sort((a, b) =>
          a.client_name.localeCompare(b.client_name),
        );

        state.dataForFilters.clientForSelect = [
          {
            label: "All Clients",
            value: 0,
          },
          ...sortedClients.map((client) => ({
            label: client.client_name,
            value: client.id_client,
          })),
        ];
        state.filters.client = 0;
      }

      const sortedDates = action.payload.position_dates.sort((a, b) => {
        return new Date(b).getTime() - new Date(a).getTime();
      });

      state.filters.date = sortedDates[0];
    });
    builder.addCase(getDataForFilters.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { setFilter, clearFilter } = generalFilterSlice.actions;
export default generalFilterSlice.reducer;

export const selectCurrentClient = (state: RootState) => state.generalFilter.filters.client;

export const selectCurrentClientName = (state: RootState) => {
  const currentClientId = state.generalFilter.filters.client;
  const currentClient = state.generalFilter.dataForFilters.clients.find(
    (client) => client.id_client === currentClientId
  );
  return currentClient ? currentClient.client_name : undefined;
};

