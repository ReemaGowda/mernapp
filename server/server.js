


require("dotenv").config();
const cors = require('cors')
const connectDB = require('./config/db.js')
const express = require("express");
const app = express();



//import todosRoutes from "./routes/todos.js";
const todosRoutes = require('./routes/todos.js')


app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({ extended: false })
);


// connect database
connectDB();//added

// initialize middleware
//app.use(json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

// setting up port
const PORT = process.env.PORT || 5000;

app.use('/todos', todosRoutes)

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});