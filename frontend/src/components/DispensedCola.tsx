import React from "react";

type DispensedColaProps = {
  colaName: string,
  onRemove: Function
}

const DispensedCola: React.FC<DispensedColaProps> = ({ colaName, onRemove }) => {

  const handleClick = () => {
    onRemove()
  }

  return <div 
    className='cursor-pointer w-96 h-36 flex rounded justify-center items-center bg-purple-800'
    onClick={handleClick}
  >
    <h2 className='text-3xl'>{colaName}</h2>
  </div>
}

export default DispensedCola