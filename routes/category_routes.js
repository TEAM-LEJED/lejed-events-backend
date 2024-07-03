import { Router } from "express";
import { deleteCategory, getCategories, postCategory } from "../controllers/category_controllers.js";
import { localUpload, remoteUpload } from "../middlewares/upload.js";

const categoryRouter = Router();

// Routers are here
categoryRouter.post('/categories', remoteUpload.single('image'), postCategory)

categoryRouter.get('/categories', getCategories)

categoryRouter.delete('/categories/:id', deleteCategory)

// Export routers
export default categoryRouter;