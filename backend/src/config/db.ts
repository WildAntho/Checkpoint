import { DataSource } from "typeorm";
import { Country } from "../entities/country";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  entities: [Country],
  synchronize: true,
});