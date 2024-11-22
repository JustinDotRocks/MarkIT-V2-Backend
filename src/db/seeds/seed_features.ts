// import { Knex } from "knex";

// export async function seed(knex: Knex): Promise<void> {
//     // Deletes ALL existing entries
//     await knex("table_name").del();

//     // Inserts seed entries
//     await knex("table_name").insert([
//         { id: 1, colName: "rowValue1" },
//         { id: 2, colName: "rowValue2" },
//         { id: 3, colName: "rowValue3" }
//     ]);
// };

import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("features").del();

	// Inserts seed entries
	await knex("features").insert([
		{
			id: knex.raw("UUID()"),
			type: "Door",
			position_x: 5.0,
			position_y: 10.0,
			rotation: 90,
			room_id: "5b1a1b62-a832-11ef-89a6-59795641438e", // Reference the `rooms` table
		},
		{
			id: knex.raw("UUID()"),
			type: "Window",
			position_x: 15.0,
			position_y: 20.0,
			rotation: 0,
			room_id: "5b1a1b62-a832-11ef-89a6-59795641438e", // Reference the `rooms` table
		},
		{
			id: knex.raw("UUID()"),
			type: "Stage",
			position_x: 10.0,
			position_y: 5.0,
			rotation: 180,
			room_id: "5b1a1b62-a832-11ef-89a6-59795641438e", // Reference the `rooms` table
		},
	]);
}
