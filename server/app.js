const dotenv = require("dotenv");
dotenv.config();
const express = require ("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// set port, listen for requests
const PORT = process.env.PORT || 5050;

//connect to DB
mongoose
  .connect(process.env.DB_CONNNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo is up."))
  .catch((err) => console.log("Mongo is Down. Raison :", err));

//Routes
app.get('/', (req,res) => {
    res.send("<h1> we're home ^^ </h1>")
})
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});