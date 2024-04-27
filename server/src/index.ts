import * as dotenv from "dotenv";

import app from "./app";
import { AppDataSource } from "./database/data-source";

dotenv.config();

const PORT = process.env.APP_PORT || 8000;

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connection success");
  })
  .catch(console.error);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
