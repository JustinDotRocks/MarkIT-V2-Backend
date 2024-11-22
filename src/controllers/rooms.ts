import { Request, Response } from "express";
import knex from "../db/knex";

// Fetch all rooms
// export const getRooms = async (req: Request, res: Response) => {
// 	try {
// 		const rooms = await knex("rooms").select("*");
// 		res.status(200).json(rooms);
// 	} catch (error) {
// 		res.status(500).json({ error: "Failed to fetch rooms" });
// 	}
// };
export const getRooms = async (req: Request, res: Response): Promise<void> => {
	try {
		const rooms = await knex("rooms").select("*");
		res.status(200).json(rooms);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch rooms" });
	}
};

// Fetch a room by ID
export const getRoomById = async (
	req: Request,
	res: Response
): Promise<void> => {
	const { id } = req.params;
	try {
		const room = await knex("rooms").where("id", id).first();
		if (!room) {
			res.status(404).json({ error: "Room not found" });
			return;
		}
		res.status(200).json(room);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch room" });
	}
};

// Add a new room
export const createRoom = async (req: Request, res: Response) => {
	const { name, width, depth } = req.body;
	try {
		const [id] = await knex("rooms").insert({
			id: knex.raw("UUID()"),
			name,
			width,
			depth,
		});
		res.status(201).json({ id });
	} catch (error) {
		res.status(500).json({ error: "Failed to create room" });
	}
};

// Update a room by ID
// export const updateRoom = async (req: Request, res: Response) => {
// 	const { id } = req.params;
// 	const updates = req.body;
// 	try {
// 		const rowsAffected = await knex("rooms")
// 			.where("id", id)
// 			.update(updates);
// 		if (rowsAffected === 0) {
// 			return res.status(404).json({ error: "Room not found" });
// 		}
// 		res.status(200).json({ message: "Room updated successfully" });
// 	} catch (error) {
// 		res.status(500).json({ error: "Failed to update room" });
// 	}
// };
export const updateRoom = async (
	req: Request,
	res: Response
): Promise<void> => {
	const { id } = req.params;
	const updates = req.body;

	try {
		const [updatedRoom] = await knex("rooms")
			.where("id", id)
			.update(updates)
			.returning([
				"id",
				"name",
				"width",
				"depth",
				"created_at",
				"updated_at",
			]); // Adjust fields as needed

		if (!updatedRoom) {
			res.status(404).json({ error: "Room not found" });
			return;
		}

		res.status(200).json({
			message: "Room updated successfully",
			updatedRoom,
		});
	} catch (error) {
		res.status(500).json({ error: "Failed to update room" });
	}
};

// Delete a room by ID
export const deleteRoom = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		await knex("rooms").where("id", id).del();
		res.status(200).json({ message: "Room deleted successfully" });
	} catch (error) {
		res.status(500).json({ error: "Failed to delete room" });
	}
};
