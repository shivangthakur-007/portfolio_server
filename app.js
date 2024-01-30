import express from "express";
import { errorMiddleware } from "./Contact/errorMiddleware.js";
import {router} from "./Contact/contact.route.js";
import cors  from "cors";

const app = express();

app.use(
  cors({
    origin: "https://adarshfolio.netlify.app",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api", (req, res) => {
//   res.send("hello world");
// });

app.use('/api/vi', router);

app.all("*", (req, res) => {
  res.status(400).send("Unknown place !OOPS");
});
app.use(errorMiddleware);

export default app;
