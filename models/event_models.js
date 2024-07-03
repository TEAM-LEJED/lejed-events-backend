import mongoose, { Schema, model, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";
// Create schema
const eventSchema = new Schema({
    name: {type: String, unique: true, required: true },
    categoryId: {type: Types.ObjectId, ref: 'Category', required: true },
    date: {type: Date, required: true },
    time: {type: Date, required: true},
    price: {type: Number, required: true },
    location: {type: String, required: true },
    description: {type: String, required: true },
    flier: {type: String, required: true}
}, {
    timestamps: true
});

eventSchema.plugin(toJSON)
export const EventModel = model('Event', eventSchema)