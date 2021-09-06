const path = require('path');
const fs = require('fs');
const model = {
    all: function() {
        const directory = path.resolve(__dirname,"../data","brands.json")
        const file = fs.readFileSync(directory,"utf-8")
        return JSON.parse(file)
    },
    one: function (id) {
        let productos = this.all();
        let resultado = productos.find(producto => producto.id == id) //esto puede hacer error, reemplazar con ===
        return resultado;
    }
};
module.exports = model;