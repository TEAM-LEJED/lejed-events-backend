import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category_controllers.js";
import { localUpload } from "../middlewares/upload.js";

const categoryRouter = Router();

// Routers are here
categoryRouter.post('/categories', localUpload.single('flier'), postCategory)

categoryRouter.get('/categories', getCategories)


// Export routers
export default categoryRouter;