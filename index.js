import express from "express";

// Create Express app
const app = express();


// Listen for incoming requests
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});