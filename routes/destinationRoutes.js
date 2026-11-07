import express from "express";

import {
    createDestination,
    insertDestinations,
    getDestinations,
    getDestinationById,
    getDestinationByName,
    updateDestinationById,
    updateDestinationByName,
    searchDestinations,
    getCategories,
    getDestinationCount,
    deleteDestinationById,
    deleteDestinationByName,
    deleteAllDestinations
} from "../controllers/destinationController.js";

const router = express.Router();

// Create
router.post("/", createDestination);
router.post("/bulk", insertDestinations);

// Read
router.get("/", getDestinations);
router.get("/search", searchDestinations);
router.get("/categories", getCategories);
router.get("/count", getDestinationCount);
router.get("/id/:id", getDestinationById);
router.get("/name/:name", getDestinationByName);

// Update
router.put("/id/:id", updateDestinationById);
router.put("/name/:name", updateDestinationByName);

// Delete
router.delete("/all", deleteAllDestinations);
router.delete("/id/:id", deleteDestinationById);
router.delete("/name/:name", deleteDestinationByName);

export default router;