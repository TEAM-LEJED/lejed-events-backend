import mongoose, { Schema } from "mongoose";


const categorySchema = new Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    image: {type: String, required: true, unique: true}
})


export const CategoryModel = model('Category', categorySchema)