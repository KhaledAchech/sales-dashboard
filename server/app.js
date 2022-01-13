const dotenv = require("dotenv");
dotenv.config();
const express = require ('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
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

  // Routes
app.get('/', (req,res) => {
  res.send("<h1> we're home ^^ </h1>")
});

const socialRoutes = require('./routes/socialmedia.js')
app.use('/social', socialRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});