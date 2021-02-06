// DEPENDENCIES
const fs = require("fs");
const express = require('express');
const path = require("path");

// ROUTER
const app = express();

// Sets an initial port. 
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./develop/public'));


require("./develop/routes/apiRoutes")(app);
require("./develop/routes/htmlRoutes")(app);

const dbJson = require("./develop/db/db.json");

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
