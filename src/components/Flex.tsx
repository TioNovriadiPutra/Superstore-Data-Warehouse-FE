import { forwardRef, type CSSProperties, type ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const Flex = forwardRef<HTMLDivElement, Props>(
  ({ children, className, style }, ref) => {
    return (
      <div ref={ref} className={`flex flex-col ${className}`} style={style}>
        {children}
      </div>
    );
  },
);

Flex.displayName = "Flex";

export default Flex;
