import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("tables", (table) => {
		table.uuid("id").primary();
		table.string("type").notNullable(); // e.g., "6ft rectangular"
		table.float("position_x").notNullable(); // X-coordinate
		table.float("position_y").notNullable(); // Y-coordinate
		table.float("rotation").defaultTo(0); // Rotation in degrees
		table.boolean("is_locked").defaultTo(false); // Lock status
		table.uuid("room_id")
			.references("id")
			.inTable("rooms")
			.onDelete("CASCADE")
			.notNullable(); // Room foreign key
		table.uuid("vendor_id")
			.references("id")
			.inTable("vendors")
			.onDelete("SET NULL"); // Vendor foreign key
		table.timestamps(true, true);
	});
}

// export async function down(knex: Knex): Promise<void> {
// 	await knex.schema.dropTableIfExists("tables");
// }
export async function down(knex: Knex): Promise<void> {
	// Drop foreign keys first to avoid constraints blocking the drop
	await knex.schema.alterTable("tables", (table) => {
		table.dropForeign(["room_id"]);
		table.dropForeign(["vendor_id"]);
	});

	// Drop the tables table after removing foreign keys
	await knex.schema.dropTableIfExists("tables");
}
