type GeneralFilter = {
  date?: string;
  client?: number;
  currency?: string;
};

export type GeneralFilterState = {
  loading: boolean;
  error?: string;
  filters: GeneralFilter;
  dataForFilters: {
    clients: {
      client_name: string;
      id_client: number;
    }[];
    clientForSelect: {
      label: string;
      value: number;
    }[];
    position_dates: string[];
  };
};
