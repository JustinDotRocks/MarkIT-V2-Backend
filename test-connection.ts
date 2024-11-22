// import * as knex from "knex";
// import * as dotenv from "dotenv";

// dotenv.config();

// const db = knex.knex({
// 	client: "mysql2",
// 	connection: {
// 		host: process.env.DB_HOST,
// 		port: Number(process.env.DB_PORT),
// 		user: process.env.DB_USER,
// 		password: process.env.DB_PASSWORD,
// 		database: process.env.DB_NAME,
// 	},
// });

// db.raw("SELECT 1")
// 	.then(() => {
// 		console.log("Database connection successful!");
// 		db.destroy();
// 	})
// 	.catch((err) => {
// 		console.error("Database connection failed:", err);
// 		db.destroy();
// 	});

import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
	try {
		const connection = await mysql.createConnection({
			host: process.env.DB_HOST || "127.0.0.1", // Force IPv4
			port: Number(process.env.DB_PORT) || 3306,
			user: process.env.DB_USER || "root",
			password: process.env.DB_PASSWORD || "admin",
			database: process.env.DB_NAME || "markit",
		});
		console.log("Database connection successful");
		await connection.end();
	} catch (error) {
		console.error("Database connection failed:", error);
	}
};

main();
