const mongoose = require("mongoose");

//const db = process.env.MONGO_URI;

const db ="mongodb+srv://reemagowdan:reemagowda@cluster0.ke21soq.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;