const { Schema, model } = require("mongoose");

const PlaylistSchema = Schema({
    userId: {
        type: String,
        default: 0
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
        default: "public"
    },
    thumbnail: {
        type: String,
        default: ""
    },
    tracks: {
        type: Array,
        default: []
    }

});

module.exports = model("Playlist", PlaylistSchema, "playlists");



