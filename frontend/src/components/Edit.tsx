import React, { useState } from "react";
import { Cola } from "./ColaElement";

type AdminViewProps = {
  cola: Cola
}

const Edit: React.FC<AdminViewProps> = ({ cola }) => {

  const [numAvailableInput, setNumAvailableInput] = useState<string>('');
  const [costInput, setCostInput] = useState<string>('');
  const [error, setError] = useState<string>('');

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

  const submitForm = async(evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(costInput && Number(costInput) < 1) setError('Cost cannot be less than $0.01.');
    else if(numAvailableInput && Number(numAvailableInput) < 0) setError('Num_available cannot be less than 0');

    const changes = await fetch(`http://localhost:3000/cola/updateOne/${cola._id}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cost: costInput,
        num_available: numAvailableInput
      })
    });
    const changesJson = await changes.json();

    if(changesJson.error) setError(changesJson.error);
  }

  return <div className='p-4 w-full'>
    <p>{error}</p>
    <form 
      className='card w-full space-y-1 inline-block' 
      id={cola.name} 
      action={`http://localhost:3000/cola/updateOne/${cola._id}`}
      onSubmit={submitForm}
    >
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