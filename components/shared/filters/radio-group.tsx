import { Radio, RadioGroup } from "@/components/ui";
import React from "react";

type Props = {
  className?: string;
  values: string[];
  defaultValue?: string;
};

const RadioFilterGroup: React.FC<Props> = ({
  className,
  values,
  defaultValue,
}) => {
  return (
    <RadioGroup defaultValue={defaultValue}>
      {values.map((value, i) => (
        <Radio value={value} key={i}>
          {value}
        </Radio>
      ))}
    </RadioGroup>
  );
};

export default RadioFilterGroup;
