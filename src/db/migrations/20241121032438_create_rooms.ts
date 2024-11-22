import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("rooms", (table) => {
		table.uuid("id").primary(); // Unique identifier
		table.string("name").notNullable(); // Room name
		table.float("width").notNullable(); // Room width in feet
		table.float("depth").notNullable(); // Room depth in feet
		table.timestamps(true, true); // created_at and updated_at
	});
}

export async function down(knex: Knex): Promise<void> {
	// Drop the `tables` table first to handle dependency
	await knex.schema.dropTableIfExists("tables");
	await knex.schema.dropTableIfExists("rooms");
}
