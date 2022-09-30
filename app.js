const express = require("express");
const { Db } = require("mongodb");
const path = require("path");

const database = require("./database/database")

const baseRoutes = require("./routes/customer/base-routes");

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(baseRoutes);


database.connectToDatabase().then(function() {
    app.listen(3000);
}).catch(function(error){
    console.log("Connecting to a database failed...");
    console.log(error);
}) 
    
    
