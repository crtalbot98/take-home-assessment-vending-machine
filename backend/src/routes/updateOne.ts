import { Router } from 'express';
import ColaModel from '../models/colaModel.js';

type ColaUpdates = {
  cost?: number,
  num_available?: number
}

const router = Router();

export default router.post('/updateOne/:id', async (req, res) => {
  const id = req.params.id;
  const { num_available, cost } = req.body;
  let updates: ColaUpdates = {};

  if(cost && cost > 0) {
    updates.cost = cost
  }
  else if(num_available && num_available > 0) {
    updates.num_available = num_available
  }

  try{
    const updatedCola = await ColaModel.findByIdAndUpdate(id, updates);

    if(!updatedCola) throw new Error('Unable to find cola');
    res.send(updatedCola)
  }
  catch(err) {
    console.log('ERROR :: colas updateOne', err);
    res.status(400).send({ Error: err.message })
  }
})