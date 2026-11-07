import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        country: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        rating: {
            type: Number,
            default: 0
        },
        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Destination = mongoose.model("Destination", destinationSchema);

export default Destination;