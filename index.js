import express from "express";
import mongoose from "mongoose";
// import expressOasGenerator from "express-oas-generator"
import eventRouter from "./routes/event_routes";
import categoryRouter from "./routes/category_routes";

// Create Express app
const app = express();

// expressOasGenerator.handleResponses(app,{
//     tags: ['categories', 'recipes'],
//     mongooseModels:mongoose.modelNames(),
// });


//Connect to database
await mongoose.connect(process.env.MONGO_URL)



app.use(eventRouter);
app.use(categoryRouter);

// expressOasGenerator.handleRequests();
// app.use((req, res) => res.redirect('/api-docs'));


// Listen for incoming requests
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});