const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const app = express();

//basic setup for app server
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"),
    () => console.log("Server starting in http://localhost:" + app.get("port")));

// app access public
app.use(express.static(path.resolve(__dirname, "../public")));

//app settings for ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

//app moddlewares
app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"));
app.use(express.json());

//routes
app.use("/", require("./routes/home"));
app.use("/product", require("./routes/product"));
app.use("/user", require("./routes/user"));