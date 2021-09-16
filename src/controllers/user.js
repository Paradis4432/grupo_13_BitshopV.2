module.exports = {
    login: (req, res) => res.render("users/login", { style: "login", title: "User | Login" }),
}