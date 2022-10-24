const express = require("express");
const path = require("path");
const csrf = require("csurf");
const expressSession = require("express-session");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");

const createSessionConfig = require("./config/session");
const database = require("./database/database");

const handleInvalidRoutesMiddleware = require("./middlewares/handle-invalid-routes");
const handleErrorsMiddleware = require("./middlewares/error-handling");
const addCsrfTokenMiddleware = require("./middlewares/csrf-token");
const checkAuthStatusMiddleware = require("./middlewares/check-auth");
const protectRoutesMiddleware = require("./middlewares/protect-routes");

const baseRoutes = require("./routes/customer/base-routes");
const authRoutes = require("./routes/customer/auth-routes");
const adminRoutes = require("./routes/admin/admin-routes");

const app = express();

app.use(express.static("public"));
app.use("/products/assets",express.static("product-data"));
app.use("/admin", express.static("public"));
app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionConfig = createSessionConfig();

app.use(expressSession(sessionConfig));
app.use(cookieParser());
app.use(flash());

app.use(csrf());
app.use(addCsrfTokenMiddleware);

app.use(checkAuthStatusMiddleware);

app.use(baseRoutes);
app.use(authRoutes);
app.use(protectRoutesMiddleware);
app.use("/admin",adminRoutes);

app.use(handleErrorsMiddleware);
app.use(handleInvalidRoutesMiddleware);


database.connectToDatabase().then(function() {
    app.listen(3000);
}).catch(function(error){
    console.log("Connecting to a database failed...");
    console.log(error);
}) 
    
    
