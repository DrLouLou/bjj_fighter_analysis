import { useCallback } from "react";
import { Divider, Select, Typography } from "antd";
import DatePicker from "@/components/Antd/DatePicker";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { generalFilterSelector } from "@/redux/generalFilter/generalFilterSelector";
import { selectCurrentClient } from "@/redux/generalFilter/generalFilterSlice";
import { setFilter } from "@/redux/generalFilter/generalFilterSlice";
import { UserRolesEnum } from "@/redux/user/_models";
import { userSelector } from "@/redux/user/userSelector";
import { disableDatesForDatePicker } from "@/utils/_helpers";

const { Title } = Typography;

const AppHeaderFilters = () => {
  const dispatch = useAppDispatch();

  const { filters, dataForFilters } = useAppSelector(generalFilterSelector);
  const { user } = useAppSelector(userSelector);

  const handleFilterItemChange = useCallback(
    (key: string, value: string | number) => {
      dispatch(setFilter({ [key]: value }));
    },
    [dispatch],
  );

  const filterClientOptions = (inputValue: string, option: any) =>
    option.label.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0;

  return (
    <div className="flex items-center gap-4">
      {user?.role === UserRolesEnum.CLIENT && (
        <div className="flex items-center">
          <Title level={3} className="m-0 text-gray-500">
            {user?.username}
          </Title>
          <Divider type="vertical" className="h-6 mx-4" />
        </div>
      )}

      {user?.role === UserRolesEnum.BROKER && (
        <Select
          className="w-60"
          showSearch
          placeholder="Select Client"
          optionFilterProp="label"
          filterOption={filterClientOptions}
          value={filters.client}
          onChange={(value) => {
            handleFilterItemChange("client", value);
          }}
        >
          {dataForFilters.clientForSelect.map((client) => (
            <Select.Option
              key={client.value}
              value={client.value}
              label={client.label}
            >
              {client.label}
            </Select.Option>
          ))}
        </Select>
      )}

      <DatePicker
        value={filters.date ? new Date(filters.date) : null}
        disabledDate={disableDatesForDatePicker(dataForFilters.position_dates)}
        onChange={(value, dateString) => {
          handleFilterItemChange("date", dateString as string);
        }}
      />
    </div>
  );
};

export default AppHeaderFilters;
