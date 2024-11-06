import { memo } from "react";

import { Typography } from "antd";
import clsx from "clsx";

const { Title } = Typography;

type Props = {
  label: string;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5;
};

const PageTitle = ({ label, className, level = 3 }: Props) => (
  <Title
    level={level}
    className={clsx("text-gray-600 dark:text-[#a1bce6] m-0 ml-4", className)}
  >
    {label}
  </Title>
);

export default memo(PageTitle);
