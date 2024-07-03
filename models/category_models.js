import mongoose, { Schema, model } from "mongoose";


const categorySchema = new Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    image: {type: String, required: false, unique: true}
})


export const CategoryModel = model('Category', categorySchema)