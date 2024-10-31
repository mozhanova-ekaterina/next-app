import React from "react";
import { ArrowDownUp } from "lucide-react";
import clsx from "clsx";

type Props = {
  className?: string;
};

const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "flex gap-2 items-center p-2 border rounded-xl"
      )}
    >
      <ArrowDownUp className="text-default" />
      <select name="" id="" className="outline-none">
        <option value="">Default</option>
        <option value="">Price: Low to High</option>
        <option value="">Price: High to Low</option>
        <option value="">Rating: High to Low</option>
        <option value="">Rating: Low to High</option>
        <option value="">Discount: Low to High</option>
      </select>
    </div>
  );
};

export default SortPopup;
