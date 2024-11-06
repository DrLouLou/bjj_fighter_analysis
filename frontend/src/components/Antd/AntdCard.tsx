import type { CardProps } from "antd";
import { Card } from "antd";

type Props = CardProps;

const AntdCard = ({ title, children, ...rest }: Props) => {
  return (
    <Card
      title={
        title && (
          <span className="text-lg font-semibold text-gray-600">{title}</span>
        )
      }
      {...rest}
    >
      {children}
    </Card>
  );
};

export default AntdCard;
