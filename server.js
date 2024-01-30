import { config } from "dotenv";
config();
import app from "./app.js";

const PORT = process.env.PORT || 5014;

app.listen(PORT, () => {
  console.log(`PORT is Running at ${PORT}`);
});
