const mongoose = require("mongoose");
const config = require("../src/config/config");




const connection = async () => {
    mongoose.set('strictQuery', true)
    try {
        await mongoose.connect(config.db.uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("Success connection to DB");
    } catch (error) {
        console.log(error);
        throw new Error("Connect failed DB")
    }
}

module.exports = connection;