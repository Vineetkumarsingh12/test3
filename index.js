const express = require("express");
const app = express();
const cors = require("cors");
const quizData = require("./data");
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

// Routes
app.get("/", (req, res) => {
    return res.json(quizData); // Sending quiz data from data.js as the response
});


// Start the server
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
