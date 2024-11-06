import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/api/axiosBaseQuery";
import type { 
  FighterData, HistoricalData
} from "../_models/_model";

export const fighterDataApi = createApi({
  reducerPath: "fighterDataApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getFighterData: builder.query<FighterData[], Record<string, never>>({
      query: () => {
    
        console.log("Request for fighter data being sent");
    
        return {
          url: "/fighters",
          method: "GET",
        };
      },
    }), 
    getHistoricalData: builder.query<HistoricalData[], Record<string, never>>({
      query: () => {
    
        console.log("Request for historical data being sent");
    
        return {
          url: "/historicalData",
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetFighterDataQuery,
  useGetHistoricalDataQuery
} = fighterDataApi;
