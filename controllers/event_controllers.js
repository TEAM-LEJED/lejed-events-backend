import { EventModel } from "../models/event_models.js";

// Create event
export const postEvent = async (req, res, next) => {
    try {
        // Add event to database
        const newEvent = await EventModel.create({
            ...req.body,
            flier: req.file.filename
        });
        // Return response
        res.json(newEvent);
        
    } catch (error) {
        next(error)
    }
}


// Update an event
export const patchEvent = async (req, res, next) => {
    try {
        // Update event by id
        console.log('ji', req.params.id, req.body.name)

        const updatedEvent = await EventModel.findByIdAndUpdate(req.params.id, {'name': req.body.name}, { new:true });
        // Return response
        console.log('okkok', updatedEvent)
        res.status(200).send(updatedEvent);
    } catch (error) {
        console.log(error)
        next(error)
    }
}


// Delete an event
export const deleteEvent = async (req, res, next) => {
    try {
        // Delete event by id
        const deletedEvent = await EventModel.findByIdAndDelete(req.params.id);
        // Return response
        res.json(deletedEvent)
    } catch (error) {
        next(error)
    }
}


// Get events
export const getEvents = async (req, res, next) => {
    try {
        // Get query params
        const {   
            filter = "{}",
            sort = "{}",
            fields = "{}",
            limit = 10, 
            skip = 0
        } = req.query;
        // Get all categories from database
        const allEvents = await EventModel
            .find(JSON.parse(filter))
            .sort(JSON.parse(sort))
            .select(JSON.parse(fields))
            .limit(JSON.parse(limit))
            .skip(JSON.parse(skip));
        // Return response
        res.status(200).json(allEvents);
    } catch (error) {
        next(error)
    }
}



