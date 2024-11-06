import { Spin } from "antd";

const AppSpin = () => {
  return (
    <Spin tip="Loading" size="large">
      <div className="spin-content" />
    </Spin>
  );
};

export default AppSpin;
