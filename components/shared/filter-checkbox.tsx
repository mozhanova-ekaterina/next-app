import React from 'react'
import { Checkbox } from '../ui'

type Props = {
  text: string
  value: string
  endAdornment?: React.ReactNode
  onCheckedChange?: (checked: boolean) => void
  checked?: boolean
}

const FilterCheckbox: React.FC<Props> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked
}) => {
  return (
    <div>
      <Checkbox
        value={value}
        checked={checked}>{text}</Checkbox>
      {endAdornment}
    </div>
  )
}

export default FilterCheckbox