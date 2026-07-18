import express from "express";
import { submitContactForm } from "../controllers/contact.controller.js";
import validateContact from "../middlewares/validateContact.middleware.js";

const router = express.Router();

router.post("/", validateContact, submitContactForm);

export default router;