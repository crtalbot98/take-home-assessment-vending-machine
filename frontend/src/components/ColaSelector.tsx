import React from "react";
import { Cola, ColaElement } from './ColaElement';

type ColaSelectorProps = {
  cola: Cola,
  onClick: React.Dispatch<React.SetStateAction<string>>
}

export const ColaSelector: React.FC<ColaSelectorProps> = ({ cola, onClick }) => {

  const handleClick = async () => {
    const selectedCola = await fetch(`http://localhost:3000/cola/buyOne/${cola._id}`);
    const selectedColaJson = await selectedCola.json();
    onClick(selectedColaJson.name)
  }

  if(cola.num_available < 1) return <p>Sorry! Out of Stock.</p>

  return <div className='flex justify-around p-4'>
    <ColaElement cola={cola}/>
    <button 
      className='bg-white hover:bg-gray-300 h-20 w-20 rounded-full self-center'
      onClick={handleClick}
    >
    </button>
  </div>
}