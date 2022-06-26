import React, { ReactPropTypes } from "react";

export type Cola = {
  _id: string,
  name: string,
  description: string,
  cost: number,
  num_available: number
}

type ColaProps = {
  cola: Cola
}

export const ColaElement: React.FC<ColaProps> = ({ cola }) => {

  const trueCost = (cola.cost / 100).toFixed(2);

  return <div 
    className='w-2/3 h-36 bg-gradient-to-r from-purple-900 to-purple-800 p-2'
  >
    <p className='text-right'>${trueCost}</p>
    <p className='text-right'>Only {cola.num_available} left!</p>
    <h2 className='text-xl'>{cola.name}</h2>
    <p>{cola.description}</p>
  </div>
}