import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Nexora Labs Backend is running 🚀",
    });
});

app.use("/api/v1/contact", contactRoutes);

app.use(errorHandler);

export default app;