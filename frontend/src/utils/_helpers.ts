import { format } from "date-fns";

export const isDateEnabled = (date: Date, enabledDates: string[]) => {
  const formattedDate = format(date, "yyyy-MM-dd");
  return enabledDates.includes(formattedDate);
};

export const disableDatesForDatePicker =
  (enabledDates: string[]) => (date: Date) =>
    !isDateEnabled(date, enabledDates);
