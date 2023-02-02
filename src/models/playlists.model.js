const { Schema, model } = require("mongoose");

const PlaylistSchema = Schema({
    userId: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    publicAccessible: {
        type: String,
        default: "true"
    },
    thumbnail: {
        type: String,
        default: ""
    },
    tracks: {
        type: Array,
        default: []
    },
    tracks_pueba: {
        type: Array,
        default: []
    },
    

});

module.exports = model("Playlist", PlaylistSchema, "playlists");
