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
export const getCategories = async (req, res) => {
    try {
        console.log("request", req.body);
        const getData = await CategoryModel.find();
        res.status(200).send(getData)
    } catch (error) {
        console.log(error)
    }
}


// Delete category
export const deleteCategory = async (req, res, next) => {
    try {
        // Delete category by id
        const deletedCategory = await CategoryModel.findByIdAndDelete(req.params.id);
        // Return response
        res.json('Selected Category has been successfully deleted');
    } catch (error) {
        next(error);
    }
}