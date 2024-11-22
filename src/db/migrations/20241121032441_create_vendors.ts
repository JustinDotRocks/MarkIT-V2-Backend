import { Knex } from "knex";

// export async function up(knex: Knex): Promise<void> {
// 	await knex.schema.createTable("vendors", (table) => {
// 		table.uuid("id").primary();
// 		table.string("name").notNullable(); // Vendor name
// 		table.text("products"); // Vendor products or services
// 		table.text("details"); // Additional vendor details
// 		table.boolean("signed_in").defaultTo(false); // Sign-in status
// 		table.boolean("electricity_required").defaultTo(false); // Electricity requirement
// 		table.uuid("table_id")
// 			.references("id")
// 			.inTable("tables")
// 			.onDelete("SET NULL"); // Assigned table foreign key
// 		table.uuid("room_id")
// 			.references("id")
// 			.inTable("rooms")
// 			.onDelete("SET NULL"); // Assigned room foreign key
// 		table.timestamps(true, true);
// 	});
// }
export async function up(knex: Knex): Promise<void> {
	await knex.raw(`
        CREATE TABLE IF NOT EXISTS vendors (
            id char(36) NOT NULL,
            name varchar(255) NOT NULL,
            products text DEFAULT NULL,
            details text DEFAULT NULL,
            signed_in tinyint(1) DEFAULT '0',
            electricity_required tinyint(1) DEFAULT '0',
            table_id char(36) DEFAULT NULL,
            room_id char(36) DEFAULT NULL,
            created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `);
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTableIfExists("vendors");
}
