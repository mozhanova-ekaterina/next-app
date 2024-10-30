import { Input, Slider } from '@/components/ui';
import { RussianRuble } from 'lucide-react';
import React from 'react'

type Props = {
  min?: number
  max?: number
  defaultValue?: number
}

const RangePrice: React.FC<Props> = ({min = 0, max = 1000, defaultValue = 0}) => {
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
        step={50}
        maxValue={max}
        minValue={min}
        defaultValue={[min, max]}
        formatOptions={{
          style: "currency",
          currency: "RUB",
        }}
        className="w-full mt-3"
      />
    </div>
  );
}

export default RangePrice