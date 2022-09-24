const express = require("express");
const path = require("path");
const baseRoutes = require("./routes/customer/base-routes");

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(baseRoutes);

app.listen(3000);
