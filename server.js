import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import destinationRoutes from "./routes/destinationRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/destinations", destinationRoutes);

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to Destiny Travels API!");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Destiny Travels server running on port ${PORT}`);
});