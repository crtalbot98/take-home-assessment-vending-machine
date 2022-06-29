import { Router } from 'express';
import ColaModel from '../models/colaModel.js';

const router = Router();

export default router.get('/buyOne/:id', async (req, res) => {
  const id = req.params.id;

  try{
    const cola = await ColaModel.findById(id);

    if(cola.num_available < 1) throw new Error(`${cola.name} is out of stock`);

    cola.num_available -= 1;
    await cola.save();

    res.send(cola)
  }
  catch(err) {
    console.log('ERROR :: colas getOneById', err);
    res.status(500).send({ error: err.message })
  }
})