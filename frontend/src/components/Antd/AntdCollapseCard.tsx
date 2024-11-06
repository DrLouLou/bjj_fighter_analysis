import { CSSProperties, ReactNode } from "react";
import { Collapse, CollapseProps } from "antd";
import clsx from "clsx";

import AntdCardTitle from "./AntdCardTitle";

type Props = Omit<CollapseProps, "children"> & {
  className?: string;
  children: ReactNode;
  activeKey?: string[];
  defaultActiveKey?: string[];
  setCollapseKey?: (key: string[]) => void;

  item: {
    key: string;
    label: string | ReactNode;
    extra?: ReactNode;
    styles?: CSSProperties;
  };
};

const AntdCollapseCard = (props: Props) => {
  const {
    className,
    children,
    activeKey,
    defaultActiveKey,
    item,
    setCollapseKey = () => {},
    ...rest
  } = props;

  return (
    <Collapse
      defaultActiveKey={defaultActiveKey}
      className={clsx("border-0 bg-transparent", className)}
      activeKey={activeKey}
      onChange={key => setCollapseKey(key as string[])}
      {...rest}
      items={[
        {
          key: item.key,
          label: <AntdCardTitle>{item.label}</AntdCardTitle>,
          extra: item.extra,
          style: {
            borderRadius: "8px",
            backgroundColor: "white",
            border: "1px solid #f0f0f0",
            ...props.item.styles,
          },
          children,
        },
      ]}
    />
  );
};

export default AntdCollapseCard;
