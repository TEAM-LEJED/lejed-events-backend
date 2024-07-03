import { Router } from "express";
import { localUpload, remoteUpload } from "../middlewares/upload.js";
import { getEventById, getEvents, patchEvent, postEvent } from "../controllers/event_controllers.js";

const eventRouter = Router();

// Routers are here

eventRouter.post('/events', remoteUpload.single('flier'), postEvent)

eventRouter.get('/events', getEvents)

eventRouter.get('/events/:id', getEventById)

eventRouter.patch('/events/:id', patchEvent)



// Export routers
export default eventRouter;