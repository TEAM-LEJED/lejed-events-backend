import mongoose, { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

// const formalSubCategories = ["Conferences", "Award Ceremonies", "Gala Dinners", "Charity Balls", "Banquets"]
// const informalSubCategories = ["Weddings", "Birthday Parties", "Festivals", "Fundraising Events", "Themed Parties"]

// const mainCategories = {
//     formal: formalSubCategories,
//     informal: informalSubCategories
// };

const categorySchema = new Schema({
    name: {type: String, required: true, unique: true},
    category: {
        type: String, 
        enum: ["formal", "informal"],
    },
    // subcategory: {
    //     type: String,
    //     required: true, 
        // validate: {
        //     validator: function (value) {
        //         return mainCategories [this.category].includes(value);
        //     },
        //     message: props => `${props.value} is not a valid subcategory for ${props.instant.category}`
        // }
    // },

    description: {type: String, required: true},
    image: {type: String, required: true}
})

categorySchema.plugin(toJSON)

export const CategoryModel = model('Category', categorySchema)