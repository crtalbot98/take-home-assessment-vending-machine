import React, { useEffect, useState } from "react"

type cola = {
  _id: string,
  name: string,
  description: string,
  cost: number,
  num_available: number
}

const ColaContainer: React.FC = () => {

  const [colas, setColas] = useState<cola[]>([]);

  const fetchAndSetColas = async() => {
    const colaData = await fetch('http://localhost:3000/cola/getAll');
    const colaJson = await colaData.json();
    setColas(colaJson)
  }

  useEffect(() => {
    fetchAndSetColas()
  }, [])

  if(colas.length < 1) return <p>Please give us a second!</p>

  const colaList = colas.map((elm: cola) => {
    const trueCost = (elm.cost / 100).toFixed(2)
    return <div key={elm._id}>
      <h2>{elm.name}</h2>
      <p>{elm.description}</p>
      <p>${trueCost} USD</p>
      <p>Only {elm.num_available} available!</p>
    </div>
  });

  return <>
    {colaList}
  </>
}

export default ColaContainer