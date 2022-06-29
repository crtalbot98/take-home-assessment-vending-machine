import mongoose from "mongoose";

export interface Cola {
  name: string,
  description: string,
  cost: string | number,
  num_available: number
}

const colaSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  cost: {
    type: String,
    required: function () {
      if (this.cost < 1) throw new Error('Cola cannot cost less than $0.01.')
    }
  },
  num_available:{
    type: Number,
    required: function() {
      if (this.num_available < 0) throw new Error('There cannot be less than zero colas.')
    }
  }
}, {
  collection: 'colas'
});

const ColaModel = mongoose.model<Cola>('Cola', colaSchema);

export default ColaModel