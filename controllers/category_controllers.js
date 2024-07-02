import { CategoryModel } from "../models/category_models.js";


// Create category
export const postCategory = async (req, res, next) => {
    try {
        // Add a category to the database
        const newCategory = await CategoryModel.create({
            ...req.body,
            image: req.file.filename
        });
        // Return response
        res.status(201).json(newCategory);
    } catch (error) {
        next(error)
    }
}


// Get category
export const getCategories = async (req, res, next) => {
    try {
        // Get query params
        const { limit, skip, filter, fields } = req.query;
        // Get all categories from database
        const allCategories = await CategoryModel
            .find(filter ? JSON.parse(filter) : {})
            .select(fields ? JSON.parse(fields) : '')
            .limit(limit ? parseInt(limit) : undefined)
            .skip(skip ? parseInt(skip) : undefined);
        // Return response
        res.status(200).json(allCategories);
    } catch (error) {
        next(error)
    }
}



