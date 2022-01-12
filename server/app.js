const express = require ('express');

const app = express();

// set port, listen for requests
const PORT = process.env.PORT || 5050;

// Routes
app.get('/', (req,res) => {
    res.send("<h1> we're home ^^ </h1>")
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});