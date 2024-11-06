import { memo, useMemo } from "react";

import clsx from "clsx";
import type { ReactNode} from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const TextComponent = ({ children }: Pick<Props, "children">) => (
  <h2 className="text-gray-500 font-normal mb-0 py-1 text-[18px] leading-[18px]">
    {children}
  </h2>
);

const GridTitle = ({ children, className }: Props) => {
  const childForRender = useMemo(
    () =>
      typeof children === "string" ? (
        <TextComponent>{children}</TextComponent>
      ) : (
        children
      ),
    [children]
  );

  return (
    <div className={clsx("w-full px-3 py-1 bg-[#bdd6ee] rounded-t", className)}>
      {childForRender}
    </div>
  );
};

/**
 * GridTitle is a component that renders a title for a grid.
 * @param children The title to be rendered.
 * @returns A component that renders a title for a grid.
 * @example
 * ```tsx
 * <GridTitle>Commodity</GridTitle>
 * OR
 * <GridTitle>
 *   <GridTitleText>Commodity</GridTitleText>
 *  </GridTitle>
 * ```
 * @see
 * - [SubHeaderTitle](
 *    /maco-web-ui/src/components/_common/SubHeader/SubHeaderTitle.tsx
 *  )
 */
export default memo(GridTitle);
export const GridTitleText = memo(TextComponent);
