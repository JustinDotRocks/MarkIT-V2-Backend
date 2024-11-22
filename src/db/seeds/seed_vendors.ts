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
	await knex("vendors").del();

	// Inserts seed entries
	await knex("vendors").insert([
		{
			id: knex.raw("UUID()"),
			name: "Vendor A",
			products: "Books and Stationery",
			details: "Specializing in educational materials.",
			signed_in: false,
			electricity_required: true,
			table_id: null, // Not assigned to a table yet
			room_id: "262827e4-a820-11ef-89a6-59795641438e",
		},
		{
			id: knex.raw("UUID()"),
			name: "Vendor B",
			products: "Art Supplies",
			details: "Custom paints and brushes.",
			signed_in: true,
			electricity_required: false,
			table_id: null,
			room_id: "26299b42-a820-11ef-89a6-59795641438e",
		},
	]);
}
