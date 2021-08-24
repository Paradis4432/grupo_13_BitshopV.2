/* const product = require("../models/user"); */
module.exports = {
    login: (req, res) => res.render("users/login", {style: "login", title: "User | Login"}),
    register: (req, res) => res.render("users/register", {style: "register", title: "User | Register"})
}