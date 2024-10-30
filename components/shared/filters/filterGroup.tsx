import React, { PropsWithChildren } from "react";
import Title from "../title";
import { Divider } from "@/components/ui";

type Props = {
  className?: string;
  title?: string;
  divider?: boolean;
};

const FilterGroup: React.FC<PropsWithChildren<Props>> = ({
  className,
  title,
  children,
  divider = true,
}) => {
  return (
    <div>
      {title && <Title text={title} size="xs" className="font-bold mb-3" />}
      {children}
      {divider && <Divider className="w-[90%] my-6" />}
    </div>
  );
};

export default FilterGroup;
