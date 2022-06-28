import React, { useState } from "react";

export type Cola = {
  _id: string,
  name: string,
  description: string,
  cost: string | number,
  num_available: number
}

type ColaProps = {
  cola: Cola
}

export const ColaElement: React.FC<ColaProps> = ({ cola }) => {
  return <div className='card w-2/3'>
    <p className='text-right'>${cola.cost}</p>
    { 
      cola.num_available >= 1 ? 
        <p className='text-right'>Only {cola.num_available} left!</p> :
        <p className='text-right'>Out of Stock</p> 
    }
    <h2 className='text-xl'>{cola.name}</h2>
    <p>{cola.description}</p>
  </div>
}