import mongoose, { Schema, model } from "mongoose";

// const formalSubCategories = ["Conferences", "Award Ceremonies", "Gala Dinners", "Charity Balls", "Banquets"]
// const informalSubCategories = ["Weddings", "Birthday Parties", "Festivals", "Fundraising Events", "Themed Parties"]

// const mainCategories = {
//     formal: formalEvents,
//     informal: informalEvents
// };

const categorySchema = new Schema({
    name: {type: String, required: true, unique: true},
    categoryType: {
        type: String, 
        enum: ["formal", "informal"],
        required: true
    },
    description: {type: String, required: true},
    image: {type: String, required: false, unique: true}
})



export const CategoryModel = model('Category', categorySchema)