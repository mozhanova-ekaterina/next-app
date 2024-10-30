import { Checkbox, CheckboxGroup } from '@/components/ui';
import React from 'react'

type Props = {
  className?: string,
  values: string[],
  defaultValue?: string[],
}

const CheckBoxGroup: React.FC<Props> = ({className, values,defaultValue}) => {
  return (
    <CheckboxGroup defaultValue={defaultValue}>
      {
        values.map((value, i) => (
          <Checkbox value={value} key={i}>{value}</Checkbox>
        ))
      }
    </CheckboxGroup>
  );
}

export default CheckBoxGroup