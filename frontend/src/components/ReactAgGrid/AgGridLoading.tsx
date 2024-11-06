import { Spin } from "antd";

const AgGridLoadingComponent = () => (
  <Spin tip="Loading" size="large" data-cy="ag-grid-loading">
    <div className="px-12 bg-transparent" />
  </Spin>
);

export default AgGridLoadingComponent;
