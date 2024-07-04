import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


// Create schema
const categorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    category: {
        type: String,
        enum: ["Conferences", "Award Ceremonies", "Gala Dinners", "Charity Balls", "Banquets", "Weddings", "Birthday Parties", "Festivals", "Fundraising Events", "Themed Parties"],
    },
    description: { type: String, required: true },
    image: { type: String, required: true }
}, {
    timestamps: true
});


categorySchema.plugin(toJSON);

export const CategoryModel = model('Category', categorySchema)