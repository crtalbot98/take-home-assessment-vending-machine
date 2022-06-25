import { Router } from 'express';
import ColaModel from '../models/colaModel.js';

const router = Router();

export default router.get('/updateOne/:id', async (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  try{
    const updatedCola = ColaModel.findByIdAndUpdate(id, updates);

    if(!updatedCola) throw new Error('Unable to find cola');
    res.send(updatedCola)
  }
  catch(err) {
    console.log('ERROR :: colas updateOne', err);
    res.status(400).send({ Error: err.message })
  }
})