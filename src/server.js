const express = require("express");
const app = express();

app.use("/static",express.static("public")); //add the public folder to the web server, accessible through static.

app.listen(5000, () => {
    console.log("Listening on port 5000");
});