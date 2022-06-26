import React from "react";

type DispensedColaProps = {
  colaName: string,
  onClick: React.Dispatch<React.SetStateAction<string>>,
}

const DispensedCola: React.FC<DispensedColaProps> = ({ colaName, onClick }) => {
  const handleClick = () => {
    onClick('')
  }

  return <div 
    className='cursor-pointer w-2/3 h-36 flex rounded justify-center items-center bg-gradient-to-r from-purple-900 to-purple-800'
    onClick={handleClick}
  >
    <h2 className='text-3xl'>{colaName}</h2>
  </div>
}

export default DispensedCola