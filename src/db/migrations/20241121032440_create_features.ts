import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("features", (table) => {
		table.uuid("id").primary();
		table.string("type").notNullable(); // Feature type, e.g., "door"
		table.float("position_x").notNullable(); // X-coordinate
		table.float("position_y").notNullable(); // Y-coordinate
		table.float("rotation").defaultTo(0); // Rotation in degrees
		table.uuid("room_id")
			.references("id")
			.inTable("rooms")
			.onDelete("CASCADE")
			.notNullable(); // Room foreign key
		table.timestamps(true, true);
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTableIfExists("features");
}
