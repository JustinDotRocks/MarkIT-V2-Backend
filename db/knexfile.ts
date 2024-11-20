import type { Knex } from "knex";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const config: { [key: string]: Knex.Config } = {
	development: {
		client: "mysql2", // Use mysql2 for better compatibility
		connection: {
			host: process.env.DB_HOST || "127.0.0.1",
			user: process.env.DB_USER || "your_database_user",
			password: process.env.DB_PASSWORD || "your_database_password",
			database: process.env.DB_NAME || "your_database_name",
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
