import { Router } from 'express';
import ColaModel from '../models/colaModel.js';

const router = Router();

export default router.post('/updateOne/:id', async (req, res) => {
  const id = req.params.id;
  const { num_available, cost } = req.body;

  try{
    const updateCola = await ColaModel.findById(id);

    if(!updateCola) throw new Error('Unable to find cola');
    
    if(cost) {
      const costWithoutDecimal = cost.toString().replace('.', '');
      updateCola.cost = Number(costWithoutDecimal);
    }
    else if(num_available) {
      updateCola.num_available = num_available;
    }

    const message = await updateCola.save();
    console.log(message)

    res.send(updateCola)
  }
  catch(err) {
    console.log('ERROR :: colas updateOne', err);
    res.status(400).send({ error: err.message })
  }
})