const { Schema, model } = require("mongoose");

const ArtistSchema = Schema({
    userId: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        required: true
    },
    genres: {
        type: Array,
        default: []
    },
    gender: {
        type: String,
        default: ""
    },
    population: {
        type: Number,
        default: 0
    },
    thumbnail: {
        type: String,
        default: ""
    },
    
});

module.exports = model("Artist", ArtistSchema, "artists"); 