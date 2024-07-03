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
        const updatedEvent = await EventModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // Return response
        res.json(updatedEvent);
    } catch (error) {
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
        const { limit, skip, filter, fields } = req.query;
        // Get all events from the database
        const allEvents = await EventModel
        .find(filter ? JSON.parse(filter) : {})
        .select(fields ? JSON.parse(fields) : '')
        .limit(limit ? parseInt(limit) : undefined)
        .skip(skip ? parseInt(skip) : undefined);
    } catch (error) {
        next(error)
    }
}



