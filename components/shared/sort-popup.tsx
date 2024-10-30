import React from 'react'
import { Select, SelectItem } from '../ui'
import { ArrowDownUp } from 'lucide-react';

type Props = {
  className?: string
}

const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" }
];

const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div className='flex gap-2 items-center p-2 border rounded-xl'>
      <ArrowDownUp className='text-default'/>
      <select name="" id="" className='outline-none'>
        <option value="">Default</option>
        <option value="">Price: Low to High</option>
        <option value="">Price: High to Low</option>
        <option value="">Rating: High to Low</option>
        <option value="">Rating: Low to High</option>
        <option value="">Discount: Low to High</option>
      </select>
    </div>
  )
}

export default SortPopup