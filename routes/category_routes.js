import { Router } from "express";
import { getCategories, getCategoryById, postCategory, } from "../controllers/category_controllers.js";
import { localUpload, remoteUpload } from "../middlewares/upload.js";


// Create router
const categoryRouter = Router();


// Define routes
categoryRouter.post('/categories', remoteUpload.single('image'), postCategory)

categoryRouter.get('/categories', getCategories)

categoryRouter.get('/categories/:id', getCategoryById)

// Export routers
export default categoryRouter;