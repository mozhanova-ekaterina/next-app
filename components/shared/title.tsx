import clsx from 'clsx'
import React from 'react'

type Props = {
  text: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  className?: string
}

const Title: React.FC<Props> = ({ text, size = 'sm', className }) => {
  const mapClassNameBySize = {
    xs: 'text-[16px]',
    sm: 'text-[22px]',
    md: 'text-[26px]',
    lg: 'text-[32px]',
    xl: 'text-[40px]',
    '2xl': 'text-[48px]',
  } as const

  const mapTagBySize = {
    xs: 'h5',
    sm: 'h4',
    md: 'h3',
    lg: 'h2',
    xl: 'h1',
    '2xl': 'h1',
  } as const

  return React.createElement(mapTagBySize[size], {
    className: clsx( mapClassNameBySize[size], className),
  }, text)
}

export default Title