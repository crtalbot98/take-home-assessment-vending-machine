import React, { useEffect, useState } from 'react';
import { ColaSelector } from './ColaSelector';
import Dispenser from './Dispenser';
import { Cola } from './ColaElement';

const ColaContainer: React.FC = () => {

  const [colas, setColas] = useState<Cola[]>([]);
  const [selectedCola, setSelectedCola] = useState<string>('');

  const fetchAndSetColas = async() => {
    const colaData = await fetch('http://localhost:3000/cola/getAll');
    const colaJson = await colaData.json();
    setColas(colaJson)
  }

  const updateSelectedAndAllColas = (evt: any) => {
    const selectedColaIndex = colas.findIndex((elm: Cola) => {
      return elm.name === evt
    });

    colas[selectedColaIndex].num_available -= 1;
    setSelectedCola(evt)
  }

  useEffect(() => {
    fetchAndSetColas()
  }, []);

  const colaList = colas.map((elm: Cola) => {
    return <ColaSelector key={elm._id} cola={elm} onClick={updateSelectedAndAllColas}/>
  });

  return <>
    <div className='bg-zinc-800 text-white'>
      {colaList}
    </div>
    <Dispenser selectedCola={selectedCola} update={setSelectedCola}/>
  </>
}

export default ColaContainer