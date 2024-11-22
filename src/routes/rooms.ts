import express from "express";
import {
	getRooms,
	getRoomById,
	createRoom,
	updateRoom,
	deleteRoom,
} from "../controllers/rooms";

const router = express.Router();

// Correctly map route handlers to controllers without wrapping them
router.get("/", getRooms); // Get all rooms
router.get("/:id", getRoomById); // Get room by ID
router.post("/", createRoom); // Add a new room
router.put("/:id", updateRoom); // Update room by ID
router.delete("/:id", deleteRoom); // Delete room by ID

export default router;
