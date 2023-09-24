import React from 'react'
import { Single } from '../../Components/Single/Single'
import { singleUser } from '../../data'

export const User = () => {
  return (
    <div className='User'>
        <Single {...singleUser}/>
    </div>
  )
}
