import type { Knex } from "knex";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const config: { [key: string]: Knex.Config } = {
	development: {
		client: "mysql2", // Use mysql2 for better compatibility
		// connection: {
		// 	host: process.env.DB_HOST || "127.0.0.1",
		// 	user: process.env.DB_USER || "admin",
		// 	password: process.env.DB_PASSWORD || "admin",
		// 	database: process.env.DB_NAME || "markit",
		// },
		connection: {
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
		},
		migrations: {
			directory: "./db/migrations",
		},
		seeds: {
			directory: "./db/seeds",
		},
	},
};

export default config;
