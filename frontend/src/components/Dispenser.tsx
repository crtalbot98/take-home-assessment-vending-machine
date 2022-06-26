import React from "react";
import DispensedCola from "./DispensedCola";

type DispenserProps = {
  selectedCola: string,
  update: React.Dispatch<React.SetStateAction<string>>
}

const Dispenser: React.FC<DispenserProps> = ({ selectedCola, update }) => {

  return <div className='h-40 w-5/6 bg-zinc-800 flex items-center justify-center'>
    { selectedCola ? 
        <DispensedCola colaName={selectedCola} onClick={update}/> 
      : 
        <p>Pick me up here!</p>
    }
  </div>
}

export default Dispenser