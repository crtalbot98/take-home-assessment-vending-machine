import React from "react";
import { Cola, ColaElement } from './ColaElement';
import { useRoleContext, Roles } from '../context';
import Edit from "./Edit";

type ColaSelectorProps = {
  cola: Cola,
  onClick: Function
}

export const ColaSelector: React.FC<ColaSelectorProps> = ({ cola, onClick }) => {
  const { role } = useRoleContext();

  const handleClick = async () => {
    if(cola.num_available < 1) return;

    const selectedCola = await fetch(`http://localhost:3000/cola/buyOne/${cola._id}`);
    const selectedColaJson = await selectedCola.json();
    onClick(selectedColaJson.name)
  }

  if(role === Roles.Admin) return <Edit cola={cola}/>

  return <div className='flex justify-around p-4 w-full'>
    <ColaElement cola={cola}/>
    <button 
      className='bg-white hover:bg-gray-300 h-20 w-20 rounded-full self-center shadow-md'
      onClick={handleClick}
    >
    </button>
  </div>
}