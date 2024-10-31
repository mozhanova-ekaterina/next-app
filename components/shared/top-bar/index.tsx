import clsx from 'clsx'
import React from 'react'
import Categories from './categories'
import SortPopup from './sort-popup'
import Container from '../container'

type Props = {
  className?: string
}

const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, 'sticky top-0 bg-white shadow-lg py-5 z-50')}>
      <Container className='flex items-center justify-between'>
        <Categories/>
        <SortPopup/>
      </Container>
    </div>
  )
}

export default TopBar