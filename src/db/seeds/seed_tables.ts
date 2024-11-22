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
	await knex("tables").del();

	// Inserts seed entries
	await knex("tables").insert([
		{
			id: knex.raw("UUID()"),
			type: "6' Table",
			position_x: 10,
			position_y: 15,
			rotation: 0,
			is_locked: false,
			room_id: "5b1a1b62-a832-11ef-89a6-59795641438e", // Reference the `rooms` table
		},
		{
			id: knex.raw("UUID()"),
			type: "5' Round Table",
			position_x: 20,
			position_y: 25,
			rotation: 45,
			is_locked: true,
			room_id: "5b1a1b62-a832-11ef-89a6-59795641438e", // Reference the `rooms` table
		},
	]);
}
