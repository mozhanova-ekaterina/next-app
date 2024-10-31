import { Input, Slider } from "@/components/ui";
import { RussianRuble } from "lucide-react";
import React from "react";

type Props = {
  min: number;
  max: number;
  value: number[];
  step: number;
};

const RangeSlider: React.FC<Props> = ({ min, max, value, step }) => {
  return (
    <div>
      <div className="inline-flex gap-2">
        <Input
          type="number"
          variant="bordered"
          min={min}
          max={max}
          endContent={<RussianRuble className="text-default" />}
          defaultValue="0"
          placeholder="0"
        />
        <Input
          type="number"
          variant="bordered"
          min={min}
          max={max}
          endContent={<RussianRuble className="text-default" />}
          placeholder={`${max}`}
        />
      </div>
      <Slider
        label="Цена"
        step={step}
        maxValue={max}
        minValue={min}
        defaultValue={value}
        formatOptions={{
          style: "currency",
          currency: "RUB",
        }}
        className="w-full mt-3"
      />
    </div>
  );
};

export default RangeSlider;
