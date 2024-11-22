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
	await knex("rooms").del();

	// Inserts seed entries
	await knex("rooms").insert([
		{
			id: knex.raw("UUID()"),
			name: "Main Hall",
			width: 30.0,
			depth: 20.0,
		},
		{
			id: knex.raw("UUID()"),
			name: "Conference Room",
			width: 25.0,
			depth: 15.0,
		},
	]);
}
