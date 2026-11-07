
import Destination from "../models/Destination.js";

// 1. Add a single destination
export const createDestination = async (req, res) => {
    try {
        const destination = await Destination.create(req.body);
        res.status(201).json(destination);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 2. Add multiple destinations
export const insertDestinations = async (req, res) => {
    try {
        const destinations = await Destination.insertMany(req.body);
        res.status(201).json(destinations);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 3. Get all destinations
export const getDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.status(200).json(destinations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 4. Get destination by ID
export const getDestinationById = async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);

        if (!destination) {
            return res.status(404).json({
                message: "Destination not found"
            });
        }

        res.status(200).json(destination);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 5. Find destination by name
export const getDestinationByName = async (req, res) => {
    try {
        const destination = await Destination.findOne({
            name: req.params.name
        });

        if (!destination) {
            return res.status(404).json({
                message: "Destination not found"
            });
        }

        res.status(200).json(destination);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 6. Update destination by ID
export const updateDestinationById = async (req, res) => {
    try {
        const destination = await Destination.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!destination) {
            return res.status(404).json({
                message: "Destination not found"
            });
        }

        res.status(200).json(destination);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 7. Update destination by name
export const updateDestinationByName = async (req, res) => {
    try {
        const destination = await Destination.findOneAndUpdate(
            { name: req.params.name },
            req.body,
            { new: true, runValidators: true }
        );

        if (!destination) {
            return res.status(404).json({
                message: "Destination not found"
            });
        }

        res.status(200).json(destination);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 8. Smart discovery: filter, sort and pagination
export const searchDestinations = async (req, res) => {
    try {
        const {
            category,
            minPrice,
            maxPrice,
            sortBy = "price",
            order = "asc",
            page = 1,
            limit = 5
        } = req.query;

        const filter = {};

        if (category) {
            filter.category = category;
        }

        if (minPrice !== undefined || maxPrice !== undefined) {
            filter.price = {};

            if (minPrice !== undefined) {
                filter.price.$gte = Number(minPrice);
            }

            if (maxPrice !== undefined) {
                filter.price.$lte = Number(maxPrice);
            }
        }

        const allowedSortFields = ["price", "rating", "name"];

        const sortField = allowedSortFields.includes(sortBy)
            ? sortBy
            : "price";

        const sortOrder = order === "desc" ? -1 : 1;

        const currentPage = Math.max(1, Number(page) || 1);
        const pageLimit = Math.min(50, Math.max(1, Number(limit) || 5));

        const destinations = await Destination.find(filter)
            .sort({ [sortField]: sortOrder })
            .skip((currentPage - 1) * pageLimit)
            .limit(pageLimit);

        const total = await Destination.countDocuments(filter);

        res.status(200).json({
            total,
            page: currentPage,
            limit: pageLimit,
            destinations
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 9. Get unique categories
export const getCategories = async (req, res) => {
    try {
        const categories = await Destination.distinct("category");
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 10. Get destination count
export const getDestinationCount = async (req, res) => {
    try {
        const count = await Destination.countDocuments();

        res.status(200).json({
            totalDestinations: count
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 11. Delete destination by ID
export const deleteDestinationById = async (req, res) => {
    try {
        const destination = await Destination.findByIdAndDelete(
            req.params.id
        );

        if (!destination) {
            return res.status(404).json({
                message: "Destination not found"
            });
        }

        res.status(200).json({
            message: "Destination deleted successfully"
        });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 12. Delete destination by name
export const deleteDestinationByName = async (req, res) => {
    try {
        const destination = await Destination.findOneAndDelete({
            name: req.params.name
        });

        if (!destination) {
            return res.status(404).json({
                message: "Destination not found"
            });
        }

        res.status(200).json({
            message: "Destination deleted successfully"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 13. Delete multiple destinations based on category
export const deleteAllDestinations = async (req, res) => {
    try {
        const { category } = req.query;

        if (!category) {
            return res.status(400).json({
                message: "Please provide a category to delete destinations"
            });
        }

        const result = await Destination.deleteMany({
            category: category
        });

        res.status(200).json({
            message: "Destinations deleted successfully",
            deletedCount: result.deletedCount
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
