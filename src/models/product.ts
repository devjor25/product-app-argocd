import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String },
  created_at: { type: Date, default: Date.now }
});

export const Product = model('Product', productSchema);
