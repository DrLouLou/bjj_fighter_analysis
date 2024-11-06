import generatePicker from "antd/es/date-picker/generatePicker";
import dateFnsGenerateConfig from "rc-picker/lib/generate/dateFns";

/**
 * DatePicker
 * @see https://ant.design/components/date-picker/#API
 * @see https://ant.design/docs/react/use-custom-date-library#datepicker
 */
const DatePicker = generatePicker<Date>({
  ...dateFnsGenerateConfig,
  // locale: {
  //   ...dateFnsGenerateConfig.locale,
  //   format: (locale: string, date: Date) => {
  //     return format(date, "dd-MMM-yyyy");
  //   },
  // },
});

export default DatePicker;
