import clsx from 'clsx'
import React from 'react'
import { Button, Link } from '../../ui'

type Props = {
  className?: string
}

const cats = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', ]
const activeIndex = 0

const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, 'inline-flex gap-2 p-2 rounded-2xl bg-secondary')}>
      {
        cats.map((cat, index) => (
          <Button as={Link} href="#" key={index} className={clsx('bg-secondary text-primary font-bold', {
            'bg-primary-foreground': index === activeIndex
          })}>{cat}</Button>
        ))
      }
    </div>
  )
}

export default Categories