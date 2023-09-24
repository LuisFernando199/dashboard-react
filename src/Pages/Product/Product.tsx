import React from 'react'
import { Single } from '../../Components/Single/Single'
import { singleProduct } from '../../data'

export const Product = () => {
  return (
    <div className='Product'>
        <Single {...singleProduct}/>
    </div>
  )
}
