import mysql from "mysql2/promise";
import * as dotenv from "dotenv";

dotenv.config();

const main = async () => {
	try {
		console.log("Environment Variables:", {
			host: process.env.DB_HOST,
			port: process.env.DB_PORT,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
		});

		// const connection = await mysql.createConnection({
		// 	host: process.env.DB_HOST || "127.0.0.1",
		// 	port: Number(process.env.DB_PORT) || 3306,
		// 	user: process.env.DB_USER || "root",
		// 	password: process.env.DB_PASSWORD || "admin",
		// 	database: process.env.DB_NAME || "markit",
		// });
		const connection = await mysql.createConnection({
			host: process.env.DB_HOST,
			port: Number(process.env.DB_PORT),
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
		});

		console.log("Connected to the database!");

		// Query example: Fetch all rooms
		// const [rows] = await connection.query("SELECT * FROM rooms");
		// console.log("Rooms:", rows);
		// Query Rooms
		const [rooms] = await connection.query("SELECT * FROM rooms");
		console.log("Rooms:", rooms);

		// Query Tables
		const [tables] = await connection.query("SELECT * FROM tables");
		console.log("Tables:", tables);

		// Query Vendors
		const [vendors] = await connection.query("SELECT * FROM vendors");
		console.log("Vendors:", vendors);

		await connection.end();
	} catch (error) {
		console.error("Database connection or query failed:", error);
	}
};

main();
