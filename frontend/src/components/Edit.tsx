import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Cola } from "./ColaElement";

type AdminViewProps = {
  cola: Cola
}

const Edit: React.FC<AdminViewProps> = ({ cola }) => {

  const [numAvailableInput, setNumAvailableInput] = useState('');
  const [costInput, setCostInput] = useState('');

  const updateCostInput = (evt: React.FormEvent<HTMLInputElement>) => {
    const input = evt.target.value;
    
    if(isNaN(input)) return;
    setCostInput(input)
  }

  const updateNumAvailableInput = (evt: React.FormEvent<HTMLInputElement>) => {
    const input = evt.target.value;
    
    if(isNaN(input)) return;
    setNumAvailableInput(input)
  }

  return <div className='p-4 w-full'>
    <form className='card w-full space-y-1 inline-block' id={cola.name} method="POST" action={`http://localhost:3000/cola/updateOne/${cola._id}`}>
      <h2>{cola.name} - ${cola.cost} - {cola.num_available} available</h2>
      <label htmlFor="num_available">Number Available</label>
      <input type="text" name="num_available" id="num_available" value={numAvailableInput} onInput={updateNumAvailableInput}/>
      <label htmlFor="cost">Cost</label>
      <input type="text" name="cost" id="cost" value={costInput} onInput={updateCostInput}/>
      <button className='bg-white p-2 text-black'>Submit</button>
    </form>
  </div>
}

export default Edit