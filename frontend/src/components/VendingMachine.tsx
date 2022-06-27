import React, { useEffect, useState } from 'react';
import { ColaSelector } from './ColaSelector';
import { Cola } from './ColaElement';
import DispensedCola from './DispensedCola';

const VendingMachine: React.FC = () => {

  const [colas, setColas] = useState<Cola[]>([]);
  const [purchasedColas, setPurchasedColas] = useState<string[]>([]);
  const [cashInMachine, setCashInMachine] = useState<string>('0.00');

  const fetchAndSetColas = async() => {
    const colaData = await fetch('http://localhost:3000/cola/getAll');
    const colaJson = await colaData.json();
    setColas(colaJson)
  }

  const updateOnPurchase = (name: string) => {
    const selectedColaIndex = colas.findIndex((elm: Cola) => {
      return elm.name === name
    });
    const fullCash = Number(cashInMachine) + Number(colas[selectedColaIndex].cost)

    colas[selectedColaIndex].num_available -= 1;
    setPurchasedColas([...purchasedColas, name]);
    setCashInMachine(fullCash.toFixed(2))
  }

  const removeFirstSelectedCola = () => {
    setPurchasedColas([...purchasedColas.slice(1, purchasedColas.length)]);
  }

  useEffect(() => {
    fetchAndSetColas()
  }, []);

  const colaList = colas.map((elm: Cola) => {
    return <ColaSelector key={elm._id} cola={elm} onClick={updateOnPurchase}/>
  });

  return <>
    <div className='flex flex-col justify-start items-center bg-zinc-800 text-white py-2 shadow-md overflow-y-auto max-h-128'>
      <p className='text-center'>You have spent ${cashInMachine}</p>
      {colaList}
    </div>
    <div className='h-40 w-full md:w-96 bg-zinc-800 flex items-center justify-center p-6 shadow-md'>
      { 
        purchasedColas.length >= 1 && 
        <DispensedCola colaName={purchasedColas[0]} onRemove={removeFirstSelectedCola}/> 
      }
    </div>
  </>
}

export default VendingMachine