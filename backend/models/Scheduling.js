import mongoose from "mongoose";

const schemaScheduling = mongoose.Schema({
    services: {
        type: [String],
        required: true
    },
    barber: {
        type: String,
        required: true
    },
    dayWeek: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
})

export const Scheduling = mongoose.model('Scheduling', schemaScheduling)