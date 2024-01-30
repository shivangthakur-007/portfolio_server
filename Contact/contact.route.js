import { ContactUs } from "./contact.controller.js";
import { Router } from "express";

export const router = Router();

router.route("/contact").post(ContactUs);
