import { Router } from "express";
import { localUpload } from "../middlewares/upload.js";
import { postEvent } from "../controllers/event_controllers.js";

const eventRouter = Router();

// Routers are here

eventRouter.post('events/', localUpload.single('flier'), postEvent)

// Export routers
export default eventRouter;