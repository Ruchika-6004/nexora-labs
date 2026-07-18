import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Nexora Labs Backend is running 🚀",
    });
});

export default app;