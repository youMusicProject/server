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
    views: {
        type: Number,
        default: 0
    },
    thumbnail: {
        type: String,
        default: ""
    },
    
});

module.exports = model("Artist", ArtistSchema, "artists"); 