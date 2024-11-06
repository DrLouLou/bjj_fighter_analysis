import React, { memo } from "react";

type Props = {
  children?: React.ReactNode;
};

const AntdCardTitle = ({ children }: Props) => (
  <span className="font-semibold text-lg text-center text-[#184e77]">
    {children}
  </span>
);

export default memo(AntdCardTitle);
