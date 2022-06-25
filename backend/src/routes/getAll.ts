import { Router } from 'express';
import ColaModel from '../models/colaModel.js';

const router = Router();

export default router.get('/getAll', async (req, res) => {
  try{
    const colas = await ColaModel.find();
    res.send(colas)
  }
  catch(err) {
    console.log('ERROR :: colas getAll', err);
    res.status(500).send({ Error: 'Unable to get colas' })
  }
})