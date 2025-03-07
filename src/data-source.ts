import * as dotenv from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";
dotenv.config();

let dbType: any = process.env.DB_TYPE || "mysql";
let environment = process.env.APP_ENV;
if (!environment) {
	console.log(
		"set APP_ENV= variable  in your env file or else there will be an error in accessing databases"
	);
}
export const AppDataSource = new DataSource({
	type: dbType,
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT!) || 3306,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	entities: [
		environment == "development" ? "src/entity/*.ts" : "dist/src/entity/*.js",
	],
	migrations: [
		environment == "development"
			? "src/migrations/*.ts"
			: "dist/src/migrations/*.js",
	],
	synchronize: false,
	timezone: "Z",
});
