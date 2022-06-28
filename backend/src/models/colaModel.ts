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
    min: [1, 'Cola cannot cost less than $0.01.'],
    required: function () {
      return !!this.cost
    }
  },
  num_available:{
    type: Number,
    min: [0, 'There cannot be less than zero colas.'],
    required: function() {
      return !!this.num_available
    }
  }
}, {
  collection: 'colas'
});

const ColaModel = mongoose.model<Cola>('Cola', colaSchema);

export default ColaModel