import { Router } from "express";
import { localUpload, remoteUpload } from "../middlewares/upload.js";
import { deleteEvent, getEventById, getEvents, patchEvent, postEvent } from "../controllers/event_controllers.js";


// Create router
const eventRouter = Router();


// Define routes
eventRouter.post('/events', remoteUpload.single('flier'), postEvent)

eventRouter.get('/events', getEvents)

eventRouter.get('/events/:id', getEventById)

eventRouter.patch('/events/:id', patchEvent)

eventRouter.delete('/events/:id', deleteEvent)

// eventRouter.get('/events/:categoryId', getEventByCategory)



// Export routers
export default eventRouter;