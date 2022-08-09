import { Schema, model, models } from "mongoose"

const ProductScema = new Schema({
  title: { type: String, required: true },
  category: { type: String },
  price: { type: Number },
  imageURL: { type: String, required: true },
  details: {
    count: { type: String },
    width: { type: Number, default: 1 },
    length: { type: Number, default: 12 },
  },
}, {timestamps: true})

models = {}
export default model("Products", ProductScema)
