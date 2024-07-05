import mongoose, { Schema, model, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


// Create schema
const eventSchema = new Schema({
    name: { type: String, unique: true, required: true },
    category: { 
        type: String,
        enum: ["Conferences", "Award Ceremonies", "Gala Dinners", "Charity Balls", "Banquets", "Weddings", "Birthday Parties", "Festivals", "Fundraising Events", "Themed Parties"],
    },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    flier: { type: String, required: true },
    favourite: { type: Boolean, default: false }
}, {
    timestamps: true
});

eventSchema.plugin(toJSON)
export const EventModel = model('Event', eventSchema);