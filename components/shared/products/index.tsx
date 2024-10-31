import React from 'react'
import ProductCard from './product-card'

type Props = {}

const Products = () => {
  return (
    <div className='grid grid-cols-3 gap-3 grid-rows-[auto]'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  )
}

export default Products