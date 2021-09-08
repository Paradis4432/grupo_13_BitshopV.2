const path = require('path');
const fs = require('fs');
const model = {
    all: function () {
        const directory = path.resolve(__dirname, "../data", "colors.json")
        //reeplazar con "../data/colors.json" ?
        const file = fs.readFileSync(directory, "utf-8")
        return JSON.parse(file)
    },
    one: function (id) {
        let productos = this.all();
         //esto puede hacer error, reemplazar con ===
        return productos.find(producto => producto.id === id);
    }
};
module.exports = model;