import * as dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config();

const DB_HOST = process.env.DB_HOST || "mysql";
const DB_PORT = process.env.DB_PORT || 3306;
const DB_USERNAME = process.env.DB_USERNAME || "tiki";
const DB_PASSWORD = process.env.DB_PASSWORD || "tiki2024";
const DB_DATABASE = process.env.DB_DATABASE || "tiki";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  logging: true,
  synchronize: false,
  entities: [],
  subscribers: [],
});
