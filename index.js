import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import expressOasGenerator from "express-oas-generator";
import eventRouter from "./routes/event_routes.js";
import categoryRouter from "./routes/category_routes.js";

// Create Express app
const app = express();

expressOasGenerator.handleResponses(app,{
    tags: ['categories', 'events'],
    mongooseModels:mongoose.modelNames(),
});


//Connect to database
await mongoose.connect(process.env.MONGO_URL)


// Apply middlewares
app.use(express.json());
app.use(express.static('uploads'));
app.use(cors())

app.use(eventRouter);
app.use(categoryRouter);

expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs'));


// Listen for incoming requests
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});